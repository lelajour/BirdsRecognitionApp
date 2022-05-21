

const GetBirdsList(client) {
  return async (req, res) => {
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;
    const query = `SELECT * FROM birds LIMIT ${limit} OFFSET ${offset}`;
    const [rows] = await client.query(query);
    res.json(rows);
  };
}