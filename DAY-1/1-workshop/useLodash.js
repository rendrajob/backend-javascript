const _ = require('lodash');
const log = require('./logger');

const numbers = [1, 2, 3, 4, 5];
const shuffled = _.shuffle(numbers);

log(shuffled);