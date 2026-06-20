import { useState } from 'react';
import { Home, Trophy, TableProperties, Building2, User } from 'lucide-react';
import { CLUBS, STANDINGS, COMPETITIONS } from '../data';

const TABS = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'takmicenja', icon: Trophy, label: 'Takmičenja' },
  { id: 'tabela', icon: TableProperties, label: 'Tabela' },
  { id: 'klubovi', icon: Building2, label: 'Klubovi' },
  { id: 'profil', icon: User, label: 'Profil' },
];

const STATUS_COLORS: Record<string, string> = {
  AKTIVNO: 'bg-green-100 text-green-700',
  ZAVRŠENO: 'bg-gray-100 text-gray-600',
  NADOLAZEĆE: 'bg-blue-50 text-blue-600',
};

export default function MemberApp() {
  const [activeTab, setActiveTab] = useState('home');

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'takmicenja':
        return <TakmicenjaTab />;
      case 'tabela':
        return <TabelaTab />;
      case 'klubovi':
        return <KluboviTab />;
      case 'profil':
        return <ProfilTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="flex justify-center p-4 lg:p-8">
      <div className="w-full max-w-[390px] bg-white rounded-[32px] border border-gray-200 shadow-xl overflow-hidden flex flex-col h-[calc(100vh-6rem)]">
        {/* Tab content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">{renderTab()}</div>

        {/* Bottom tab bar */}
        <div className="flex border-t border-gray-100 bg-white px-2 py-2">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-1 text-xs transition-colors ${
                  isActive ? 'text-brand' : 'text-gray-400'
                }`}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HomeTab() {
  const recentResults = [
    { home: 'NK Budućnost', away: 'NK Kom', score: '3-0' },
    { home: 'FK Rudar', away: 'NK Budućnost', score: '1-2' },
    { home: 'NK Budućnost', away: 'FK Berane', score: '4-1' },
  ];

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold text-gray-800">Zdravo, Sportisto! 👋</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-3">
        <div className="bg-brand/5 rounded-xl p-4 border border-brand/10">
          <p className="text-sm text-gray-500">Aktivna takmičenja</p>
          <p className="text-2xl font-bold text-navy">1</p>
        </div>
        <div className="bg-navy/5 rounded-xl p-4 border border-navy/10">
          <p className="text-sm text-gray-500">Tvoj klub</p>
          <p className="text-lg font-bold text-navy">NK Budućnost</p>
        </div>
      </div>

      {/* Recent results */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Zadnji rezultati
        </h3>
        <div className="space-y-2">
          {recentResults.map((r, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3"
            >
              <span className="text-sm text-gray-700">{r.home}</span>
              <span className="text-sm font-bold text-navy">{r.score}</span>
              <span className="text-sm text-gray-700">{r.away}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TakmicenjaTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-800">Takmičenja</h2>
      {COMPETITIONS.map((comp) => (
        <div key={comp.id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-800 text-sm">{comp.name}</h3>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_COLORS[comp.status]}`}>
              {comp.status}
            </span>
          </div>
          <p className="text-xs text-gray-400 mb-2">{comp.dates}</p>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
            <div
              className="bg-brand h-1.5 rounded-full"
              style={{ width: `${comp.progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-400">{comp.teams} timova • {comp.progress}%</p>
        </div>
      ))}
    </div>
  );
}

function TabelaTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-800">Tabela</h2>
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-50 text-gray-500 uppercase">
              <th className="px-3 py-2 text-left">#</th>
              <th className="px-3 py-2 text-left">Klub</th>
              <th className="px-3 py-2 text-right">Poeni</th>
            </tr>
          </thead>
          <tbody>
            {STANDINGS.map((team) => {
              const isMyClub = team.club === 'NK Budućnost';
              return (
                <tr
                  key={team.pos}
                  className={`border-t border-gray-50 ${isMyClub ? 'bg-green-50' : ''}`}
                >
                  <td className="px-3 py-2">
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                        team.pos === 1 ? 'bg-brand text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {team.pos}
                    </span>
                  </td>
                  <td className="px-3 py-2 font-medium text-gray-800">{team.club}</td>
                  <td className="px-3 py-2 text-right font-bold text-navy">{team.pts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KluboviTab() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-gray-800">Klubovi</h2>
      {CLUBS.map((club) => (
        <div
          key={club.id}
          className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ backgroundColor: club.color }}
          >
            {club.initials}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 text-sm">{club.name}</h3>
            <p className="text-xs text-gray-400">{club.city}</p>
          </div>
          <span className="text-sm text-navy font-medium">{club.members} čl.</span>
        </div>
      ))}
    </div>
  );
}

function ProfilTab() {
  return (
    <div className="space-y-5 text-center">
      <div className="w-20 h-20 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-bold mx-auto">
        SA
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-800">Sportaš Admin</h2>
        <p className="text-sm text-gray-500">NK Budućnost</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Član od</p>
        <p className="text-sm font-medium text-gray-700">Januar 2025</p>
      </div>
    </div>
  );
}