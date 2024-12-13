import { useState, useCallback } from 'react';
import { PokemonCard, PackStats } from '../types/types';

export const useCardCollection = () => {
  const [collectedCards, setCollectedCards] = useState<Set<number>>(new Set());

  const toggleCard = useCallback((cardId: number) => {
    setCollectedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  }, []);

  const getPackStats = useCallback((cards: PokemonCard[]): Record<string, PackStats> => {
    const stats: Record<string, PackStats> = {};
    
    cards.forEach((card) => {
      if (!stats[card.packName]) {
        stats[card.packName] = { total: 0, collected: 0 };
      }
      stats[card.packName].total++;
      if (collectedCards.has(card.id)) {
        stats[card.packName].collected++;
      }
    });

    return stats;
  }, [collectedCards]);

  return {
    collectedCards,
    toggleCard,
    getPackStats,
  };
};