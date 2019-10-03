import React, { Component } from 'react'
import Buttons from './Buttons'
import Filters from './Filters'
export default class Upper extends Component {
  render() {
    return (
      <div>
        <Buttons/>
        <Filters/>
      </div>
    )
  }
}
