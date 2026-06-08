import { useState } from 'react';
import { CalculatorDisclaimer } from '../../components/shared/CalculatorDisclaimer';
import { Truck } from 'lucide-react';

export function HaulingCostCalculator() {
  const [distance, setDistance] = useState<string>('150');
  const [costPerMile, setCostPerMile] = useState<string>('2.50');

  const calcTotal = () => {
    const d = parseFloat(distance) || 0;
    const c = parseFloat(costPerMile) || 0;
    return (d * c).toFixed(2);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 text-[#1e3a8a] rounded-lg">
          <Truck className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hauling Cost Calculator</h1>
          <p className="text-sm text-slate-600 mt-1">Estimate total freight costs based on distance and rates.</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Distance (Miles)</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent" 
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              min="0"
              step="any"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Cost per Mile ($)</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent" 
              value={costPerMile}
              onChange={(e) => setCostPerMile(e.target.value)}
              min="0"
              step="any"
            />
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center mb-2 mt-4">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">Estimated Total Cost</span>
          <span className="text-4xl font-bold text-[#4d7c0f]">${calcTotal()}</span>
        </div>

        <CalculatorDisclaimer />
      </div>
    </div>
  );
}
