import CryptoJS from 'crypto-js';

export default {
  /*
   * MD5随机加密
   * @param {String}   word  需要加密的密码
   * @return {String}   加密的密文
   * */
  MD5(word) {
    return CryptoJS.MD5(word).toString();
  },

  /*
   * Base64 编码
   * @param {String}   word  需要编码的内容
   * @return {String}   编码/解密 内容
   * */
  Base64: {
    encrypt: word => {
      const words = CryptoJS.enc.Utf8.parse(word);
      return CryptoJS.enc.Base64.stringify(words);
    },
    decrypt: word => {
      const words = CryptoJS.enc.Base64.parse(word);
      return words.toString(CryptoJS.enc.Utf8);
    },
  },
};
