declare var AMapLoader: any;
import { AutoBind } from './src/decorators/autobind';

export default class GMap {
  readonly key = '422c2369d0bc45fb6bd97194626adf20';
  map: any = {};
  AMap: any = {};

  private static instance: GMap;
  districtSearch;
  constructor() {}

  static getInstance() {
    if (!GMap.instance) {
      return new GMap();
    }
    return this.instance;
  }

  @AutoBind
  initMap() {
    AMapLoader.load({
      key: this.key, // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: '1.1', // AMapUI 版本
        plugins: ['overlay/SimpleMarker'], // 需要加载的 AMapUI ui插件
      },
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: '2.0', // Loca 版本
      },
    })
      .then((AMap) => {
        this.map = new AMap.Map('container', {
          zoom: 12,
          center: [116.39, 39.9],
        });
        this.AMap = AMap;
        this.initMapPlugin();
      })
      .catch((e) => {
        console.error(e); //加载错误提示
      });
  }

  @AutoBind
  private initMapPlugin() {
    this.AMap.plugin(
      'AMap.ToolBar',

      function () {
        //异步加载插件
        var toolbar = new this.AMap.ToolBar();
        this.map.addControl(toolbar);
        this.transformContainerLngLat();
      }.bind(this)
    );
  }

  
  /*
   *  1. 容器坐标转经纬度坐标 map.containerToLnglat
   */
  @AutoBind
  private transformContainerLngLat() {
    // 容器坐标，原点为左上角
    var px = 600;
    var py = 300;

    // 构造成 Pixel 对象后传入
    var pixel = new this.AMap.Pixel(px, py);
    var lnglat = this.map.containerToLngLat(pixel); // 获得 LngLat 对象
    console.log(lnglat)
    
  }
}
