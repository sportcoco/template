/**
 * 函数防抖
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数
 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
 */
 export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * 函数节流
 * @param { function } func 函数
 * @param { number } wait 延迟执行毫秒数
 * @param { number } type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait, type) {
  let previous, timeout;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    timeout = null;
  }
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}

/**
 * 指定时间后调用提供的函数
 * @param { function } fn 方法
 * @param { number } wait 时间
 */
export const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

/**
 * 返回数组中的最大值
 * 将Math.max()与扩展运算符 (...) 结合使用以获取数组中的最大值。
 * @param {Array<number>} arr
 */
export const arrayMax = (arr) => Math.max(...arr);

/**
 * 返回数组中的最小值
 * 将Math.min()与扩展运算符 (...) 结合使用以获取数组中的最小值。
 * @param {Array} arr
 * @param {number} size
 */
export const arrayMin = (arr) => Math.min(...arr);

/**
 * 将数组块划分为指定大小的较小数组
 * 使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。
 * @param {Array} arr
 * @param {number} size
 */
export const chunk = (arr, size) =>
  Array.from(
    {
      length: Math.ceil(arr.length / size)
    },
    (v, i) => arr.slice(i * size, i * size + size)
  );

/**
 * 从数组中移除 falsey 值
 * 使用Array.filter()筛选出 falsey 值 (false、null、0、""、undefined和NaN).
 * @param {Array} arr
 * @param {*} value
 */
export const compact = (arr) => arr.filter(Boolean);

/**
 * 计算数组中值的出现次数
 * 使用Array.reduce()在每次遇到数组中的特定值时递增计数器。
 * @param {Array} arr
 * @param {*} value
 */
export const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);

/**
 * 返回两个数组之间的差异
 * 从b创建Set, 然后使用Array.filter() on 只保留a b中不包含的值.
 * @param {*} a
 * @param {*} b
 */
export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

/**
 * 返回数组的所有不同值
 * 使用 ES6 Set和...rest运算符放弃所有重复的值。
 * @param {Array} arr
 */
export const distinctValuesOfArray = (arr) => [...new Set(arr)];

/**
 * 返回数组中的每个第 n 个元素
 * 使用Array.filter()创建一个包含给定数组的每个第 n 个元素的新数组。
 * @param {Array} arr
 * @param {number} nth
 */
export const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === 0);

/**
 * 筛选出数组中的非唯一值
 * 对于只包含唯一值的数组, 请使用Array.filter()。
 * @param {Array} arr
 */
export const filterNonUnique = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

/**
 * 拼合数组
 * 使用Array.reduce()获取数组中的所有元素和concat()以拼合它们
 * @param {Array} arr
 */
export const flatten = (arr) => arr.reduce((a, v) => a.concat(v), []);

/**
 * 返回两个数组中存在的元素的列表
 * 从b创建Set, 然后使用Array.filter()on a只保留b中包含的值.
 * @param {*} a
 * @param {*} b
 */
export const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

/**
 * 检查给定数组中是否包含某项
 * @param {Array} arr
 * @param {*} item
 */
