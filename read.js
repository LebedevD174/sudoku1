const { log } = require('console');
const fs = require('fs');

const read = () => {
  let slc;
  const ex = +process.argv[2];
  switch(ex){
    case 1: slc= fs.readFileSync('./puzzles.txt', 'utf-8').slice(0, 82); break;
    case 2: slc= fs.readFileSync('./puzzles.txt', 'utf-8').slice(81, 165); break;
    case 3: slc= fs.readFileSync('./puzzles.txt', 'utf-8').slice(164, 247); break;
    default: slc= fs.readFileSync('./puzzles.txt', 'utf-8').slice(0, 82); break;
  }
  const replace = slc.replaceAll('-', '0').trim().split('');
  return replace.map((el) => Number(el))
};

module.exports = {read,};