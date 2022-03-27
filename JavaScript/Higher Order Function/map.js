const birthYear = [1981,1965,2000,2003,1974];
const currentYear = 2022;

const ages = birthYear.map(year => currentYear - year);

console.log(ages);