const fs = require('fs');

const read = () => {
  const slc = fs.readFileSync('./puzzles.txt', 'utf-8').slice(82, 164);
  const replace = slc.replaceAll('-', '0').trim().split('');
  return replace.map((el) => Number(el))
};
console.log(read());

module.exports = {read,};