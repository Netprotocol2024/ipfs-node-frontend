import React from 'react'
import HeroSection from './Hero'
import StorageCard from './StorageCard'
import CPUCard from './CpuCard'
import MemoryUsageChart from './Memory'
import  PlanUsageChart  from './PlanSection'
import NetworkActivity from './NetWorkActivity'

const Dashboard = () => {
  return (
    <div className="min-h-screen  text-white p-4 md:p-8  w-8xl mx-auto">
        

      <div className="max-w-8xl  mx-auto mt-24">
        <HeroSection/>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <StorageCard />
          <PlanUsageChart/>
          {/* You can add MemoryCard and PlanUsageCard here similarly */}
          <MemoryUsageChart/>
          <CPUCard />
        </div>
        <NetworkActivity/>
        </div>
        </div>
  )
}

export default Dashboard
