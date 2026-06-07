import { TOOLS } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Favorites() {
  const { favorites } = useFavorites();
  
  const favoriteTools = TOOLS.filter(tool => favorites.includes(tool.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
      <div className="border-b border-slate-200 pb-6 flex items-center gap-3 shrink-0">
        <div className="p-2 bg-red-50 text-red-500 rounded-lg">
          <Heart className="h-6 w-6 fill-current" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Favorites</h1>
          <p className="text-slate-600 text-sm mt-1">Saved tools for quick access.</p>
        </div>
      </div>

      {favoriteTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favoriteTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
          <Heart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">No favorites yet</h3>
          <p className="text-sm text-slate-500">
            Click the heart icon on any tool card to save it here for later.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center mt-6 px-4 py-2 text-sm font-semibold text-white bg-[#1e3a8a] rounded-lg hover:bg-blue-800 transition-colors"
          >
            Browse Tools
          </Link>
        </div>
      )}
    </div>
  );
}
