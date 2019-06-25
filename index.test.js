const fs = require('fs');
const { join } = require('path');

describe('copying function', () => {
  beforeEach(done => {
    fs.writeFile(join(__dirname, 'original.txt'), 'hello there', done);
  });

  afterEach(done => {
    fs.unlink(join(__dirname, 'original.txt'), done);
  });

  afterEach(done => {
    fs.unlink(join(__dirname, 'copy.txt'), done);
  });

  it('copies file into specified destination', () => {
  
  });
});