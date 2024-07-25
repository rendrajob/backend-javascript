const fs = require('fs');
const log = require('./logger');

fs.readFile('poneglyph.txt', 'utf8', (err, data) => {
  if (err) {
    log(err);
    return;
  }
  log(data);
});