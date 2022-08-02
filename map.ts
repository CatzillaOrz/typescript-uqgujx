// import AMapLoader from '@amap/amap-jsapi-loader';
declare var AMapLoader: any
export default class GMap {
  readonly key = '422c2369d0bc45fb6bd97194626adf20';
  map = {};

  private static instance: GMap;
  districtSearch;
   constructor() {}

  static getInstance() {
    if (!GMap.instance) {
      return new GMap();
    }
    return this.instance;
  }

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

        var districtSearch = new AMap.DistrictSearch({
          // 关键字对应的行政区级别，country表示国家
          level: 'country',
          //  显示下级行政区级数，1表示返回下一级行政区
          subdistrict: 1,
        });

        // 搜索所有省/直辖市信息
        districtSearch.search('中国', function (status, result) {
          // 查询成功时，result即为对应的行政区信息
          console.log(result);
        });
      })
      .catch((e) => {
        console.error(e); //加载错误提示
      });
  }
}
