const test = require('ava')
const _ = require('lodash')
const Commons = require('./index')
test('uuid',t => {
  const res = Commons.uuid()
  t.is(res.length,32)
})
test('randomPasswd',t => {
  const size = 16
  const res = Commons.randomPasswd(size)
  t.is(res.length, size)
})
test('randomNum',t => {
  const max=10,min=1
  const res = Commons.randomNum(min,max)
  t.true(res >= min && res <= max)
})
test('base64Encode',t => {
  const str = '123456', base64Str = 'MTIzNDU2'
  const res = Commons.base64Encode(str)
  t.is(res, base64Str)
})
test('base64Decode',t => {
  const str = 'MTIzNDU2', decodeStr = '123456'
  const res = Commons.base64Decode(str)
  t.is(res, decodeStr)
})
test('base64EncodeObject',t => {
  const obj = {
    a:1,
  }, base64Str = 'eyJhIjoxfQ=='
  const res = Commons.base64EncodeObject(obj)
  t.is(res, base64Str)
})
test('base64DecodeObject',t => {
  const str = 'eyJhIjoxfQ==', obj = {
    a: 1,
  }
  const res = Commons.base64DecodeObject(str)
  t.true(_.isEqual(res,obj))
})
test('hideMobile',t => {
  const mobile = '13900000000', hideStr = '139****0000'
  const res = Commons.hideMobile(mobile)
  t.is(res, hideStr)
})