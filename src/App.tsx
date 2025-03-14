import React, { useState } from 'react';
import { Heart, Music, ScrollText, Gift, Puzzle as PuzzlePiece } from 'lucide-react';
import Welcome from './components/Welcome';
import LoveLetter from './components/LoveLetter';
import Playlist from './components/Playlist';
import GiftBox from './components/GiftBox';
import SecretPuzzle from './components/SecretPuzzle';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  const sections = [
    { id: 'welcome', icon: Heart, label: 'Welcome' },
    { id: 'letter', icon: ScrollText, label: 'Love Letter' },
    { id: 'playlist', icon: Music, label: 'Playlist' },
    { id: 'giftbox', icon: Gift, label: 'Gift Box' },
    { id: 'puzzle', icon: PuzzlePiece, label: 'Secret' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'welcome':
        return <Welcome />;
      case 'letter':
        return <LoveLetter />;
      case 'playlist':
        return <Playlist />;
      case 'giftbox':
        return <GiftBox />;
      case 'puzzle':
        return <SecretPuzzle />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-gold-50 to-rose-gold-100">
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-rose-gold-200 p-4 md:top-0 md:bottom-auto">
        <div className="max-w-4xl mx-auto flex justify-around items-center">
          {sections.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                activeSection === id
                  ? 'text-rose-gold-600 scale-110'
                  : 'text-rose-gold-400 hover:text-rose-gold-500'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1 hidden md:block">{label}</span>
            </button>
          ))}
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8 md:py-24">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;