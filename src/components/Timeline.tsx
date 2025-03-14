import React from 'react';

const events = [
  {
    date: 'First Online Meeting',
    description: 'The day our paths crossed in the digital world',
  },
  {
    date: 'First Video Call',
    description: 'Seeing your beautiful smile for the first time',
  },
  {
    date: 'Virtual Movie Date',
    description: 'Our first synchronized movie night together',
  },
  {
    date: 'Late Night Gaming',
    description: 'Playing and laughing until sunrise',
  },
  {
    date: 'Shared Spotify Playlist',
    description: 'Creating our collection of meaningful songs',
  },
  {
    date: '1.5 Years Together',
    description: 'Growing stronger despite the distance',
  }
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-rose-gold-600 mb-12 text-center">
        Our Digital Love Story
      </h2>
      <div className="relative timeline-dot">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex items-center gap-8 mb-12 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="w-1/2 text-right">
              <div
                className={`bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg ${
                  index % 2 === 0 ? 'mr-4' : 'ml-4'
                }`}
              >
                <h3 className="text-xl font-bold text-rose-gold-500 mb-2">
                  {event.date}
                </h3>
                <p className="text-rose-gold-700">{event.description}</p>
              </div>
            </div>
            <div className="w-4 h-4 bg-rose-gold-400 rounded-full z-10 shadow-lg" />
            <div className="w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}