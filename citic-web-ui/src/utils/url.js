let UrlUtil = new Object();
UrlUtil.getParame = (name) =>{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
/**
 * 遍历url并移除指定参数返回新的url 不需要的参数  state code
 */
UrlUtil.formatParame = (url) =>{
    if(!url) return false;
    let paramKeys =  ["state","code"]
    let params = UrlUtil.getQueryStriongArgs(url);
    if(!params){
        return url;
    }
    for (let index = 0; index < paramKeys.length; index++) {
        const el = paramKeys[index];
        for (const i in params) {
           if(i == el){
               delete params[i]
           }
        }
    }
    let arr2 = url.indexOf("?");
    let baseUrl = url.substring(0,arr2);
    let newUrl =baseUrl+ "?"+    UrlUtil.urlEncode(params);
    return newUrl;

}

/**
 * 获得当前链接的全部参数集合
 */
UrlUtil.getQueryStriongArgs=(url)=>{
    if(!url){
        return false;
    }
    console.log("url", url)
    let arr1 = url.indexOf("?");
    if(arr1 == -1){
        return false;
    }
    var qs = url.substring(arr1+1),

        args = {},
    items = qs.length ? qs.split("&"):[],
    item = null,
    name = null,
    value= null,
    i = 0,
    len = items.length;
    for(i = 0;i<len;i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if(name.length){
        args[name] = value;
        }
    }
    return args;
}


//JSON 转URL参数
UrlUtil.urlEncode = function (json) {
    if (!json) {
        return '';
    }
    var tmps = [];
    for (var key in json) {
        tmps.push(key + '=' + json[key]);
    }

    return tmps.join('&');
}



export default UrlUtil;



