import React, { useState, useEffect } from 'react';
import { Heart, Cake } from 'lucide-react';

const PUZZLE_PIECES = ['❤️', '💕', '💝', '💖'];
const SECRET_MESSAGE = "You're the missing piece to my heart's puzzle. I love you more than words can say.";

export default function SecretPuzzle() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [cakeSliced, setCakeSliced] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; size: number; speed: number }[]>([]);

  // Generate floating hearts in the background
  useEffect(() => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 5 + 2
    }));
    setHearts(newHearts);
  }, []);

  const handlePieceClick = (piece: string) => {
    const newSequence = [...sequence, piece];
    setSequence(newSequence);

    if (newSequence.length === PUZZLE_PIECES.length) {
      const isCorrect = JSON.stringify(newSequence) === JSON.stringify(PUZZLE_PIECES);
      if (isCorrect) {
        setRevealed(true);
        // Show cake animation after puzzle is solved
        setTimeout(() => setShowCake(true), 1500);
      } else {
        setSequence([]);
      }
    }
  };

  const handleCakeClick = () => {
    setCakeSliced(true);
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-rose-gold-200 opacity-50"
            style={{
              left: `${heart.x}%`,
              top: '-50px',
              fontSize: `${heart.size}px`,
              animation: `float-up ${heart.speed}s linear infinite`,
              animationDelay: `${heart.id * 0.2}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-rose-gold-600 mb-8 text-center">
        <Heart className="inline-block w-8 h-8 mr-2 text-rose-gold-500" />
        Unlock My Heart
        <Heart className="inline-block w-8 h-8 ml-2 text-rose-gold-500" />
      </h2>
      
      <div className="bg-gradient-to-br from-rose-gold-50 to-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center border border-rose-gold-200">
        {!revealed ? (
          <>
            <p className="text-lg text-rose-gold-700 mb-8">
              Arrange the hearts in the correct order to reveal a special message from my heart to yours...
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {PUZZLE_PIECES.map((piece, index) => (
                <button
                  key={index}
                  onClick={() => handlePieceClick(piece)}
                  className="text-4xl p-6 rounded-xl bg-gradient-to-r from-rose-gold-100 to-rose-gold-200 hover:from-rose-gold-200 hover:to-rose-gold-300 transition-all hover:scale-105 shadow-md"
                  disabled={sequence.includes(piece)}
                >
                  {piece}
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-4 text-2xl">
              {sequence.map((piece, index) => (
                <span key={index} className="animate-bounce">{piece}</span>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div className="animate-fade-in">
              <div className="text-4xl mb-8">🎉 💝 🎉</div>
              <div className="p-6 bg-gradient-to-r from-rose-gold-100 to-rose-gold-50 rounded-2xl border border-rose-gold-200 shadow-inner">
                <p className="text-xl text-rose-gold-700 italic mb-8 leading-relaxed">
                  "{SECRET_MESSAGE}"
                </p>
                <div className="flex justify-center">
                  <Heart className="text-rose-gold-500 w-10 h-10 animate-pulse" />
                </div>
              </div>
            </div>
            
            {showCake && (
              <div className="mt-12 animate-fade-in">
                <h3 className="text-2xl font-bold text-rose-gold-600 mb-4">
                  Let's celebrate our love with cake!
                </h3>
                <div className="flex justify-center">
                  <button 
                    onClick={handleCakeClick}
                    className="relative transition-all duration-500 hover:scale-105"
                  >
                    <div className={`cake-container relative ${cakeSliced ? 'cake-sliced' : ''}`}>
                      <div className="cake-base w-64 h-48 bg-gradient-to-b from-rose-gold-200 to-rose-gold-300 rounded-lg relative overflow-hidden shadow-lg">
                        {/* Cake layers */}
                        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-b from-rose-gold-400 to-rose-gold-500 rounded-b-lg"></div>
                        <div className="absolute bottom-1/3 w-full h-1/3 bg-gradient-to-b from-rose-gold-300 to-rose-gold-400"></div>
                        
                        {/* Cake decorations */}
                        <div className="absolute top-0 left-0 w-full flex justify-center">
                          <div className="candle w-4 h-16 bg-rose-gold-100 relative">
                            <div className="flame w-6 h-6 bg-yellow-400 rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 animate-glow"></div>
                          </div>
                        </div>
                        
                        {/* Heart decorations on cake */}
                        <div className="absolute top-2 left-4">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute top-6 right-8">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute top-10 left-12">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        
                        {/* Cake frosting */}
                        <div className="absolute top-0 w-full h-1/6 bg-white rounded-t-lg"></div>
                        
                        {/* Slice animation */}
                        {cakeSliced && (
                          <>
                            <div className="cake-slice absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-rose-gold-200 to-rose-gold-500 rounded-tr-lg transform transition-transform duration-1000 translate-x-full"></div>
                            <div className="slice-line absolute top-0 right-1/3 h-full w-1 bg-white"></div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {!cakeSliced ? (
                      <p className="mt-4 text-rose-gold-600 animate-pulse">Click to cut our celebration cake! 💕</p>
                    ) : (
                      <p className="mt-4 text-rose-gold-600">Happy Birthday, my love! 🎂</p>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}