import React from 'react'
import Sidebars  from "../../components/sidebar/Sidebar"
import Card from  "../../components/dashboard/Card/Card"
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebars />
      <Card />
    </div>
  )
}

export default Dashboard