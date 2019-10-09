const { expect } = require('chai');

const db = require('../db');

describe('db', () => {
  it('should return live db query', async () => {
    const result = await db.query();
    expect(result).to.equal('live db query');
  });
});