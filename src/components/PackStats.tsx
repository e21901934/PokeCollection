import React from 'react';
import { PackStats as PackStatsType } from '../types/types';

interface PackStatsProps {
  stats: Record<string, PackStatsType>;
}

export const PackStats: React.FC<PackStatsProps> = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Statistiques par Pack</h2>
      <div className="space-y-4">
        {Object.entries(stats).map(([packName, { total, collected }]) => (
          <div key={packName} className="border-b pb-2">
            <h3 className="font-semibold text-lg">{packName}</h3>
            <div className="flex justify-between text-sm">
              <span>Collectées: {collected}</span>
              <span>Total: {total}</span>
              <span>Progression: {Math.round((collected / total) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${(collected / total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};