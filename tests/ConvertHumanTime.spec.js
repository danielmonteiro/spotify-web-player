import { expect } from 'chai';
import convertToHumanTime from './../src/ConvertHumanTime';

describe('Convert Human Time', () => {

  // 0
  it('Should receive 0 and return 0:00', () => {
    expect(convertToHumanTime(0)).to.be.equal('0:00');
  });

  // 1000
  it('Should receive 1000 and return 0:01', () => {
    expect(convertToHumanTime(1000)).to.be.equal('0:01');
  });

  // 20000
  it('Should receive 20000 and return 0:20', () => {
    expect(convertToHumanTime(20000)).to.be.equal('0:20');
  });

  // 63000
  it('Should receive 63000 and return 1:03', () => {
    expect(convertToHumanTime(63000)).to.be.equal('1:03');
  });

  // 84000
  it('Should receive 84000 and return 1:24', () => {
    expect(convertToHumanTime(84000)).to.be.equal('1:24');
  });

});
