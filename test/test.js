const rewiremock = require('rewiremock/node');
const { expect } = require('chai');
const sinon = require('sinon');
const mockDb = require('../mock-db');

const main = rewiremock.proxy(() => require('../index'), {
  '../db': mockDb,
});

describe('main', () => {
  it('should resolve to the mock-db value', async () => {
    const value = await main();
    expect(value).to.equal('fake db query');
  });

  it('should call mockDb.query with correct value', async () => {
    const spy = sinon.spy(mockDb, 'query');
    await main();
    expect(spy.getCall(0).args[0]).to.equal('cool beans');
    spy.restore();
  });
});
