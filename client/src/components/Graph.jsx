import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'

function Graph(props) {
  return (
    <LineChart
          xAxis={[
            {
              scaleType: 'band',
              data: props.vreme,
            },
          ]}
          yAxis={[{
            colorMap: {
              type: 'piecewise',
              thresholds: [0, 10],
              colors: props.colors,
            },
            valueFormatter: (value) => `${value.toFixed(1)}${props.symbol}`,
          }]}
          series={[
            {
              data: props.data,
              valueFormatter: (value) => `${value}${props.symbol}`,
            },
          ]}
          width={450}
          height={350}
        />
  )
}

export default Graph
