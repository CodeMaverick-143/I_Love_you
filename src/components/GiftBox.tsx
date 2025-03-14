import React, { useState } from 'react';
import { Gift } from 'lucide-react';

export default function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-rose-gold-600 mb-8">
        A Special Gift For You
      </h2>
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-40 h-40 mx-auto mb-8 transition-transform duration-500 hover:scale-110"
        >
          <Gift
            className={`w-full h-full text-rose-gold-400 transition-transform duration-500 ${
              isOpen ? 'scale-110' : ''
            }`}
          />
        </button>
        
        {isOpen && (
          <div className="animate-fade-in space-y-6">
            <p className="text-xl text-rose-gold-700">
              My darling, inside this virtual gift box, I've placed all my love,
              dreams, and wishes for our future together.
            </p>
            <div className="space-y-4 text-rose-gold-600">
              <p>💝 A lifetime of adventures</p>
              <p>💝 Endless cuddles and kisses</p>
              <p>💝 A promise to always be there</p>
              <p>💝 My eternal love and devotion</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}