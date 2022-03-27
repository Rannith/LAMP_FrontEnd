const ipl = [
    {team: 'mi', trophies: 5},
    {team: 'csk', trophies: 4},
    {team: 'kkr', trophies: 2},
    {team: 'rr', trophies: 1},
    {team: 'srh', trophies: 1},
    {team: 'rcb', trophies: 0},
    {team: 'pk', trophies: 0},
    {team: 'dc', trophies: 0},
    {team: 'gt', trophies: 0},
    {team: 'lsg', trophies: 0}
];

const champions = ipl.filter(champ => champ.trophies >= 2);

console.log(champions);