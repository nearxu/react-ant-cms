import React from "react";
import { Card, Button, Tabs, message, Icon } from "antd";

const TabPane = Tabs.TabPane;
const newTabIndex = 0;
export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const panes = [
      {
        title: "Tab 1",
        content: "Tab 1",
        key: "1"
      },
      {
        title: "Tab 222222",
        content: "Tab 2",
        key: "2"
      },
      {
        title: "Tab 3",
        content: "Tab 3",
        key: "3"
      }
    ];
    this.setState({
      activeKey: panes[0].key,
      panes
    });
  }
  handleCallback = key => {
    message.info("Hi,您选择了页签：" + key);
  };
  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };
  add() {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: "New Tab",
      content: "Content of new Tab",
      key: activeKey
    });
    this.setState({ panes, activeKey });
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  remove(key) {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, index) => {
      if (key === pane.key) {
        lastIndex = index - 1;
      }
    });
    const panes = this.state.panes.filter(m => m.key !== key);
    if (lastIndex >= 0 && activeKey === key) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes: activeKey });
  }
  render() {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">
              欢迎学习React课程
            </TabPane>
            <TabPane tab="Tab 2" key="2" disabled>
              欢迎学习React课程2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              React是一个非常受欢迎的MV*框架
            </TabPane>
          </Tabs>
        </Card>

        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map(panel => {
              return (
                <TabPane tab={panel.title} key={panel.key}>
                  {panel.content}
                </TabPane>
              );
            })}
          </Tabs>
        </Card>
      </div>
    );
  }
}
