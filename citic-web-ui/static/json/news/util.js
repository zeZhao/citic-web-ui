
let Util = new Object();

Util.getSystemLink = function() {
  //正式环境
  const PROD = ['www.c.citic'];

  //TEST环境
  const TEST = ['taurus.citiccloud-test.pcloud.citic.com', 'test123.c.citic'];

  //当前系统域名
  const host = window.location.hostname;

  //默认配置
  const defaultConfig = {
      data: 'https://data.c.citic/'  //大数据
  }

  //生产环境
  const prodConfig = {
      data: 'https://data.c.citic/'  //大数据
  }

  //测试环境
  const testConfig = {
    data: 'https://testdata.c.citic:8080/gcis/'  //大数据
  }

  if (PROD.includes(host)) { //生产环境
      return prodConfig;
  } else if(TEST.includes(host)) { //测试环境
      return testConfig;
  } else { //其他环境
      return defaultConfig;
  }
}

export default Util
