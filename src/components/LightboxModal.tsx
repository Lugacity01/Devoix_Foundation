'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        {/* Backdrop Close Click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous Image"
            className="absolute left-4 z-50 p-3 text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative z-40 max-w-5xl max-h-[85vh] w-full flex items-center justify-center pointer-events-none"
        >
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl  pointer-events-auto"
          />
        </motion.div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={onNext}
            aria-label="Next Image"
            className="absolute right-4 z-50 p-3 text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-1.5 rounded-full bg-slate-800/90 text-white text-xs font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </AnimatePresence>
  );
};
