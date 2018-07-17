import React, { Component } from "react";
import { Card } from "antd";
import ReactEcharts from "echarts-for-react";
import echartTheme from "./echartTheme";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入饼图和折线图
import "echarts/lib/chart/bar";

export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getOption() {
    let option = {
      title: {
        text: "用户骑行订单"
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "订单量",
          type: "bar",
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
        }
      ]
    };
    return option;
  }
  getOptionPipe() {
    let option = {
      title: {
        text: "用户骑行订单"
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      series: [
        {
          name: "订单量",
          type: "pie",
          radius: ["50%", "80%"],
          center: ["50%", "60%"],
          data: [
            {
              value: 1000,
              name: "周一"
            },
            {
              value: 1000,
              name: "周二"
            },
            {
              value: 2000,
              name: "周三"
            },
            {
              value: 1500,
              name: "周四"
            },
            {
              value: 3000,
              name: "周五"
            },
            {
              value: 2000,
              name: "周六"
            },
            {
              value: 1200,
              name: "周日"
            }
          ]
        }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    };
    return option;
  }
  componentWillMount() {
    echarts.registerTheme("Imooc", echartTheme);
  }
  render() {
    return (
      <div>
        <Card>
          <ReactEcharts
            option={this.getOption()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 500 }}
          />
        </Card>

        <Card title="饼形图之二" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOptionPipe()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}
