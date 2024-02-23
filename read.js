const fs = require('fs');
const { EOL } = require('os');

const read = () => {
  const slc = fs.readFileSync('./puzzles.txt', 'utf-8').slice(82, 163);
  const replace = slc.replaceAll('-', '0').trim().split('');
  return replace.map((el) => Number(el))
};
console.log(read());

module.exports = {
  read,
};