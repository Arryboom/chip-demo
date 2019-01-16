import React, { Component, Fragment } from 'react'
import { Row, Col, Input, Button, Card } from 'antd'
import { changeCode, detectCode } from '../store/actionCreator'
import { connect } from 'react-redux'

const { TextArea } = Input

class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Row type="flex" justify="space-between">
                    <Col span={4}>
                        <h4>填写或上传代码</h4>
                    </Col>
                    <Col span={4}>
                        <span style={{float: 'right'}}>上传代码</span>
                    </Col>
                </Row>
                <TextArea
                    rows={4}
                    autosize={true}
                    className="code-input"
                    placeholder={"<?php\neval($_GET['code']);"}
                    value={this.props.code}
                    onChange={e => this.props.handleCodeChange(e)}
                />

                <Row type="flex" justify="end">
                    <Col span={4}>
                        <Button
                            type="primary"
                            block={true}
                            htmlType="button"
                            onClick={e => this.props.handleDetectCode(this.props.code)}
                        >检测</Button>
                    </Col>
                </Row>

                <Card
                    size="small"
                    title="类型：Include_"
                    className="alarm-card"
                    type={"inner"}
                >
                    命令执行漏洞
                </Card>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        code: state.code
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleCodeChange(e) {
            const action = changeCode(e.target.value)
            dispatch(action)
        },
        handleDetectCode(code) {
            const action = detectCode(code)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
