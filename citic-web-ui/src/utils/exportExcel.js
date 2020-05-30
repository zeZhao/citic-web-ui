import XLSX from 'xlsx';

//列最小宽度 n 字符
const COLUMN_MIN_WIDTH = 15;
//列最大宽度 n 字符
const COLUMN_MAX_WIDTH = 50;

function s2ab(s) {
    if (typeof ArrayBuffer !== 'undefined') {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    } else {
        const buf = new Array(s.length);
        for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
}

function downloadFile(data, filename){
    const url = URL.createObjectURL(data);

    const userAgent = navigator.userAgent.toLowerCase();
    //If in Chrome or Safari - download via virtual link click
    if (userAgent.indexOf('chrome') > -1 || userAgent.indexOf('safari') > -1) {

        //Creating new link node.
        let link = document.createElement('a');
        link.href = url;
        link.target = '_self';

        if (link.download !== undefined) {
            //Set HTML5 download attribute. This will prevent file from opening if supported.
            link.download = filename;
        }

        //Dispatching click event.
        if (document.createEvent) {
            let e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return;
        }
        return;
    }

    window.open(URL + '&download', '_blank');
}

function getLargeNum(x, y){
    if(x > y){
        return x;
    }else {
        return y;
    }
}

function getLittleNum(x, y){
    if(x > y){
        return y;
    }else {
        return x;
    }
}

/**
 * 计算当前列宽度
 * @param headStr
 * @param contentStr
 * @param colsStyle
 * @param index
 * @returns {{wch: number}}
 */
function computeColumnWidth(headStr, contentStr, colsStyle, index){

    let defaultStyle = colsStyle[index];
    let wch = COLUMN_MIN_WIDTH;

    if(defaultStyle){
        wch = defaultStyle.wch;
    }

    /**
     * 考虑中文的情况长度*2，为了性能不去区分中英文
     * 为了格式更好看，预留2位字符
     */
    const headerLength = headStr.length * 2 + 2;
    const contentLength = contentStr.length * 2 + 2;

    //1.取 头/内容 更大的值
    let width = getLargeNum(headerLength, contentLength);
    //2.取 width/旧值 更大的值
    width = getLargeNum(width, wch);
    //3.取 width/最大宽度 更小的值
    width = getLittleNum(width, COLUMN_MAX_WIDTH);

    return {
        wch: width,
    }
}

export default function(data = {
    filename: "下载",
    tHead: [],
    tBody: [],
}){

    const {tHead, tBody, filename} = data;

    const jsonData = [];
    const colsStyle = [];

    tBody.forEach(line => {

        const itemMap = {};

        tHead.forEach((head, index) => {
            const {key, title} = head;
            const contentStr = `${line[key]}`;
            itemMap[title] = contentStr;

            //此处需要计算当前列宽度
            colsStyle[index] = computeColumnWidth(title, contentStr, colsStyle, index);
        });

        jsonData.push(itemMap);
    });


    const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };//这里的数据是用来定义导出的格式类型

    const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {}};
    wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(jsonData);//通过json_to_sheet转成单页(Sheet)数据

    //设置表格列宽度
    wb.Sheets['Sheet1']['!cols'] = colsStyle;

    downloadFile(new Blob([s2ab(XLSX.write(wb, wopts))], { type: "application/octet-stream" }), `${filename}.xls`);
}
