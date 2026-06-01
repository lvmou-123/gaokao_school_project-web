import request from '@/utils/request'

export function postSendSms(data) {
  return request.post('/auth/sms', data)
}

export function postRegister(data) {
  return request.post('/auth/register', data)
}

export function postLogin(data) {
  return request.post('/auth/login/phone', data)
}
