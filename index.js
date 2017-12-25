const uuid = require('uuid')
const randomstring = require('randomstring')
const _ = require('lodash')

class Commons {
  static uuid() {
    return uuid.v4().replace(/-/g, '')
  }

  static randomPasswd(size) {
    return randomstring.generate(size)
  }

  static randomNum(min = 0, max = 100) {
    return _.random(min, max)
  }

  static base64Encode(str) {
    return Buffer.from(str).toString('base64')
  }

  static base64Decode(str) {
    return Buffer.from(str, 'base64').toString()
  }

  static base64EncodeObject(obj) {
    return Commons.base64Encode(JSON.stringify(obj))
  }

  static base64DecodeObject(str) {
    return JSON.parse(Commons.base64Decode(str))
  }

  static hideMobile(mobile) {
    return [...mobile].fill('*', 3, 7).join('')
  }
}
module.exports = Commons