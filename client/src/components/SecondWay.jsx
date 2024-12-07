import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'

function SecondWay() {
  return (
    <div className='card'>
      <div>
        <LineChart
          xAxis={[
            {
              scaleType: "time",
              data: [
                new Date("29 Sep 2024 09:30:00 GMT"),
                new Date("29 Sep 2024 09:35:00 GMT"),
                new Date("29 Sep 2024 09:40:00 GMT"),
                new Date("29 Sep 2024 09:45:00 GMT"),
                new Date("29 Sep 2024 09:50:00 GMT"),
                new Date("29 Sep 2024 09:55:00 GMT"),
              ],
              valueFormatter: (value) => {
                value.getHours().toString();
              },
            },
          ]}
          yAxis={[{
            min:0,
            max:100,
          }]}
          series={[
            {
              data: [10.8, 11, 11.5, 11.8, 13.1, 11.5],
              label:'Temperatura',
              valueFormatter: (value) => `${value.toFixed(1)}°C`,
            },
            {
              data: [62, 64, 68, 67, 61, 63],
              label:'Vlaznost vazduha',
              valueFormatter: (value) => `${value.toFixed(1)}%`,
            },
            {
              data: [22, 24, 21.3, 25.5, 22.1, 23.2],
              label:'Buka',
              valueFormatter: (value) => `${value.toFixed(1)}dB`,
            },
          ]}
          width={500}
          height={400}
        />
      </div>
    </div>
  )
}

export default SecondWay
