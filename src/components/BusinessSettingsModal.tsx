import React, { useState } from 'react';
import { X, Save, RotateCcw, SlidersHorizontal, CheckCircle, HelpCircle } from 'lucide-react';
import { BusinessConfig } from '../types';
import { initialBusinessConfig } from '../data/initialData';

interface BusinessSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onSaveConfig: (newConfig: BusinessConfig) => void;
}

export const BusinessSettingsModal: React.FC<BusinessSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  if (!isOpen) return null;

  const [formValues, setFormValues] = useState<BusinessConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (field: keyof BusinessConfig, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formValues);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setFormValues({ ...initialBusinessConfig });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div
        className="relative bg-[#FAF7F2] text-[#151515] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#C6A56B]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#151515] text-[#C6A56B] flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-stone-900">
                Business Information Setup
              </h3>
              <p className="text-xs text-stone-500">
                Review and update Emmi Wigs business data for the live website
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Guidance */}
        <div className="mt-4 p-3 bg-stone-100 rounded-xl text-xs text-stone-600 flex items-start gap-2 border border-stone-200">
          <HelpCircle className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
          <span>
            These settings immediately update all phone links, WhatsApp buttons, currency symbols, and address labels across the website.
          </span>
        </div>

        {/* Logo Preview & Branding */}
        <div className="mt-4 p-3.5 bg-stone-900 rounded-2xl flex items-center justify-between border border-[#C6A56B]/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C6A56B]/60 bg-black shrink-0">
              <img
                src={formValues.logo || '/assets/aistudio/logo_ee8b5b46.jpg'}
                alt="Emmi Wigs Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">Emmi Wigs Brand Logo</span>
              <span className="text-[11px] text-[#C6A56B]">Active uploaded brand emblem</span>
            </div>
          </div>
          <span className="text-[10px] bg-[#C6A56B]/20 text-[#C6A56B] px-2.5 py-1 rounded-full border border-[#C6A56B]/40">
            ✓ Uploaded Asset
          </span>
        </div>

        {/* Settings Form */}
        <form onSubmit={handleSave} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Brand Name */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                Brand Name
              </label>
              <input
                type="text"
                value={formValues.brandName}
                onChange={(e) => handleChange('brandName', e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            {/* Currency Symbol */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                Currency Symbol
              </label>
              <input
                type="text"
                value={formValues.currency}
                onChange={(e) => handleChange('currency', e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            {/* Display Phone */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                Display Phone Number
              </label>
              <input
                type="text"
                value={formValues.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            {/* WhatsApp Number (digits only with country code) */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                WhatsApp Digits (e.g. 254797238278)
              </label>
              <input
                type="text"
                value={formValues.whatsappNumber}
                onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formValues.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            {/* Location City / Region */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                City / Region
              </label>
              <input
                type="text"
                value={formValues.locationName}
                onChange={(e) => handleChange('locationName', e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            {/* Physical Location Address */}
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                Physical Studio Address
              </label>
              <input
                type="text"
                value={formValues.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            {/* Opening Hours */}
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                Opening Hours
              </label>
              <input
                type="text"
                value={formValues.openingHours}
                onChange={(e) => handleChange('openingHours', e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            {/* Social Profiles */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                Instagram URL
              </label>
              <input
                type="text"
                value={formValues.instagram}
                onChange={(e) => handleChange('instagram', e.target.value)}
                placeholder="https://instagram.com/..."
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-1">
                TikTok URL
              </label>
              <input
                type="text"
                value={formValues.tiktok}
                onChange={(e) => handleChange('tiktok', e.target.value)}
                placeholder="https://tiktok.com/@..."
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-stone-300 focus:outline-none focus:border-[#C6A56B]"
              />
            </div>

          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-black flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-200 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#151515] text-[#C6A56B] hover:bg-stone-900 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
