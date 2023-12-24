import request from '@/utils/request';

export function Resource() {
    return request({
        url: '/products',
        method: 'get',
    });
}
