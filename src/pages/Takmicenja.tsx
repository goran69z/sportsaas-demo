import { useState } from 'react';
import { COMPETITIONS } from '../data';

const STATUS_COLORS: Record<string, string> = {
  AKTIVNO: 'bg-brand/10 text-brand border-brand/30',
  ZAVRŠENO: 'bg-gray-100 text-gray-600 border-gray-300',
  NADOLAZEĆE: 'bg-blue-50 text-blue-600 border-blue-300',
};

export default function Takmicenja() {
  const [filter, setFilter] = useState('Sva');

  const filtered =
    filter === 'Sva'
      ? COMPETITIONS
      : COMPETITIONS.filter((c) => {
          if (filter === 'Aktivna') return c.status === 'AKTIVNO';
          if (filter === 'Završena') return c.status === 'ZAVRŠENO';
          return c.status === 'NADOLAZEĆE';
        });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-bold text-navy">Takmičenja</h2>
        <button className="px-5 py-2.5 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors self-start">
          Novo takmičenje
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {['Sva', 'Aktivna', 'Završena', 'Nadolazeće'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === tab
                ? 'bg-navy text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((comp, i) => (
          <div
            key={comp.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800 text-base">{comp.name}</h3>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  STATUS_COLORS[comp.status]
                }`}
              >
                {comp.status}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-1">{comp.dates}</p>
            <p className="text-sm text-gray-500 mb-4">{comp.teams} timova</p>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
              <div
                className="bg-brand h-2 rounded-full transition-all duration-500"
                style={{ width: `${comp.progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mb-3">{comp.progress}% završeno</p>

            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors w-full">
              Detalji
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}