import axios from 'axios'

//请求图片列表
const serviceForPisc = axios.create({
        baseURL: 'https://picsum.photos',
        timeout: 50000,
    }
)

serviceForPisc.interceptors.response.use(
    response=>{
            return response.data
    }
)

export const getPisc = ()=>{
        return serviceForPisc({
                url:'/v2/list',
                method:'Get'
        })
}

export const getSaoHua = () =>{
        return axios.create({
        timeout: 50000,
        baseURL:'https://api.oick.cn',
        })({
                method:'get',
                url:'/dutang/api.php'
        })
}
