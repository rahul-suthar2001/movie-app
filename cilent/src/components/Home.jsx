import React from 'react'

import './Home.css'
function Home() {
    return (
        <div >
          <img src="https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_960_720.png" class="img-fluid mx-auto d-block " alt=''/>
          <a href='/movies' type="button" class="btn btn-outline-info button" >View Movies List</a>
          <h3 className='container col-6'>
              On This Platfrom we provide Details About Movies <br />
              To View List Of Movie Click On Above Button
          </h3>
        </div>
    )
}

export default Home
