import React, { Component } from 'react'
import './App.css'
import { Row, Col } from 'antd'
import { Provider } from 'react-redux'
import Index from './views/Index'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider className="App" store={store}>
        <Row type="flex" justify="center" className="title">
          <Col span={12}>
            <Index />
          </Col>
        </Row>
      </Provider>
    )
  }
}

export default App;
