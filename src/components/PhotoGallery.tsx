import React from 'react';

const photos = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600', // Video call screenshot
  'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600', // Gaming setup
  'https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=600', // Late night chat
  'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600', // Virtual date
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600', // Special moments
  'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600', // Digital memories
];

export default function PhotoGallery() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-rose-gold-600 mb-8 text-center">
        Our Digital Memories
      </h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={photo}
              alt={`Digital Memory ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">Our virtual moments together ❤️</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}