import React from 'react';
import { PokemonCard } from '../types/types';

interface CardProps {
  card: PokemonCard;
  isCollected: boolean;
  onToggle: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({ card, isCollected, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(card.id)}
      className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isCollected ? 'opacity-40' : 'opacity-100'
      }`}
    >
      <div className="relative bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-[10px] overflow-hidden border-8 border-yellow-300">
        {/* En-tête de la carte */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-2 flex justify-between items-center">
          <span className="font-bold text-sm">{card.name}</span>
          <span className="text-sm">#{card.number}</span>
        </div>
        
        {/* Image de la carte */}
        <div className="relative aspect-[2.5/3.5] bg-gradient-to-b from-blue-100 to-blue-200 m-2 rounded-sm">
          <img
            src={card.imageUrl}
            alt={card.name}
            className="absolute inset-0 w-full h-full object-contain rounded-sm"
          />
        </div>
        
        {/* Pied de la carte */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-2 text-center">
          <p className="text-sm font-semibold">{card.packName}</p>
        </div>
      </div>
    </div>
  );
};