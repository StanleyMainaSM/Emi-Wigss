import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Sparkles, MessageSquare, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { BeautyService, BusinessConfig, BookingFormData } from '../types';

interface BookingSectionProps {
  services: BeautyService[];
  config: BusinessConfig;
  preselectedServiceId?: string;
  preselectedNotes?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  services,
  config,
  preselectedServiceId,
  preselectedNotes
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: preselectedServiceId || (services[0]?.id ?? ''),
    wigOption: 'purchase',
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: preselectedNotes || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [submittedBooking, setSubmittedBooking] = useState<{
    data: BookingFormData;
    serviceName: string;
    whatsappUrl: string;
  } | null>(null);

  // Time slots
  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM'
  ];

  // Min date is tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      errs.phone = 'Please enter a valid phone number (e.g., 0797238278)';
    }

    if (!formData.serviceId) {
      errs.serviceId = 'Please select a preferred service';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred appointment date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const matchedService = services.find((s) => s.id === formData.serviceId);
    const serviceName = matchedService ? matchedService.title : 'Custom Wig Service';

    const wigOptionLabel =
      formData.wigOption === 'purchase'
        ? 'Purchasing a new unit from Emmi Wigs'
        : formData.wigOption === 'bring_own'
        ? 'Bringing my own wig for installation'
        : 'Consultation & Fitting Session';

    // Construct formatted message
    const msg = `👑 *APPOINTMENT BOOKING REQUEST — ${config.brandName}*
---------------------------------------
• Client Name: ${formData.fullName}
• Phone: ${formData.phone}
• Service: ${serviceName}
• Wig Status: ${wigOptionLabel}
• Preferred Date: ${formData.preferredDate}
• Preferred Time: ${formData.preferredTime}
${formData.notes ? `• Additional Notes: ${formData.notes}\n` : ''}---------------------------------------
Please let me know if this slot is available to confirm my appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    setSubmittedBooking({
      data: formData,
      serviceName,
      whatsappUrl
    });
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      serviceId: services[0]?.id ?? '',
      wigOption: 'purchase',
      preferredDate: '',
      preferredTime: '10:00 AM',
      notes: '',
    });
  };

  return (
    <section id="booking" className="py-24 bg-white text-[#151515] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            Book an Appointment
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Reserve your seat for professional wig installation, styling, or revamping. Send your booking request directly to our verified salon WhatsApp hotline.
          </p>
        </div>

        {/* Confirmation Screen if Submitted */}
        {submittedBooking ? (
          <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#C6A56B]/40 shadow-xl space-y-6 animate-fade-in text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
                Booking Details Prepared!
              </h3>
              <p className="text-stone-600 text-sm max-w-lg mx-auto">
                Thank you, <strong>{submittedBooking.data.fullName}</strong>. To complete your reservation and lock in your slot, please dispatch this booking directly to Emmi Wigs on WhatsApp:
              </p>
            </div>

            {/* Summary Ticket */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 text-left text-xs sm:text-sm space-y-3 max-w-md mx-auto shadow-sm">
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-500">Service:</span>
                <span className="font-semibold text-stone-900">{submittedBooking.serviceName}</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-500">Date & Time:</span>
                <span className="font-semibold text-stone-900">
                  {submittedBooking.data.preferredDate} at {submittedBooking.data.preferredTime}
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-2">
                <span className="text-stone-500">Contact Number:</span>
                <span className="font-semibold text-stone-900">{submittedBooking.data.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Salon Contact:</span>
                <span className="font-semibold text-[#C6A56B]">{config.phoneDisplay}</span>
              </div>
            </div>

            {/* WhatsApp CTA Handover */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={submittedBooking.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-[#25D366] text-white hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp ({config.phone})</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 transition-colors"
              >
                Book Another Service
              </button>
            </div>

            <p className="text-[11px] text-stone-400">
              Honest demonstration notice: As no external database is attached, your booking opens WhatsApp directly so the salon owner receives your exact appointment request immediately.
            </p>
          </div>
        ) : (
          /* Main Booking Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm space-y-6"
            noValidate
          >
            {/* Honest Notice */}
            <div className="p-3.5 bg-stone-100 rounded-xl border border-stone-200/60 text-xs text-stone-600 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
              <span>
                <strong>Demonstration Mode:</strong> Fill in your preferred appointment details below. Upon submission, you will be handed over to WhatsApp with your full booking ticket ready to send directly to Emmi Wigs at <strong>{config.phone}</strong>.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Stephanie Wanjiku"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${
                    errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-stone-300 focus:border-[#C6A56B]'
                  } focus:outline-none transition-colors text-stone-900`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Phone / WhatsApp Number *</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 0797 238 278"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${
                    errors.phone ? 'border-red-400 focus:border-red-500' : 'border-stone-300 focus:border-[#C6A56B]'
                  } focus:outline-none transition-colors text-stone-900`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Select Service *</span>
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-stone-300 focus:border-[#C6A56B] focus:outline-none transition-colors text-stone-900 cursor-pointer"
                >
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title} — {svc.priceText} ({svc.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Wig Ownership Option */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                  Wig Arrangement:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center gap-2.5 transition-all ${
                      formData.wigOption === 'purchase'
                        ? 'border-[#C6A56B] bg-white shadow-sm text-stone-900 font-semibold'
                        : 'border-stone-200 bg-white/60 text-stone-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="wigOption"
                      value="purchase"
                      checked={formData.wigOption === 'purchase'}
                      onChange={() => setFormData({ ...formData, wigOption: 'purchase' })}
                      className="accent-[#C6A56B]"
                    />
                    <span>Purchasing from Emmi Wigs</span>
                  </label>

                  <label
                    className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center gap-2.5 transition-all ${
                      formData.wigOption === 'bring_own'
                        ? 'border-[#C6A56B] bg-white shadow-sm text-stone-900 font-semibold'
                        : 'border-stone-200 bg-white/60 text-stone-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="wigOption"
                      value="bring_own"
                      checked={formData.wigOption === 'bring_own'}
                      onChange={() => setFormData({ ...formData, wigOption: 'bring_own' })}
                      className="accent-[#C6A56B]"
                    />
                    <span>Bringing My Own Wig</span>
                  </label>

                  <label
                    className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center gap-2.5 transition-all ${
                      formData.wigOption === 'consultation'
                        ? 'border-[#C6A56B] bg-white shadow-sm text-stone-900 font-semibold'
                        : 'border-stone-200 bg-white/60 text-stone-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="wigOption"
                      value="consultation"
                      checked={formData.wigOption === 'consultation'}
                      onChange={() => setFormData({ ...formData, wigOption: 'consultation' })}
                      className="accent-[#C6A56B]"
                    />
                    <span>Consultation / Fitting</span>
                  </label>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Preferred Date *</span>
                </label>
                <input
                  type="date"
                  min={minDateString}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${
                    errors.preferredDate ? 'border-red-400 focus:border-red-500' : 'border-stone-300 focus:border-[#C6A56B]'
                  } focus:outline-none transition-colors text-stone-900 cursor-pointer`}
                />
                {errors.preferredDate && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C6A56B]" />
                  <span>Preferred Time Slot *</span>
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-stone-300 focus:border-[#C6A56B] focus:outline-none transition-colors text-stone-900 cursor-pointer"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Message */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                  Special Requests or Hair Notes (Optional):
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Please bring extra pins, need glueless styling, or interested in 99J burgundy coloring."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-stone-300 focus:border-[#C6A56B] focus:outline-none transition-colors text-stone-900 resize-none"
                />
              </div>

            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-stone-200">
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-semibold tracking-wider uppercase bg-[#151515] text-[#C6A56B] hover:bg-stone-900 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Generate WhatsApp Request</span>
              </button>
              <p className="text-[11px] text-stone-500 text-center mt-2">
                No credit card or online payment required. Appointments are confirmed directly with our stylist.
              </p>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
