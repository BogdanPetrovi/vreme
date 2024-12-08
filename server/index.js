import db from './database/database.js'
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 5000;

 app.use(cors({
   origin: ["https://vreme-orcin.vercel.app"],
   methods: ["GET"],
 }));

 app.get('/senzor/:id', async (req, res) => {
  const { id } = req.params;
  const sensorTables = {
    1: 'senzor1',
    2: 'senzor2',
    3: 'senzor3',
  };

  try {
    const tableName = sensorTables[id];
    if (!tableName) {
      return res.status(404).json({ error: 'Senzor ne postoji' });
    }

    const [rows] = await db.query(`SELECT * FROM ${tableName}`);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Serverska greska' });
  }
});

app.listen(port, () => {
  console.log(`App is up and running on port ${port}`)
})
