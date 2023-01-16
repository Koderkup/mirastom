import React, { Component } from 'react'

export class Service extends Component {
  render() {
    return (
      <div className='service'> 
        < img alt="" src = {
          this.props.services.img
        }
        />
      <h3>{
          this.props.services.title
      } </h3>
      <p>{this.props.services.desc}</p>
      <b>{this.props.services.price}</b>
      <div className='call' title='Позвоните нам +375 29 813 86 90'>&#128222;</div>
      </div >
    )
  }
}

export default Service