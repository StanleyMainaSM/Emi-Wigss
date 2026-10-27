import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';
import { BusinessConfig } from '../types';

interface AboutSectionProps {
  config: BusinessConfig;
  onOpenSettings: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onOpenSettings }) => {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2] text-[#151515] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#C6A56B]/30 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden bg-stone-900 shadow-xl aspect-[3/4]">
                <img
                  src="/assets/aistudio/EE_bab6f1cd.jpg"
                  alt="Emmi Wigs Artisan Hair Craftsmanship"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#C6A56B] font-semibold">
                    Our Philosophy
                  </span>
                  <p className="font-serif text-xl font-medium">
                    Flawless Hairlines. Unmatched Confidence.
                  </p>
                </div>
              </div>

              {/* Overlapping salon process card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 rounded-xl overflow-hidden shadow-2xl border-2 border-[#C6A56B]/50 bg-stone-900 group">
                <img
                  src="/assets/aistudio/4_ad2655cc.jpg"
                  alt="Precision lace cap craftsmanship"
                  className="w-full h-32 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-2 bg-[#151515] text-[10px] text-center font-medium text-[#C6A56B]">
                  Studio Lace Melt
                </div>
              </div>

              {/* Brand Logo Floating Badge */}
              <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-black border-2 border-[#C6A56B] shadow-xl p-1 flex items-center justify-center">
                <img
                  src={config.logo || '/assets/aistudio/logo_ee8b5b46.jpg'}
                  alt="Emmi Wigs Seal"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy and Values */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About {config.brandName}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 leading-tight">
              Elevating the Art of the Wig Melt
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              At <strong>{config.brandName}</strong>, we believe every woman deserves to experience hair that feels like an authentic crown. We specialize in curating high-grade human hair wigs—from bouncy Burmese curls and razor-sharp blunt bobs to bone straight silk presses and protective braided units—paired with meticulous lace customization.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              Whether you are preparing for a wedding, a milestone celebration, or looking for an everyday protective style that protects your natural edges, our dedicated styling process ensures your lace melts imperceptibly into your skin tone.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#C6A56B]" />
                  <span>100% Quality Assurance</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Single donor drawn human hair with cuticles aligned to prevent matting and preserve natural shine.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#C6A56B]" />
                  <span>Customized Hairlines</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Bleached knots and graduated density plucking for an undetectable natural scalp finish.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <Heart className="w-4 h-4 text-[#C6A56B]" />
                  <span>Protective Hair Care</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Techniques focused on edge preservation and healthy tension-free braiding foundations.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-[#C6A56B]" />
                  <span>Transparent Pricing</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Clear upfront prices in Kenyan Shillings ({config.currency}) with free installation on select catalog units.
                </p>
              </div>
            </div>

            {/* Business Verification Note */}
            <div className="pt-2 text-xs text-stone-400 flex items-center justify-between">
              <span>Verified Contact: {config.phoneDisplay} • Nairobi, Kenya</span>
              <button
                onClick={onOpenSettings}
                className="text-[#C6A56B] underline hover:text-[#9e7f47] cursor-pointer"
              >
                Customize Studio Info
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
