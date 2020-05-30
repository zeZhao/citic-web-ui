let Util = new Object();

Util.getSystemLink = function () {
    //正式环境
    const PROD = ['www.c.citic'];

    //TEST环境
    const TEST = ['taurus.citiccloud-test.pcloud.citic.com', 'test123.c.citic', 'dev.c.citic', 'test.c.citic', 'reg.c.citic', 'uat.c.citic'];

    //DEVOPS环境
    const DEVOPS = ['taurus.citiccloud-devops.pcloud.citic.com', 'devops123.c.citic'];

    //当前系统域名
    const host = window.location.hostname;

    //默认配置
    const defaultConfig = {
        dataIndex:"http://testdata.c.citic",
        data: 'http://testdata.c.citic/bfe',  //大数据
        market: 'https://market.c.citic/',  //数据市场
        machineLearning: 'http://ml.c.citic', //人工智能机器学习平台
        apiStore: 'https://www.c.citic/apistore/', //API集市
        datacloudConsole: 'http://testdata.c.citic/bfe',  //大数据多租户管理平台控制台
    }

    //生产环境
    const prodConfig = {
        dataIndex:"https://data.c.citic",
        data: 'https://data.c.citic/bfe',  //大数据
        market: 'https://market.c.citic/',  //数据市场
        machineLearning: 'http://ml.c.citic',  //人工智能机器学习平台
        apiStore: 'https://www.c.citic/apistore/', //API集市
        datacloudConsole: 'https://data.c.citic/bfe',  //大数据多租户管理平台控制台
    }

    //测试环境
    const testConfig = {
        dataIndex:"http://testdata.c.citic",
        data: 'http://testdata.c.citic/bfe',  //大数据
        market: 'http://dm-dev.c.citic/',  //数据市场
        machineLearning: 'http://10.76.7.129/hub/login',  //人工智能机器学习平台
        apiStore: 'https://test123.c.citic/apistore/', //API集市
        datacloudConsole: 'http://testdata.c.citic/bfe',  //大数据多租户管理平台控制台
    }

    //DEVOPS环境
    const devopsConfig = {
        dataIndex:"http://testdata.c.citic",
        data: 'http://testdata.c.citic/bfe',  //大数据
        market: 'http://dm-dev.c.citic/',  //数据市场
        machineLearning: 'http://10.76.7.129/hub/login',  //人工智能机器学习平台
        apiStore: 'https://devops123.c.citic/apistore/', //API集市
        datacloudConsole: 'http://testdata.c.citic/bfe',  //大数据多租户管理平台控制台
    }

    if (PROD.includes(host)) { //生产环境
        return prodConfig;
    } else if (TEST.includes(host)) { //测试环境
        return testConfig;
    } else if (DEVOPS.includes(host)) { //DEVOPS环境
        return devopsConfig;
    } else { //其他环境
        return defaultConfig;
    }
}

export default Util
