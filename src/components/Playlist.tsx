import React from 'react';
import { Music } from 'lucide-react';

const songs = [
  { title: 'Perfect', artist: 'Ed Sheeran' },
  { title: 'All of Me', artist: 'John Legend' },
  { title: 'Just the Way You Are', artist: 'Bruno Mars' },
  { title: 'A Thousand Years', artist: 'Christina Perri' },
  { title: 'Thinking Out Loud', artist: 'Ed Sheeran' },
];

export default function Playlist() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-rose-gold-600 mb-8 text-center">
        Our Love Songs
      </h2>
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-rose-gold-50 transition-colors"
            >
              <Music className="w-6 h-6 text-rose-gold-400" />
              <div>
                <h3 className="font-semibold text-rose-gold-700">{song.title}</h3>
                <p className="text-sm text-rose-gold-500">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}