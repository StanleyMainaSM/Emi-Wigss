import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, Instagram, ExternalLink, Sparkles, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { BusinessConfig } from '../types';

interface ContactPageProps {
  config: BusinessConfig;
}

export const ContactPage: React.FC<ContactPageProps> = ({ config }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Wig Purchase',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Build WhatsApp message
    const msg = `Hello ${config.brandName}, my name is ${formData.name} (${formData.phone}). I have an inquiry regarding: ${formData.inquiryType}.\n\nMessage: ${formData.message}`;
    const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    
    setSubmitted(true);
    window.open(url, '_blank');
  };

  const faqs = [
    {
      q: 'How long do your virgin human hair wigs last?',
      a: 'With proper gentle maintenance and hydration (using our Enzo Keratin Hair Serum), our Single Donor Drawn human hair wigs easily last 2 to 4+ years of regular wear without losing luster.'
    },
    {
      q: 'Do you offer nationwide delivery outside Nairobi?',
      a: 'Yes! We ship securely across Kenya via Speedaf, Fargo Courier, and local shuttle parcels to Mombasa, Kisumu, Nakuru, Eldoret, Thika, and all major towns, arriving within 24–48 hours.'
    },
    {
      q: 'Is installation free for all wigs?',
      a: 'We offer 100% complimentary salon installation on select flagship units (such as our 14" SDD Bob, 16" Burmese Curls, and 24" Deepwave). For other units, installation is available at an affordable consultation rate.'
    },
    {
      q: 'Can I bring my own wig for installation or revamping?',
      a: 'Absolutely! You can bring in your own human hair wigs for our signature custom lace tinting, knot bleaching, custom plucking, wash & curl restyling, or adhesive reinstall.'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16 text-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with Emmi Wigs</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900">
            Contact & Studio Inquiries
          </h1>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Have a question about lace textures, custom lengths, wholesale orders, or salon appointments? Reach out directly via WhatsApp, call, or message.
          </p>
        </div>

        {/* 4 Contact Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: WhatsApp Hotline */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                WhatsApp Hotline
              </h3>
              <p className="text-xs text-stone-500">
                Fastest response for photos & orders:
              </p>
              <p className="text-sm font-bold text-stone-900 font-mono">
                {config.phoneDisplay}
              </p>
            </div>
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=Hello%20${encodeURIComponent(config.brandName)},%20I%20have%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-full bg-stone-100 text-[#151515] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Direct Phone
              </h3>
              <p className="text-xs text-stone-500">
                For urgent appointment bookings:
              </p>
              <p className="text-sm font-bold text-stone-900 font-mono">
                {config.phone}
              </p>
            </div>
            <a
              href={`tel:${config.phone}`}
              className="min-h-[44px] py-2.5 px-4 rounded-xl text-xs font-semibold bg-stone-100 text-stone-900 hover:bg-[#151515] hover:text-[#C6A56B] transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#C6A56B]/15 text-[#C6A56B] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Studio Location
              </h3>
              <p className="text-xs text-stone-500">
                Serving clients in Nairobi & nationwide:
              </p>
              <p className="text-xs font-medium text-stone-800 leading-snug">
                Nairobi CBD Studio Suite • Delivery Across Kenya
              </p>
            </div>
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=Hello%20${encodeURIComponent(config.brandName)},%20please%20send%20me%20your%20exact%20studio%20directions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] py-2.5 px-4 rounded-xl text-xs font-semibold bg-stone-100 text-stone-900 hover:bg-stone-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Get Directions</span>
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Opening Hours
              </h3>
              <p className="text-xs text-stone-500">
                Flexible scheduling:
              </p>
              <div className="text-xs text-stone-800 space-y-1">
                <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p className="text-[#C6A56B] font-semibold">Sunday: By Appointment</p>
              </div>
            </div>
            <div className="py-2.5 px-4 rounded-xl text-xs text-center font-medium bg-stone-50 text-stone-600 border border-stone-200 min-h-[44px] flex items-center justify-center">
              <span>Walk-ins & Appointments</span>
            </div>
          </div>

        </div>

        {/* Contact Form & FAQ Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Quick Message Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A56B]">
                Fast Online Inquiry
              </span>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">
                Send a Message to Emmi
              </h2>
              <p className="text-stone-500 text-xs mt-1">
                Fill in your details below and we will automatically direct your inquiry to our WhatsApp line for instant response.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Stephanie Wanjiku"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#C6A56B] bg-stone-50 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0797 238 278"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#C6A56B] bg-stone-50 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  What are you interested in?
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#C6A56B] bg-stone-50 focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="Wig Purchase (Ready to Wear)">Wig Purchase (Ready to Wear)</option>
                  <option value="Lace Wig Installation Service">Lace Wig Installation Service</option>
                  <option value="Wig Revamping & Restyling">Wig Revamping & Restyling</option>
                  <option value="Custom Hair Coloring">Custom Hair Coloring</option>
                  <option value="Hair Care Products (Enzo Serum / Mist)">Hair Care Products (Enzo Serum / Mist)</option>
                  <option value="General Salon Question">General Salon Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Message / Special Request
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about the texture, length, color, or appointment date you have in mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl border border-stone-300 text-xs focus:outline-none focus:border-[#C6A56B] bg-stone-50 focus:bg-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#151515] text-[#C6A56B] hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right: FAQs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A56B]">
                Helpful Answers
              </span>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full min-h-[48px] p-5 text-left font-serif text-base font-medium text-stone-900 flex items-center justify-between gap-4 cursor-pointer hover:text-[#C6A56B] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#C6A56B]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="p-6 bg-stone-900 rounded-2xl text-white space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C6A56B] block">
                Follow Us Online
              </span>
              <p className="text-stone-300 text-xs">
                Catch our daily wig transformations, lace install tutorials, and client reviews on social media:
              </p>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={config.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#C6A56B] hover:text-[#151515] text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={config.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#C6A56B] hover:text-[#151515] text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
