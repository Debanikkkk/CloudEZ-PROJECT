import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import cloudEZLogo from '../assets/cloudEZLogo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-sky-900 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={cloudEZLogo} alt="CloudEZ" className="h-8 w-auto" />
          <div>
            <h1 className="text-lg font-semibold">CloudEZ</h1>
            <p className="text-xs text-slate-300">EC2 Management</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-slate-200 hover:text-white">Home</Link>
          <Link to="/dashboard" className="text-slate-200 hover:text-white">Dashboard</Link>
          <Link to="/projectsPage" className="text-slate-200 hover:text-white">Projects</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="hidden sm:inline-block bg-white text-slate-900 px-3 py-1 rounded-md text-sm"
          >
            Login
          </button>

          <button
            onClick={() => navigate('/dashboard')}
            className="hidden sm:inline-block px-3 py-1 rounded-md text-sm border border-white/20 text-slate-100"
          >
            Dashboard
          </button>

          <User className="ml-2 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;