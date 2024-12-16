import React from 'react'
import AsideBar from '../AsideBar/AsideBar'
import MainContent from '../MainContent/MainContent'
import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-md-3 c-bg-aside-col rounded-4'>
          <AsideBar/>
        </div>
        <div className='col-md-9'>
          <MainContent/>
        </div>
      </div>
    </div>
  )
}

export default Home