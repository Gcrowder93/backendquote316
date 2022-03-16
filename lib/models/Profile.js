const pool = require('../utils/pool');

module.exports = class Profile {
  id;
  name;
  quote;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.quote = row.quote;
  }

  static async insert({ name, quote }) {
    const { rows } = await pool.query(
      `INSERT INTO profiles (name, quote) VALUES ($1, $2) RETURNING *
      `,
      [name, quote]
    );
    console.log('rows', rows[0]);
    console.log(name);
    return new Profile(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM profiles WHERE id=$1;', [
      id,
    ]);
    console.log(id);
    if (!rows[0]) return null;
    return new Profile(rows[0]);
  }

  static async getAll() {
    try {
      const { rows } = await pool.query('SELECT * FROM profiles;');
      return rows.map((row) => new Profile(row));
      console.log(rows);
    } catch (error) {
      return null;
    }
  }
};
