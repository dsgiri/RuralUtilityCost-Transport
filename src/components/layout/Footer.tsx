import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="shrink-0 bg-white border-t border-slate-200 px-4 sm:px-6 py-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link to="/about" className="text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors">About</Link>
          <Link to="/contact" className="text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors">Contact</Link>
          <Link to="/legal" className="text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors">Legal</Link>
          <Link to="/legal" className="text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors">Privacy</Link>
          <Link to="/legal" className="text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors">License</Link>
          <a href="#" className="text-[11px] font-bold text-slate-900 italic hover:underline">GitHub</a>
        </div>
        <div className="text-[10px] text-slate-400 text-center md:text-right">
          © {new Date().getFullYear()} ruralutilitycost.com ecosystem. All transport data is for decision-support only.
        </div>
      </div>
    </footer>
  );
}
