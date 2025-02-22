import React from 'react'
import StatusCards from './cards/StatusCards.jsx'
import PieCharts from './cards/PieCharts.jsx'
import OrderChart from './cards/OrderChart.jsx'
import LineGraph from './cards/LineGraph.jsx'

export default function Dashboard() {
  return (
    <>
    <div className="p-4 ">
      <StatusCards />
    </div>
      <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <PieCharts />
        <OrderChart />
      </div>
    </div>
    <div className="p-4">
    <LineGraph />
    </div>
    </>
    
  )
}
