export const CLUBS = [
  { id: 1, name: 'NK Budućnost', initials: 'NKB', city: 'Podgorica', members: 18, color: '#1E3A5F' },
  { id: 2, name: 'NK Zeta',      initials: 'NKZ', city: 'Golubovci',  members: 15, color: '#22C55E' },
  { id: 3, name: 'FK Jezero',    initials: 'FKJ', city: 'Plav',        members: 12, color: '#F97316' },
  { id: 4, name: 'NK Iskra',     initials: 'NKI', city: 'Danilovgrad', members: 14, color: '#8B5CF6' },
  { id: 5, name: 'FK Rudar',     initials: 'FKR', city: 'Pljevlja',    members: 16, color: '#1E3A5F' },
  { id: 6, name: 'NK Grbalj',    initials: 'NKG', city: 'Radanovići',  members: 11, color: '#22C55E' },
  { id: 7, name: 'FK Berane',    initials: 'FKB', city: 'Berane',      members: 13, color: '#F97316' },
  { id: 8, name: 'NK Kom',       initials: 'NKK', city: 'Podgorica',   members: 9,  color: '#8B5CF6' },
]

export const STANDINGS = [
  { pos: 1, club: 'NK Budućnost', played: 10, wins: 8, draws: 0, losses: 2, goals: '24-8',  pts: 24 },
  { pos: 2, club: 'NK Zeta',      played: 10, wins: 6, draws: 1, losses: 3, goals: '19-12', pts: 19 },
  { pos: 3, club: 'FK Jezero',    played: 10, wins: 5, draws: 2, losses: 3, goals: '17-14', pts: 17 },
  { pos: 4, club: 'NK Iskra',     played: 10, wins: 5, draws: 1, losses: 4, goals: '16-15', pts: 16 },
  { pos: 5, club: 'FK Rudar',     played: 10, wins: 4, draws: 2, losses: 4, goals: '14-16', pts: 14 },
  { pos: 6, club: 'NK Grbalj',    played: 10, wins: 3, draws: 3, losses: 4, goals: '13-15', pts: 12 },
  { pos: 7, club: 'FK Berane',    played: 10, wins: 2, draws: 2, losses: 6, goals: '10-20', pts: 8  },
  { pos: 8, club: 'NK Kom',       played: 10, wins: 1, draws: 1, losses: 8, goals: '6-19',  pts: 4  },
]

export const COMPETITIONS = [
  { id: 1, name: 'Kup Crne Gore 2026',      status: 'AKTIVNO',     dates: 'Jan — Jun 2026', teams: 8,  progress: 60  },
  { id: 2, name: 'Liga CG — Proljeće 2026', status: 'ZAVRŠENO',    dates: 'Feb — Maj 2026', teams: 10, progress: 100 },
  { id: 3, name: 'Memorijal Popović',        status: 'NADOLAZEĆE', dates: 'Jul 2026',        teams: 6,  progress: 0   },
]

export const ACTIVITY = [
  { icon: '✅', text: 'Kup CG — Rezultati unijeti',           time: 'Prije 2h'    },
  { icon: '🏆', text: 'Liga CG — Kolo 5 završeno',            time: 'Prije 1 dan' },
  { icon: '➕', text: 'NK Budućnost — Novi član dodan',       time: 'Prije 2 dana'},
  { icon: '📝', text: 'Memorijal Popović — Kreiran',           time: 'Prije 3 dana'},
  { icon: '✅', text: 'Proljetni kup — Zatvorena registracija',time: 'Prije 5 dana'},
]

export const CHART_DATA = [
  { month: 'Jan', value: 12 },
  { month: 'Feb', value: 19 },
  { month: 'Mar', value: 8  },
  { month: 'Apr', value: 24 },
  { month: 'Maj', value: 31 },
  { month: 'Jun', value: 18 },
]