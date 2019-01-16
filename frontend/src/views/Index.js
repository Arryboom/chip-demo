import React, { Component, Fragment } from 'react'
import { Row, Col, Input, Button, Card } from 'antd'

const { TextArea } = Input

class Index extends Component {
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
                <TextArea rows={4} autosize={true} className="code-input" placeholder={"<?php\neval($_GET['code']);"} />

                <Row type="flex" justify="end">
                    <Col span={4}>
                        <Button type="primary" block={true} htmlType="button">检测</Button>
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

export default Index;
