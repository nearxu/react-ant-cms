import React, { Component, PropTypes } from "react";
import {
  Map,
  ControlAnchor,
  Scale,
  LengthUnit,
  CityList,
  Panorama,
  TransitRoute,
  getPoiByKeyword,
  TransitPolicy,
  IntercityPolicy,
  TransitTypePolicy,
  Marker
} from "rc-bmap";

const onChangeBefore = () => {
  console.log("onChangeBefore");
};

const onChangeAfter = () => {
  console.log("onChangeBefore");
};
// let route;
// const getRoute = instance => {
//   route = instance;
// };

// const mapMounted = map => {
//   Promise.all([
//     getPoiByKeyword("深圳科兴科学园"),
//     getPoiByKeyword("深圳讯美广场")
//   ]).then(res => {
//     route.search(res[0], res[1]);
//   });
// };

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const offset = {
      width: 81,
      height: 18
    };
    const offsets = {
      width: 10,
      height: 10
    };
    const point = {
      lng: 113.951942,
      lat: 22.552566
    };
    return (
      <div style={{ display: "flex", height: "800px" }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          inertialDragging
          pinchToZoom
          center={point}
          // mapMounted={mapMounted}
        >
          <Scale
            offset={offset} // 停靠偏移值，
            anchor={ControlAnchor.TOP_LEFT} // 停靠位置，默认为TOP_LEFT
            unit={LengthUnit.METRIC} // 显示单位
          />

          <CityList
            offset={offset} // 停靠偏移值
            anchor={ControlAnchor.TOP_LEFT} // // 停靠位置，默认为TOP_LEFT
            onChangeBefore={onChangeBefore} // 切换城市之前回调函数
            onChangeAfter={onChangeAfter} // 切换城市之后回调函数
          />

          <Panorama
            offset={offsets} // 停靠偏移值，
            anchor={ControlAnchor.TOP_RIGHT} // 停靠位置，默认为TOP_RIGHT
          />

          {/* <TransitRoute
            getInstance={getRoute}
            showInMap
            policy={TransitPolicy.LEAST_TIME}
            intercityPolicy={IntercityPolicy.EARLY_START}
            transitTypePolicy={TransitTypePolicy.COACH}
            // 这里还有更多属性，可参考官方文档
          /> */}
          {/* <Marker point={point} /> */}
        </Map>
      </div>
    );
  }
}

export default Home;
