import { httpGet, httpPost } from '../utils/http'
import base from './base'

/**
 * 所有的网络请求都写在 api 里
 */
const api = {
    getChengpin(){
        return httpGet(base.ownUrl + base.chengpin);
    },
    getLogin(params){
        return httpPost(base.ownUrl + base.login, params);
    }
}

export default api