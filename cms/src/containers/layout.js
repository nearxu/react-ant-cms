import React, { Component, PropTypes } from "react";
import { Layout, Affix, Row, Col } from "antd";

import Sidebar from "../component/siderbar";

class Layouts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout className="ant-layout-has-sider">
        <Sidebar />
      </Layout>
    );
  }
}

export default Layouts;
