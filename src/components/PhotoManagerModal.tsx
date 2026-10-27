import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, CheckCircle2, Image as ImageIcon, Trash2, Sparkles, RefreshCw, AlertCircle, Eye } from 'lucide-react';
import { saveImage, getImage, getAllImages, clearAllImages, deleteImage } from '../utils/imageStore';
import { productsData, servicesData, customerLooksData, initialBusinessConfig } from '../data/initialData';
import { BusinessConfig } from '../types';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
}

interface ImageSlot {
  key: string;
  label: string;
  section: 'Branding' | 'Hero' | 'Products' | 'Services' | 'Looks';
  suggestedFilename: string;
  defaultSrc: string;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({
  isOpen,
  onClose,
  config
}) => {
  const [activeTab, setActiveTab] = useState<'bulk' | 'manage'>('bulk');
  const [storedImages, setStoredImages] = useState<Record<string, string>>({});
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const singleInputRef = useRef<HTMLInputElement>(null);
  const [selectedSlotKey, setSelectedSlotKey] = useState<string | null>(null);

  // Define all key image slots across the entire site
  const imageSlots: ImageSlot[] = [
    { key: 'logo', label: 'Emmi Wigs Official Logo', section: 'Branding', suggestedFilename: 'logo_ee8b5b46.jpg', defaultSrc: config.logo || '/assets/aistudio/logo_ee8b5b46.jpg' },
    { key: 'hero', label: 'Homepage Hero Photograph (Emmi)', section: 'Hero', suggestedFilename: 'Emmi.jpg', defaultSrc: '/assets/aistudio/Emmi.jpg' },
    ...productsData.map((p) => ({
      key: p.originalFilename || p.id,
      label: p.name,
      section: 'Products' as const,
      suggestedFilename: p.originalFilename || `${p.id}.jpg`,
      defaultSrc: p.image
    })),
    ...servicesData.map((s) => ({
      key: s.originalFilename || s.id,
      label: s.title,
      section: 'Services' as const,
      suggestedFilename: s.originalFilename || `${s.id}.jpg`,
      defaultSrc: s.image
    })),
    ...customerLooksData.map((l) => ({
      key: l.originalFilename || l.id,
      label: l.title,
      section: 'Looks' as const,
      suggestedFilename: l.originalFilename || `${l.id}.jpg`,
      defaultSrc: l.image
    }))
  ];

  // Load custom images from IndexedDB
  const refreshStoredImages = async () => {
    const all = await getAllImages();
    setStoredImages(all);
  };

  useEffect(() => {
    if (isOpen) {
      refreshStoredImages();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Process a batch of files (e.g. all 66 photos)
  const handleBatchFiles = async (files: FileList | File[]) => {
    setIsProcessing(true);
    setUploadStatus(`Processing ${files.length} uploaded photo(s)...`);

    let matchedCount = 0;
    const fileArray = Array.from(files);

    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];
      const filename = file.name.toLowerCase().trim();
      
      const reader = new FileReader();
      await new Promise<void>((resolve) => {
        reader.onload = async (e) => {
          const dataUrl = e.target?.result as string;
          if (dataUrl) {
            // 1. Save by full filename, e.g. '5.jpg', 'jj.jpg', 'logo.png'
            await saveImage(filename, dataUrl, file.name);

            // 2. Also check if filename has base name without extension, e.g. '5', 'jj'
            const baseName = filename.replace(/\.[^/.]+$/, "");
            await saveImage(baseName, dataUrl, file.name);

            // 3. If filename contains 'logo', also save under 'logo'
            if (filename.includes('logo') || filename.includes('emmi')) {
              await saveImage('logo', dataUrl, file.name);
            }

            // 4. If filename contains 'hero', also save under 'hero'
            if (filename.includes('hero')) {
              await saveImage('hero', dataUrl, file.name);
            }

            matchedCount++;
          }
          resolve();
        };
        reader.readAsDataURL(file);
      });
    }

    await refreshStoredImages();
    setIsProcessing(false);
    setUploadStatus(`Successfully imported ${matchedCount} photos! The website has updated automatically.`);
  };

  const handleSingleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0] || !selectedSlotKey) return;
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        await saveImage(selectedSlotKey, dataUrl, file.name);
        await refreshStoredImages();
        setUploadStatus(`Updated photo for "${selectedSlotKey}" successfully.`);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleClearAll = async () => {
    if (confirm('Are you sure you want to reset all custom uploaded photos back to default?')) {
      await clearAllImages();
      await refreshStoredImages();
      setUploadStatus('All custom photos reset to default.');
    }
  };

  const handleDeleteSlotImage = async (key: string) => {
    await deleteImage(key);
    await refreshStoredImages();
  };

  const customUploadedCount = Object.keys(storedImages).length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div
        className="relative bg-[#FAF7F2] text-[#151515] rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-[#C6A56B]/40 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#151515] text-[#C6A56B] flex items-center justify-center border border-[#C6A56B]/40">
              <Upload className="w-5 h-5 text-[#C6A56B]" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900">
                Photo & Logo Importer
              </h3>
              <p className="text-xs text-stone-500">
                Directly use your 66 uploaded pictures and logo across the website
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center justify-between pt-4 pb-2 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('bulk')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'bulk'
                  ? 'bg-[#151515] text-[#C6A56B]'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              ⚡ Quick Batch Upload (All 66 Photos)
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'manage'
                  ? 'bg-[#151515] text-[#C6A56B]'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              🖼️ Manage Individual Slots ({customUploadedCount} active)
            </button>
          </div>

