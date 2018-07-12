import React, { Component } from "react";
import { Row, Col } from "antd";

import NavLeft from "./containers/navleft";
import { connect } from "react-redux";

class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span="4" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="20" className="main">
          <Row className="content">
            {/* <Home/> */}
            {this.props.children}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default connect()(Admin);
