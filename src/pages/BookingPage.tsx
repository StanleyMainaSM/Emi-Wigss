import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sparkles, Calendar } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';
import { servicesData } from '../data/initialData';
import { BusinessConfig } from '../types';

interface BookingPageProps {
  config: BusinessConfig;
}

export const BookingPage: React.FC<BookingPageProps> = ({ config }) => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || undefined;
  const notesParam = searchParams.get('notes') || undefined;

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingSection
          services={servicesData}
          config={config}
          preselectedServiceId={serviceParam}
          preselectedNotes={notesParam}
        />
      </div>
    </div>
  );
};
