const db = require('./db');

module.exports = async () => {
  const result = await db.query('cool beans');
  return result;
};