          {customUploadedCount > 0 && (
            <button
              onClick={handleClearAll}
              className="text-[11px] text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer font-medium"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Reset All</span>
            </button>
          )}
        </div>

        {/* Status Message */}
        {uploadStatus && (
          <div className="my-2 p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2 shrink-0 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{uploadStatus}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto pr-1 mt-3 space-y-6">
          {activeTab === 'bulk' ? (
            <div className="space-y-6">
              
              {/* Drag and drop zone */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    handleBatchFiles(e.dataTransfer.files);
                  }
                }}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#C6A56B] bg-[#FAF7F2] hover:bg-[#F3EDE2] rounded-3xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 group shadow-inner"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      handleBatchFiles(e.target.files);
                    }
                  }}
                />

                <div className="w-16 h-16 rounded-full bg-[#151515] text-[#C6A56B] mx-auto flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg mb-4">
                  <Upload className="w-7 h-7" />
                </div>

                <h4 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-2">
                  Drop Your 66 Photos & Logo Here
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-4">
                  Select your photos (such as <code className="font-mono bg-stone-200 px-1.5 py-0.5 rounded text-[#151515]">5.jpg</code>, <code className="font-mono bg-stone-200 px-1.5 py-0.5 rounded text-[#151515]">1.jpg</code>, <code className="font-mono bg-stone-200 px-1.5 py-0.5 rounded text-[#151515]">JJ.jpg</code>, <code className="font-mono bg-stone-200 px-1.5 py-0.5 rounded text-[#151515]">logo.jpg</code>) from your phone or laptop.
                </p>

                <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#C6A56B] text-[#151515] group-hover:bg-[#d8b97d] transition-colors shadow">
                  <ImageIcon className="w-4 h-4" />
                  <span>{isProcessing ? 'Processing...' : 'Click to Select All Files (Multiple)'}</span>
                </div>
              </div>

              {/* Explanatory Guide */}
              <div className="bg-stone-100 p-5 rounded-2xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#C6A56B]" />
                  <span>How Image Matching Works</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600">
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-semibold text-stone-900 block mb-1">1. Exact Filename Match</span>
                    <span>Files named <code className="font-mono text-[#C6A56B]">5.jpg</code> or <code className="font-mono text-[#C6A56B]">1.jpg</code> automatically slot into the Burmese Curly or 28" Straight wig.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-semibold text-stone-900 block mb-1">2. Logo & Hero Auto-Detect</span>
                    <span>Any file named <code className="font-mono text-[#C6A56B]">logo.*</code> updates the header, footer, and seals instantly.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-semibold text-stone-900 block mb-1">3. Offline & Persistent</span>
                    <span>All uploaded pictures are saved securely in your browser's IndexedDB so they stay loaded upon refresh!</span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Individual Slot Managers */}
              <div className="space-y-4">
                <p className="text-xs text-stone-500">
                  Click <strong>"Upload Photo"</strong> on any individual item to replace its image with your specific photo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {imageSlots.map((slot) => {
                    const customImage = storedImages[slot.key.toLowerCase()];
                    const isCustom = !!customImage;

                    return (
                      <div
                        key={slot.key}
                        className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-3"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#C6A56B]">
                              {slot.section}
                            </span>
                            {isCustom ? (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                                ✓ Custom Active
                              </span>
                            ) : (
                              <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">
                                Default
                              </span>
                            )}
                          </div>

                          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 border border-stone-200 relative group">
                            <img
                              src={customImage || slot.defaultSrc}
                              alt={slot.label}
                              className="w-full h-full object-cover"
                            />
                            {isCustom && (
                              <button
                                onClick={() => handleDeleteSlotImage(slot.key)}
                                title="Remove custom photo"
                                className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600/90 hover:bg-red-700 text-white shadow transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          <div>
                            <h5 className="font-semibold text-xs text-stone-900 line-clamp-1">
                              {slot.label}
                            </h5>
                            <span className="text-[11px] text-stone-400 font-mono">
                              Key: {slot.suggestedFilename}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setSelectedSlotKey(slot.key);
                            singleInputRef.current?.click();
                          }}
                          className="w-full py-2 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-[#151515] hover:text-[#C6A56B] transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-stone-800"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>{isCustom ? 'Change Photo' : 'Upload Photo'}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Hidden Single File Input */}
        <input
          type="file"
          ref={singleInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleSingleFileUpload}
        />

        {/* Modal Footer */}
        <div className="pt-4 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">
            {customUploadedCount > 0 ? (
              <span className="text-emerald-700 font-medium">
                ✓ {customUploadedCount} custom image(s) actively displayed across website
              </span>
            ) : (
              <span>All 66 slots mapped and ready for import</span>
            )}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full text-xs font-semibold bg-[#151515] text-[#C6A56B] hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
