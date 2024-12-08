import React, { useEffect, useState } from 'react'
import api from '../api/api.js'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import Graph from '../components/Graph.jsx'
import Tabela from '../components/Tabela.jsx'
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

function Senzor() {
  const [temperatura, setTemperatura] = useState([])
  const [vlaznost, setVlaznost] = useState([])
  const [buka, setBuka] = useState([])
  const [vreme, setVreme] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const senzor1 = async () => {
      try {
        const { data } = await api.get(`/senzor/${id}`)
        setTemperatura([])
        setVlaznost([])
        setBuka([])
        setVreme([])
        setData([])
        data.map(trenutak => {
          setTemperatura((prev) => [...prev, trenutak.temperatura])
          setVlaznost((prev) => [...prev, trenutak.vlaznost])
          setBuka((prev) => [...prev, trenutak.buka])
          const formated = moment(trenutak.vreme).format('HH:mm')
          setVreme((prev) => [...prev, formated])
          const formattedForTable = moment(trenutak.vreme).format('DD.MM.YYYY. HH:mm')
          setData((prev) => [{vreme: formattedForTable, 
            temperatura: trenutak.temperatura, 
            vlaznost: trenutak.vlaznost, 
            buka: trenutak.buka}, ...prev ])
          return 1;
        })
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    senzor1();
  }, [id])

  if(loading) return (
    <div className="box">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color='inherit' size='4rem' />
      </Box>
    </div>
  );

  return (
    <div className='page'>
      <div className='graphs'>
        <div>
          <h2 className='naslov'>Temperatura</h2>
          <Graph 
          vreme={vreme.slice(-6)}
          data={temperatura.slice(-6)}
          colors={['blue', 'red', 'red']}
          symbol={'°C'}
          />
        </div>
        <div>
          <h2 className='naslov'>Vlaznost vazduha</h2>
          <Graph 
          vreme={vreme.slice(-6)}
          data={vlaznost.slice(-6)}
          colors={['blue', 'red', 'blue']}
          symbol={'%'}
          />
        </div>
        <div>
          <h2 className='naslov'>Buka</h2>
          <Graph 
            vreme={vreme.slice(-6)}
            data={buka.slice(-6)}
            colors={['blue', 'red', 'grey']}
            symbol={'dB'}
          />
        </div>
      </div>
      <Tabela data={data} />
    </div>
  )
}

export default Senzor