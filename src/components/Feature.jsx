import React from 'react'
import Header from './Header'

export default function Feature() {
  return (
    <div className='feature'>
        <div className='feature-left'>
            <img src="https://images.pexels.com/photos/33488/navigation-car-drive-road.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="feature-right">
            <h1>Modern App</h1>
            <p>We Developed a simple and functional app. It is built in a such a way as to simplify the problem of the car selection and rental process. View the location, Statement, and other information about each of the vehicles in one click</p>
            <button>Download App</button>
        </div>
    </div>
  )
}
