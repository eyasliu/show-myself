import crypto from 'crypto';

export default {
  /**
   * 加密字符串
   * @param  {...string} str 需要加密的字符串
   * @return {string}        加密后的字符串
   */
  hash(){
    const str = Array.prototype.slice.call(arguments);
    const sha1 = crypto.createHash('sha1');
    sha1.update(str.join(''));
    return sha1.digest('hex');
  },

  /**
   * 验证str字符串加密后于hash是否相等
   * @param  {string} str  需要验证的字符串
   * @param  {string} hash 加密后的字符串
   * @return {Boolean}      是否相等
   */
  validate(str, hash){
    return this.hash(str) === hash;
  }
}