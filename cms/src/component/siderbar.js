import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  toggle() {}
  render() {
    const menu = {};
    return (
      <Sider>
        <Menu />
        <div className="sider-trigger">
          <Icon
            className="trigger"
            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.toggle}
          />
        </div>
      </Sider>
    );
  }
}
export default SideBar;
