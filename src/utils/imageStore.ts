// IndexedDB storage utility for storing user-uploaded photos persistently in browser

const DB_NAME = 'EmmiWigsPhotoDB';
const DB_VERSION = 1;
const STORE_NAME = 'uploaded_images';

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });

  return dbPromise;
}

export interface StoredImage {
  key: string; // e.g. 'logo', 'hero', '5.jpg', 'burmese-curly-16', 'look-1'
  filename?: string;
  dataUrl: string;
  updatedAt: number;
}

// Save an image to IndexedDB
export async function saveImage(key: string, dataUrl: string, filename?: string): Promise<void> {
  try {
    const db = await getDB();
    const normalizedKey = key.toLowerCase().trim();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const item: StoredImage = {
        key: normalizedKey,
        filename,
        dataUrl,
        updatedAt: Date.now()
      };
      const req = store.put(item);
      req.onsuccess = () => {
        // Dispatch custom event to notify all components
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('emmi_image_updated', { detail: { key: normalizedKey, dataUrl } }));
        }
        resolve();
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to save image:', err);
  }
}

// Get an image by key or filename
export async function getImage(key: string): Promise<string | null> {
  try {
    const db = await getDB();
    const normalizedKey = key.toLowerCase().trim();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(normalizedKey);
      req.onsuccess = () => {
        if (req.result && req.result.dataUrl) {
          resolve(req.result.dataUrl);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    return null;
  }
}

// Get all stored images
export async function getAllImages(): Promise<Record<string, string>> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => {
        const result: Record<string, string> = {};
        if (Array.isArray(req.result)) {
          req.result.forEach((item: StoredImage) => {
            result[item.key] = item.dataUrl;
          });
        }
        resolve(result);
      };
      req.onerror = () => resolve({});
    });
  } catch (err) {
    return {};
  }
}

// Delete image by key
export async function deleteImage(key: string): Promise<void> {
  try {
    const db = await getDB();
    const normalizedKey = key.toLowerCase().trim();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(normalizedKey);
      req.onsuccess = () => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('emmi_image_updated', { detail: { key: normalizedKey, dataUrl: null } }));
        }
        resolve();
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to delete image:', err);
  }
}

// Clear all custom stored images
export async function clearAllImages(): Promise<void> {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('emmi_images_cleared'));
        }
        resolve();
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to clear images:', err);
  }
}
