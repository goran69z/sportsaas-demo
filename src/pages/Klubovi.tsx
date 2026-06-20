import { useState } from 'react';
import { CLUBS } from '../data';

export default function Klubovi() {
  const [search, setSearch] = useState('');

  const filtered = CLUBS.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-bold text-navy">Klubovi</h2>
        <button className="px-5 py-2.5 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors self-start">
          Dodaj klub
        </button>
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Pretraži klubove..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
        />
      </div>

      {/* Club cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((club, i) => (
          <div
            key={club.id}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow fade-in-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ backgroundColor: club.color }}
              >
                {club.initials}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 text-sm truncate">{club.name}</h3>
                <p className="text-xs text-gray-400">{club.city}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span className="font-medium text-navy">{club.members}</span>
              <span>članova</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}