import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';
import { cn } from '../lib/utils';
import { useFavorites } from '../hooks/useFavorites';

interface ToolCardProps {
  tool: Tool;
  key?: React.Key;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(tool.id);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2 transition-all hover:shadow-md hover:border-slate-300 group">
      <div className="flex justify-between items-center">
        <span className="text-[10px] tracking-widest uppercase font-bold text-[#4d7c0f]">
          {tool.category}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(tool.id);
          }}
          className={cn(
            "transition-colors rounded-full p-1",
            favorite 
              ? "text-red-500 hover:text-red-600 hover:bg-red-50" 
              : "text-slate-300 hover:text-red-400 hover:bg-slate-50"
          )}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          title={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("h-4 w-4", favorite && "fill-current")} />
        </button>
      </div>
      
      <h3 className="font-bold text-sm leading-tight text-slate-900 group-hover:text-[#1e3a8a] transition-colors mt-1">
        {tool.title}
      </h3>
      
      <p className="text-xs text-slate-500 flex-1">
        {tool.description}
      </p>
      
      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="bg-slate-100 px-2 py-1.5 rounded text-[10px] font-mono text-slate-700 truncate max-w-[60%]">
          Out: {tool.outcome}
        </span>
        
        <Link
          to={tool.path}
          className="bg-[#1e3a8a] text-white border-none rounded-md px-3 py-1.5 text-xs font-semibold hover:bg-blue-800 transition-colors"
        >
          Launch
        </Link>
      </div>
    </div>
  );
}
