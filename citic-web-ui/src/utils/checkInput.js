/**
 * 各种校验方法
 */
let checkObject =  new Object();
/**
 * 密码规则校验  当前规则大于6位
 */
checkObject.checkPassWord = (str)=>{
    if(str.length >= 6)return true
    return false;
}
//起止时间校验
checkObject.startAndStopTime = (startTime,stopTime) =>{
    //同时为空返回true
    if(!startTime && !stopTime){
        return true;
    }
    //有一个为空返回true
    if((startTime && !stopTime) ||(!startTime && stopTime)){
        return true;
    }

    if(startTime > stopTime){
        return "开始时间不能大于结束时间";
    }
    return true;


}
/**
 * 验证当前字符串是否有特殊字符
 */
checkObject.specialCharacters = (value) =>{

    var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
    regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

    if(regEn.test(value) || regCn.test(value)) {
        return false;
    }
    return true
}




export default checkObject
