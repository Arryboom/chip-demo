import React, { Component } from 'react'
import './App.css'
import { Row, Col } from 'antd'
import Index from './views/Index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row type="flex" justify="center" className="title">
          <Col span={12}>
            <Index />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