export const contains = function (arr, item) {
  let i = arr.length;
  while (i--) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

/**
 * 数组降维
 * @param {Array} arr
 */
 export function reduceDimension(arr) {
  let reduced = [];
  for (let i = 0; i < arr.length; i++) {
    reduced = reduced.concat(arr[i]);
  }
  return reduced;
}

/**
 * 获取url参数
 * @param {*} name
 * @param {*} origin
 */
export function getUrlParams(name, origin = null) {
  let url = location.href;
  let temp1 = url.split('?');
  let pram = temp1[1];
  let keyValue = pram.split('&');
  let obj = {};
  for (let i = 0; i < keyValue.length; i++) {
    let item = keyValue[i].split('=');
    let key = item[0];
    let value = item[1];
    obj[key] = value;
  }
  return obj[name];
}

/**
 * 修改url中的参数
 * @param { string } paramName
 * @param { string } replaceWith
 */
export function replaceParamVal(paramName, replaceWith) {
  let oUrl = location.href.toString();
  let re = eval('/(' + paramName + '=)([^&]*)/gi');
  location.href = oUrl.replace(re, paramName + '=' + replaceWith);
  return location.href;
}

/**
 * 删除url中指定的参数
 * @param { string } name
 */
export function funcUrlDel(name) {
  let loca = location;
  let baseUrl = loca.origin + loca.pathname + '?';
  let query = loca.search.substr(1);
  if (query.indexOf(name) > -1) {
    let obj = {};
    let arr = query.split('&');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=');
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    let url =
      baseUrl +
      JSON.stringify(obj)
        .replace(/[\"\{\}]/g, '')
        .replace(/\:/g, '=')
        .replace(/\,/g, '&');
    return url;
  }
}

//http跳转https
export const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

/**
 * 打开一个窗口
 * @param { string } url
 * @param { string } windowName
 * @param { number } width
 * @param { number } height
 */
export function openWindow(url, windowName, width, height) {
  let x = parseInt(screen.width / 2.0) - width / 2.0;
  let y = parseInt(screen.height / 2.0) - height / 2.0;
  let isMSIE = navigator.appName == 'Microsoft Internet Explorer';
  if (isMSIE) {
    let p = 'resizable=1,location=no,scrollbars=no,width=';
    p = p + width;
    p = p + ',height=';
    p = p + height;
    p = p + ',left=';
    p = p + x;
    p = p + ',top=';
    p = p + y;
    window.open(url, windowName, p);
  } else {
    let win = window.open(
      url,
      'ZyiisPopup',
      'top=' +
        y +
        ',left=' +
        x +
        ',scrollbars=' +
        scrollbars +
        ',dialog=yes,modal=yes,width=' +
        width +
        ',height=' +
        height +
        ',resizable=no'
    );
    eval('try { win.resizeTo(width, height); } catch(e) { }');
    win.focus();
  }
}

/**
 * 金钱格式化，三位加逗号
 * @param { number } num
 */
export const formatMoney = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/**
 * 截取字符串并加身略号
 * @param { string } str
 * @param { number } length
 */
export function subText(str, length) {
  if (str.length === 0) {
    return '';
  }
  if (str.length > length) {
    return str.substr(0, length) + '...';
  } else {
    return str;
  }
}

/**
 * 获取文件base64编码
 * @param file
 * @param format  指定文件格式
 * @param size  指定文件大小(字节)
 * @param formatMsg 格式错误提示
 * @param sizeMsg   大小超出限制提示
 * @returns {Promise<any>}
 */
export function fileToBase64String(
  file,
  format = ['jpg', 'jpeg', 'png', 'gif'],
  size = 20 * 1024 * 1024,
  formatMsg = '文件格式不正确',
  sizeMsg = '文件大小超出限制'
) {
  return new Promise((resolve, reject) => {
    // 格式过滤
    let suffix = file.type.split('/')[1].toLowerCase();
    let inFormat = false;
    for (let i = 0; i < format.length; i++) {
      if (suffix === format[i]) {
        inFormat = true;
        break;
      }
    }
    if (!inFormat) {
      reject(formatMsg);
    }
    // 大小过滤
    if (file.size > size) {
      reject(sizeMsg);
    }
    // 转base64字符串
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      let res = fileReader.result;
      resolve({ base64String: res, suffix: suffix });
      reject('异常文件，请重新选择');
    };
  });
}

/**
 * B转换到KB,MB,GB并保留两位小数
 * @param { number } fileSize
 */
export function formatFileSize(fileSize) {
  let temp;
  if (fileSize < 1024) {
    return fileSize + 'B';
  } else if (fileSize < 1024 * 1024) {
    temp = fileSize / 1024;
    temp = temp.toFixed(2);
    return temp + 'KB';
  } else if (fileSize < 1024 * 1024 * 1024) {
    temp = fileSize / (1024 * 1024);
    temp = temp.toFixed(2);
    return temp + 'MB';
  } else {
    temp = fileSize / (1024 * 1024 * 1024);
    temp = temp.toFixed(2);
    return temp + 'GB';
  }
}

/**
 * base64转file
 * @param { base64 } base64
 * @param { string } filename 转换后的文件名
 */
export const base64ToFile = (base64, filename) => {
  let arr = base64.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split('/')[1]; // 图片后缀
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, { type: mime });
};

/**
 * base64转blob
 * @param { base64 } base64
 */
export const base64ToBlob = (base64) => {
  let arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

/**
 * blob转file
 * @param { blob } blob
 * @param { string } fileName
 */
export const blobToFile = (blob, fileName) => {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  return blob;
};

/**
 * file转base64
 * @param { * } file 图片文件
 */
export const fileToBase64 = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    return e.target.result;
  };
};


/**
 * 递归生成树形结构
 * @param { Object } data
 * @param { String | Number } pid
 * @param { String } pidName
 * @param { String } idName
 * @param { String } childrenName
 */
export function getTreeData(data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children') {
  let arr = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][pidName] == pid) {
      data[i].key = data[i][idName];
      data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
      arr.push(data[i]);
    }
  }

  return arr;
}


/**
 * 遍历树节点
 * @param { Object } data
 * @param { String } childrenName
 * @param { Function } callback
 */
export function foreachTree(data, childrenName = 'children', callback) {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], childrenName, callback);
    }
  }
}


/**
 * 追溯父节点
 * @param { String | Number } pid
 * @param { Object } data
 * @param { String | Number } rootPid
 * @param { String } pidName
 * @param { String } idName
 * @param { String } childrenName
 */
export function traceParentNode(pid, data, rootPid, pidName = 'parentId', idName = 'id', childrenName = 'children') {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
    if (node[idName] == pid) {
      arr.push(node);
      if (node[pidName] != rootPid) {
        arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));
      }
    }
  });
  return arr;
}


/**
 * 寻找所有子节点
 * @param { String | Number } id
 * @param { Object } data
 * @param { String } idName
 * @param { String } pidName
 * @param { String } childrenName
 */
export function traceChildNode(id, data, pidName = 'parentId', idName = 'id', childrenName = 'children') {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
    if (node[pidName] == id) {
      arr.push(node);
      arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));
    }
  });
  return arr;
}

