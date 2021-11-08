import React, { Component } from 'react'
import { CardTemplate } from './CardTemplate'

const styles = {
  display: 'flex',
  marginTop: '20px',
  justifyContent: 'center',
}

export class About extends Component {
  render() {
    return (
      <div style={styles}>
        <CardTemplate />
      </div>
    )
  }
}
