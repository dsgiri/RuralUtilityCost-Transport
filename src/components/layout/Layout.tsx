import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 w-full flex flex-col relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