/**
 * 根据pid生成树形结构
 *  @param { object } items 后台获取的数据
 *  @param { * } id 数据中的id
 *  @param { * } link 生成树形结构的依据
 */
export const createTree = (items, id = null, link = 'pid') => {
  items.filter((item) => item[link] === id).map((item) => ({ ...item, children: createTree(items, item.id) }));
};

/**
 * 判断数据类型
 * @param {*} target
 */
export function type(target) {
  let ret = typeof target;
  let template = {
    '[object Array]': 'array',
    '[object Object]': 'object',
    '[object Number]': 'number - object',
    '[object Boolean]': 'boolean - object',
    '[object String]': 'string-object'
  };

  if (target === null) {
    return 'null';
  } else if (ret == 'object') {
    let str = Object.prototype.toString.call(target);
    return template[str];
  } else {
    return ret;
  }
}

/**
 * 生成指定范围随机数
 * @param { number } min
 * @param { number } max
 */
export const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 数组乱序
 * @param {array} arr
 */
export function arrScrambling(arr) {
  let array = arr;
  let index = array.length;
  while (index) {
    index -= 1;
    let randomIndex = Math.floor(Math.random() * index);
    let middleware = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = middleware;
  }
  return array;
}

/**
 * 加法函数（精度丢失问题）
 * @param { number } arg1
 * @param { number } arg2
 */
export function add(arg1, arg2) {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

/**
 * 减法函数（精度丢失问题）
 * @param { number } arg1
 * @param { number } arg2
 */
export function sub(arg1, arg2) {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}

/**
 * 除法函数（精度丢失问题）
 * @param { number } num1
 * @param { number } num2
 */
export function division(num1, num2) {
  let t1, t2, r1, r2;
  try {
    t1 = num1.toString().split('.')[1].length;
  } catch (e) {
    t1 = 0;
  }
  try {
    t2 = num2.toString().split('.')[1].length;
  } catch (e) {
    t2 = 0;
  }
  r1 = Number(num1.toString().replace('.', ''));
  r2 = Number(num2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}


/**
 * 乘法函数（精度丢失问题）
 * @param { number } num1
 * @param { number } num2
 */
export function mcl(num1, num2) {
  let m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
}


/**
 * 递归优化（尾递归）
 * @param { function } f
 */
export function tco(f) {
  let value;
  let active = false;
  let accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}


/**
 * 去除空格
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
export function trim(str, type = 1) {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
  switch (type) {
    case 1:
      return str.replace(/\s/g, '');
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, '');
    case 3:
      return str.replace(/(^\s)/g, '');
    case 4:
      return str.replace(/(\s$)/g, '');
    default:
      return str;
  }
}


/**
 * 大小写转换
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 */

export function turnCase(str, type) {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substr(1).toLowerCase();
    default:
      return str;
  }
}


/**
 * 随机16进制颜色 hexColor
 */
export function hexColor() {
  let str = '#';
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < 6; i++) {
    let index = Number.parseInt((Math.random() * 16).toString());
    str += arr[index];
  }
  return str;
}


/**
 * 随机16进制颜色 randomHexColorCode
 */
export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};


/**
 * 转义html(防XSS攻击)
 * @param { string } str 待转换的字符串
 * @return { string }
 */
export const escapeHTML = (str) => {
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
};


/**
 * 数字超过规定大小加上加号“+”，如数字超过99显示99+
 * @param { number } val 输入的数字
 * @param { number } maxNum 数字规定界限
 */
export const outOfNum = (val, maxNum) => {
  val = val ? val - 0 : 0;
  if (val > maxNum) {
    return `${maxNum}+`;
  } else {
    return val;
  }
};


/**
 * 开启全屏
 */
export function fullScreen() {
  let el = document.documentElement;
  let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

  //typeof rfs != "undefined" && rfs
  if (rfs) {
    rfs.call(el);
  } else if (typeof window.ActiveXObject !== 'undefined') {
    //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
    let wscript = new ActiveXObject('WScript.Shell');
    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}


/**
 * 退出全屏
 */
export function exitScreen() {
  let el = document;
  let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;

  //typeof cfs != "undefined" && cfs
  if (cfs) {
    cfs.call(el);
  } else if (typeof window.ActiveXObject !== 'undefined') {
    //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
    let wscript = new ActiveXObject('WScript.Shell');
    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}


/**
 * 根据身份证获取出生年月
 * @param idCard
 */
export function getBirthdayFromIdCard(idCard) {
  let birthday = '';
  if (idCard != null && idCard != '') {
    if (idCard.length == 15) {
      birthday = '19' + idCard.substr(6, 6);
    } else if (idCard.length == 18) {
      birthday = idCard.substr(6, 8);
    }

    birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-');
  }

  return birthday;
}


/**
 * 根据身份证获取年龄
 * @param UUserCard
 */
export function getAgeForIdCard(UUserCard) {
  //获取年龄
  let myDate = new Date();
  let month = myDate.getMonth() + 1;
  let day = myDate.getDate();
  let age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
  if (
    UUserCard.substring(10, 12) < month ||
    (UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day)
  ) {
    age++;
  }
  return age;
}


