import { STANDINGS } from '../data';

export default function Tabela() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-navy">Rang lista — Liga CG 2026</h2>

      {/* Dropdown */}
      <div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand/30">
          <option>Liga CG 2026</option>
          <option>Kup CG 2026</option>
          <option>Memorijal Popović</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-500 uppercase text-xs tracking-wider">
              <th className="px-5 py-3">#</th>
              <th className="px-5 py-3">Klub</th>
              <th className="px-5 py-3 text-center">Odigrano</th>
              <th className="px-5 py-3 text-center">Pobjede</th>
              <th className="px-5 py-3 text-center">Remije</th>
              <th className="px-5 py-3 text-center">Porazi</th>
              <th className="px-5 py-3 text-center">Golovi</th>
              <th className="px-5 py-3 text-center font-semibold">Poeni</th>
            </tr>
          </thead>
          <tbody>
            {STANDINGS.map((team, i) => (
              <tr
                key={team.pos}
                className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                      team.pos === 1
                        ? 'bg-brand text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {team.pos}
                  </span>
                </td>
                <td className={`px-5 py-3.5 font-medium text-gray-800 border-l-4 ${
                  team.pos === 1 ? 'border-brand' : 'border-transparent'
                }`}>
                  {team.club}
                </td>
                <td className="px-5 py-3.5 text-center text-gray-600">{team.played}</td>
                <td className="px-5 py-3.5 text-center text-gray-600">{team.wins}</td>
                <td className="px-5 py-3.5 text-center text-gray-600">{team.draws}</td>
                <td className="px-5 py-3.5 text-center text-gray-600">{team.losses}</td>
                <td className="px-5 py-3.5 text-center text-gray-600">{team.goals}</td>
                <td className="px-5 py-3.5 text-center font-bold text-navy">{team.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}