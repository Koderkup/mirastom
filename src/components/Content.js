import React, { Component } from 'react'
import Service from './Service'

export class Content extends Component {
  render() {
    return (
      <main>{this.props.services.map(element=>(
          <Service key={element.id} services={element} />
      ))}</main>
    )
  }
}

export default Content