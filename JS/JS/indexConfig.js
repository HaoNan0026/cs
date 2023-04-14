/**
 * 这是一个平平无奇的JS方法文件 从简单到复杂的方法都有
 * 作者：haonan
 * 时间：2023-04-14
 */

// 1. 处理时间戳
function formatTime() {
    var time = new Date();
    if (!time) return ''
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    var times = `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
    console.log(times)
}

// 2. 对字符串处理
function processingString(str) {
    var str1 = str.replace(/[^0-9]/ig, ""); //筛选出其中的数字
    var str2 = str.replace(/[^a-zA-Z]/ig, ""); //筛选出其中的字母
    var str3 = str1.split('').sort().join(''); // 对str1进行排序
    var str4 = str2.split('').sort().join(''); // 对str2进行排序 
}
// 3. 对数组进行处理
// 递归判断数组中是否有数组
function isArray(arr) {
    return arr.some(item => Array.isArray(item))
}
// 递归数组
function flatten(arr) {
    while (isArray(arr)) {
        arr = [].concat(...arr)
    }
    return arr
}
// 数组去重
function unique(arr) {
    return Array.from(new Set(arr)) 
}
// 数组排序
function sort(arr) {
    return arr.sort((a, b) => a - b)
}
// 数组求和
function sum(arr) {
    return arr.reduce((a, b) => a + b)
}
// 数组求最大值
function max(arr) {
    return Math.max(...arr)
}
// 数组求最小值
function min(arr) {
    return Math.min(...arr)
}
// 数组求平均值
function average(arr) {
    return sum(arr) / arr.length
}
// 数组求中位数
function median(arr) {
    arr = sort(arr)
    let mid = Math.floor(arr.length / 2)
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2
}
// 数组求众数
function mode(arr) {
    let obj = {}
    arr.forEach(item => {
        obj[item] ? obj[item]++ : obj[item] = 1
    })
    let max = 0
    let res = []
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key]
            res = [key]
        } else if (obj[key] === max) {
            res.push(key)
        }
    }
    return res
}
// 数组求方差
function variance(arr) {
    let avg = average(arr)
    return average(arr.map(item => Math.pow(item - avg, 2)))
}
// 数组求标准差
function standardDeviation(arr) {
    return Math.sqrt(variance(arr))
}
// 4. 对对象进行处理
// 对象转数组
function objToArray(obj) {
    return Object.keys(obj).map(key => obj[key])
}
// 数组转对象
function arrayToObj(arr) {
    return arr.reduce((a, b) => ({ ...a, ...b }), {})
}
// 对象深拷贝
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}
// 5. 对数字进行处理
// 生成随机数
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
// 生成随机颜色
function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8)
}
// 计算两点之间的距离
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}
// 6. 对字符串进行处理
// 首字母大写
function firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}
// 首字母小写
function firstLowerCase(str) {
    return str.replace(/( |^)[A-Z]/g, (L) => L.toLowerCase())
}
// 7. 对正则进行处理
// 验证手机号
function isPhone(phone) {
    return /^1[3456789]\d{9}$/.test(phone)
}
// 验证邮箱
function isEmail(email) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/.test(email)
}
// 验证身份证
function isIdCard(idCard) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard)
}
// 验证URL
function isUrl(url) {
    return /^http[s]?:\/\/.*/.test(url)
}
// 验证IP
function isIP(ip) {
    return /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(ip)
}
// 验证16进制颜色
function isColor(color) {
    return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color)
}
// 对对象的递归
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}