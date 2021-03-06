import React, { Component } from "react";
import { Card, Button, Modal } from "antd";

export default class ButtonModels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    };
  }
  handleOpen(type) {
    this.setState({
      [type]: true
    });
  }
  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen("showModal1")}>
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal2")}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal3")}>
            顶部20px弹框
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal4")}>
            水平垂直居中
          </Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            });
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal2}
          onCancel={() => {
            this.setState({
              showModal2: false
            });
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程</p>
        </Modal>
      </div>
    );
  }
}
