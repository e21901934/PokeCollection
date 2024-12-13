export interface PokemonCard {
  id: number;
  name: string;
  number: string;
  packName: string;
  imageUrl: string;
}

export interface PackStats {
  total: number;
  collected: number;
}