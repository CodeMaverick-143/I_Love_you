import React from 'react';
import { Heart, Wifi } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="relative">
        <Heart className="w-24 h-24 text-rose-gold-400 absolute -top-12 -left-12 opacity-20 floating" />
        <Wifi className="w-16 h-16 text-rose-gold-300 absolute -bottom-8 -right-8 opacity-30 floating" />
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-rose-gold-600 mb-6">
            Happy Birthday, My Digital Love
          </h1>
          <p className="text-xl md:text-2xl text-rose-gold-800 mb-8 leading-relaxed">
            To the one who makes every notification special,<br />
            every video call magical, and my online life complete.
          </p>
          <div className="text-lg md:text-xl text-rose-gold-700 space-y-4">
            <p>
              This website is my digital embrace,<br />
              filled with our virtual memories and the magic we share.
            </p>
            <p className="italic">
              Click through each section to discover how much you mean to me...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}