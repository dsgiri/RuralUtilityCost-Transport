import { cn } from '../../lib/utils';
import { DEFAULT_DISCLAIMER_TEXT } from '../../config/disclaimer';
import { LEGAL_CONFIG } from '../../config/legal';
import { Link } from 'react-router-dom';

interface CalculatorDisclaimerProps {
  text?: string;
  className?: string;
}

export function CalculatorDisclaimer({ text = DEFAULT_DISCLAIMER_TEXT, className }: CalculatorDisclaimerProps) {
  const isLocal = LEGAL_CONFIG.disclaimer.startsWith('/');

  return (
    <div className={cn("bg-amber-50 border border-amber-100 p-4 rounded-xl mt-6", className)}>
      <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-1 flex items-center justify-between">
        <span>Decision Support Only</span>
        {isLocal ? (
          <Link to={LEGAL_CONFIG.disclaimer} className="text-[#1e3a8a] hover:underline normal-case tracking-normal">
            Read Full Disclaimer
          </Link>
        ) : (
          <a href={LEGAL_CONFIG.disclaimer} className="text-[#1e3a8a] hover:underline normal-case tracking-normal">
            Read Full Disclaimer
          </a>
        )}
      </h4>
      <p className="text-amber-800 text-xs leading-relaxed mt-2">
        {text}
      </p>
    </div>
  );
}
