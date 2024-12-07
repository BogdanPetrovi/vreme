import React, { useEffect, useState } from 'react'
import api from '../api/api.js'
import moment from 'moment'
import Graph from './Graph.jsx'
import Tabela from './Tabela.jsx'

function ThreeGraphs() {
  const [temperatura, setTemperatura] = useState([])
  const [vlaznost, setVlaznost] = useState([])
  const [buka, setBuka] = useState([])
  const [vreme, setVreme] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const senzor1 = async () => {
      try {
        const { data } = await api.get('/')
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
      }
    }
    senzor1();
  }, [])

  return (
    <div className='page'>
      <div className='card'>
        <div>
          <h2>Temperatura</h2>
          <Graph 
          vreme={vreme.slice(-6)}
          data={temperatura.slice(-6)}
          colors={['blue', 'red', 'red']}
          symbol={'°C'}
          />
        </div>
        <div>
          <h2>Vlaznost vazduha</h2>
          <Graph 
          vreme={vreme.slice(-6)}
          data={vlaznost.slice(-6)}
          colors={['blue', 'red', 'blue']}
          symbol={'%'}
          />
        </div>
        <div>
          <h2>Buka</h2>
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

export default ThreeGraphs
