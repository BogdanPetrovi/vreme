import db from './database/database.js'
import express from 'express'
import 'dotenv/config'
import cors from 'cors';

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(cors({
  origin:'https://vreme-orcin.vercel.app/',
  optionsSuccessStatus: 200
}))

app.get('/senzor1', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM senzor1;')
    res.status(200).json(rows);
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`App is up and running on port ${port}`)
})
