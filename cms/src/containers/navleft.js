import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import menuConfig from "../config/menu-config";
import { connect } from "react-redux";
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: null,
      mode: "inline"
    };
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({ menuTreeNode });
  }
  renderMenu(data) {
    console.log(data, "data");
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={"menu" + item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  }
  homeHandleClick() {}
  handleClick() {}
  render() {
    return (
      <div>
        <NavLink to="/home" onClick={this.homeHandleClick}>
          <div className="logo">
            <img src="/assets/logo-ant.svg" alt="" />
            <h1>Imooc MS</h1>
          </div>
        </NavLink>
        <Menu onClick={this.handleClick} theme="dark" mode={this.state.mode}>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default connect()(NavLeft);
