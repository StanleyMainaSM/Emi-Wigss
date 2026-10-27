import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import { BusinessConfig } from '../types';

interface NotFoundPageProps {
  config: BusinessConfig;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ config }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-[75vh] flex items-center justify-center px-4 py-20 text-[#151515]">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-5">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#C6A56B]/15 text-[#C6A56B] flex items-center justify-center">
          <Sparkles className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B] block">
          Page Not Found • 404
        </span>
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Looking for a Crown?
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
          The page you requested could not be found. Explore our authentic wig collection or visit our salon home.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            to="/shop"
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-stone-100 text-stone-800 hover:bg-stone-200 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Browse Wigs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
