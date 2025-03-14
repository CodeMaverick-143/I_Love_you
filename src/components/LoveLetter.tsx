import React from 'react';

export default function LoveLetter() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-gold-600 mb-8 text-center">
          My Digital Love Letter
        </h2>
        <div className="prose prose-lg max-w-none text-rose-gold-800 space-y-6">
          <p className="first-letter:text-4xl first-letter:font-serif first-letter:mr-3 first-letter:float-left">
            In this vast digital world, fate brought us together. Every notification from you makes my heart skip a beat, and every video call feels like a precious gift. Distance may separate our bodies, but it cannot keep our hearts apart.
          </p>
          <p>
            Through late-night messages, shared playlists, and virtual movie dates, we've created a love story that transcends physical boundaries. Your presence in my life, even through a screen, fills my world with colors I never knew existed.
          </p>
          <p>
            As we celebrate your birthday across the miles, I want you to know that every pixel of my heart belongs to you. Our love proves that real connections don't need physical touch to grow stronger each day.
          </p>
          <p className="text-right italic">
            Forever yours,<br />
            Your Love<br />
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}