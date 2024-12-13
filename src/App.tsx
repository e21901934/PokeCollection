import React from 'react';
import { Card } from './components/Card';
import { PackStats } from './components/PackStats';
import { useCardCollection } from './hooks/useCardCollection';
import { pokemonCards } from './data/pokemonCards';

function App() {
  const { collectedCards, toggleCard, getPackStats } = useCardCollection();
  const packStats = getPackStats(pokemonCards);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Collection Pokémon</h1>
        
        <div className="mb-8">
          <PackStats stats={packStats} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {pokemonCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isCollected={collectedCards.has(card.id)}
              onToggle={toggleCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;