import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('ruc-transport-favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse favorites from local storage');
      }
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id];
      localStorage.setItem('ruc-transport-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
}
