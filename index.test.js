const fs = require('fs');
const { join } = require('path');
const copy = require('./index');

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

  it('copies file into specified destination', done => {
    copy(join(__dirname, 'original.txt'), join(__dirname, 'copy.txt'), err => {
      expect(err).toBeFalsy();

      fs.readFile(join(__dirname, 'copy.txt'), { encoding: 'utf8' }, (err, content) => {
        expect(content).toEqual('hello there');
        done();
      });
    });
  });
}); 

