import React from 'react'
import histrory from 'history'

const history = history.createHistory();
const location = history.getCurrentLocation()

const Test = (location) => {
return <h1>{location}</h1>
}