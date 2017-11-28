/**
 axios.post('/serv/ve/clue/v1/homePage?params={"dlrCode":"H2901"}').then(function(response) {
  console.log(response);
}).catch(function(response) {
  console.log(response);
});
axios({
  method: 'post',
  url:'/serv/ve/clue/v1/homePage',
  data: 'params={"dlrCode":"H2901"}'
})
 * 
 */

import axios from 'axios'
import store from '../vuex/store.js'
import qs from 'qs'

const debug = process.env.NODE_ENV !== 'production';
const IsLoacalData = process.env.NODE_ENV !== 'production'; //本地数据
// const IsLoacalData = true; //本地数据
//公共api处理方法

const commonAPI = (url, params, callback) => {

  let APIName = params.localType;
  store.commit('updateLoading', {
    isLoading: true
  })
  let defalutConfig = {
    method: 'post',
    url: url,
    data: getParam(params)
  }
  if (IsLoacalData) {
    //本地数据
    defalutConfig.url = './local?api=' + APIName;
  }
  return axios(defalutConfig).then(res => { //请求成功返回的数据
    store.commit('updateLoading', {
      isLoading: false
    })
    if (res.data.error == 'R200') {
      if (callback) {
        callback(res.data)
      } else {
        if (debug) {
          // console.log('调用的API名称======' + APIName + '======返回结果如下：')
          // console.log(res.data.result)
        }
        return res.data
      }
    } else {
      console.log('errerrerrerrerrerrerrerrerrerrerrerrerrerrerr调用' + APIName + '失败，详情如下：')
      console.log(res.data)
      return res.data
    }
  }).catch(function(err) { //请求失败返回的数据
    console.log(err);
    return err
  });
}
const getParam = (params) => {

  let res = ''
  if (IsLoacalData) {
    //本地数据
    res = 'local=' + JSON.stringify(params)
  } else {
    delete params.localType//清除本地测试json标识
    // res = 'params=' + JSON.stringify(params)
     res = qs.stringify(params)//格式化参数
  }
  return res
}

const api = {
  GET_TEST(params, callback) {
    params.localType = 'GET_TEST'; //请求本地数据添加，不需要可以删除，不建议删除   →_→|||
    return commonAPI('/toutiao/index', params, callback)
  }, 
}

export default api
