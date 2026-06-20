import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Trophy,
  ClipboardList,
  Building2,
  TableProperties,
  Menu,
  X,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import MemberApp from '../pages/MemberApp';

const NAV_ITEMS = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/takmicenja', icon: Trophy, label: 'Takmičenja' },
  { to: '/unos', icon: ClipboardList, label: 'Unos rezultata' },
  { to: '/klubovi', icon: Building2, label: 'Klubovi' },
  { to: '/tabela', icon: TableProperties, label: 'Tabela' },
];

const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/takmicenja': 'Takmičenja',
  '/unos': 'Unos rezultata',
  '/klubovi': 'Klubovi',
  '/tabela': 'Tabela',
};

export default function Layout() {
  const { isAdminView, toggleView, isSkeleton, setSkeleton } = useAppContext();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentTitle = PAGE_TITLES[location.pathname] || 'Dashboard';

  useEffect(() => {
    setSkeleton(true);
    const timer = setTimeout(() => setSkeleton(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname, setSkeleton]);

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-60 bg-navy flex flex-col transition-transform duration-200
          lg:relative lg:translate-x-0
          ${isAdminView ? (mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0') : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-navy/50">
          <span className="text-white text-xl font-bold tracking-tight">sportsaas.me</span>
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 pt-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 border-l-4 ${
                  isActive
                    ? 'border-brand text-brand bg-brand/10'
                    : 'border-transparent text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={18} color={isActive ? '#22C55E' : undefined} />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isAdminView && mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 z-30">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            <div className="flex items-center gap-3">
              {isAdminView && (
                <button
                  className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu size={20} />
                </button>
              )}
              <h1 className="text-lg font-semibold text-gray-800">{currentTitle}</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleView}
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className={isAdminView ? 'font-semibold text-navy' : 'text-gray-400'}>
                  Admin pogled
                </span>
                <span className="text-gray-300">|</span>
                <span className={!isAdminView ? 'font-semibold text-brand' : 'text-gray-400'}>
                  Member app
                </span>
              </button>
              <div className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold">
                SA
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {isAdminView ? (
            isSkeleton ? (
              <div className="p-4 lg:p-8 space-y-6">
                <div className="skeleton h-8 w-48" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="skeleton h-28 rounded-xl" />
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="skeleton h-80 rounded-xl" />
                  <div className="skeleton h-80 rounded-xl" />
                </div>
              </div>
            ) : (
              <div className="p-4 lg:p-8 fade-in-up">
                <Outlet />
              </div>
            )
          ) : (
            <MemberApp />
          )}
        </main>
      </div>
    </div>
  );
}