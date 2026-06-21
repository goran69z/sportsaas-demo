import { useState, type FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import { CLUBS } from '../data';

type SubmitState = 'idle' | 'success';

export default function UnosRezultata() {
  const [state, setState] = useState<SubmitState>(() => {
    return (localStorage.getItem('unosState') as SubmitState) ?? 'idle';
  });
  const [competition, setCompetition] = useState('Liga CG 2026');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('unosState', 'success');
    setState('success');
  };

  const handleReset = () => {
    localStorage.removeItem('unosState');
    setState('idle');
    setHomeScore('');
    setAwayScore('');
    setNote('');
  };

  if (state === 'success') {
    return (
      <div className="max-w-[600px] mx-auto text-center fade-in-up">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <CheckCircle size={64} className="text-brand mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-1">Rezultat uspješno unesen!</h2>
          <p className="text-sm text-gray-500 mb-8">Rang lista je automatski ažurirana.</p>

          {/* Mini table */}
          <div className="bg-gray-50 rounded-lg overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-xs text-gray-500 uppercase">
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Klub</th>
                  <th className="px-4 py-2 text-right">Poeni</th>
                  <th className="px-4 py-2 text-right">Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-brand/5 animate-pulse">
                  <td className="px-4 py-2.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand text-white text-xs font-bold">
                      1
                    </span>
                  </td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">SK Podgorica</td>
                  <td className="px-4 py-2.5 text-right font-bold text-navy">24 pts</td>
                  <td className="px-4 py-2.5 text-right text-brand">↑</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-2.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                      2
                    </span>
                  </td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">SK Nikšić</td>
                  <td className="px-4 py-2.5 text-right text-gray-600">19 pts</td>
                  <td className="px-4 py-2.5 text-right text-gray-400">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                      3
                    </span>
                  </td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">SK Bar</td>
                  <td className="px-4 py-2.5 text-right text-gray-600">17 pts</td>
                  <td className="px-4 py-2.5 text-right text-red-500">↓</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            onClick={handleReset}
            className="px-6 py-2.5 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            Unesi novi rezultat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[600px] mx-auto fade-in-up">
      <h2 className="text-xl font-bold text-navy mb-6">Unos rezultata</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        {/* Competition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Takmičenje</label>
          <select
            value={competition}
            onChange={(e) => setCompetition(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          >
            <option>Liga CG 2026</option>
            <option>Kup CG 2026</option>
            <option>Memorijal Popović</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Datum</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          />
        </div>

        {/* Teams + score */}
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Domaćin</label>
            <select
              value={home}
              onChange={(e) => setHome(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
            >
              <option value="">Odaberi klub</option>
              {CLUBS.map((club) => (
                <option key={club.id} value={club.name}>
                  {club.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 pb-1">
            <input
              type="text"
              value={homeScore}
              onChange={(e) => setHomeScore(e.target.value)}
              maxLength={2}
              placeholder="0"
              className="w-14 px-3 py-2.5 border border-gray-300 rounded-lg text-center text-lg font-bold text-navy focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
            />
            <span className="text-gray-400 font-bold text-lg">-</span>
            <input
              type="text"
              value={awayScore}
              onChange={(e) => setAwayScore(e.target.value)}
              maxLength={2}
              placeholder="0"
              className="w-14 px-3 py-2.5 border border-gray-300 rounded-lg text-center text-lg font-bold text-navy focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Gost</label>
            <select
              value={away}
              onChange={(e) => setAway(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
            >
              <option value="">Odaberi klub</option>
              {CLUBS.map((club) => (
                <option key={club.id} value={club.name}>
                  {club.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Napomena <span className="text-gray-400 font-normal">(opcionalno)</span>
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="Dodaj napomenu..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white resize-none focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          Sačuvaj rezultat
        </button>
      </form>
    </div>
  );
}