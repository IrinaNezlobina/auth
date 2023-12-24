import request from '@/utils/request';

export function Login(payload) {
    return request({
        url: '/auth/login',
        method: 'post',
        data: payload,
    });
}
