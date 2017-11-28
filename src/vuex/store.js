import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * [state description]
 * @type {Object}
 */
const state = {
  demoScrollTop: 0,
  myRecordPage: 1, //我的记录标签页
  isLoading: false,
  direction: 'forward',
  toast: {
    showToast: false,
    title: ''
  },
  alert: {
    showAlert: false,
    isConfirm: false,
    title: '',
    fn: ''
  },
  alerttic: { //机动号,车架号
    showAlerttic: false,
    isConfirm: false,
    title: '',
    fn: ''
  },
  noneObject: {
    show: false,
    text: ''
  },
  code: { //控制条形码与二维码的显示与隐藏
    showCode: false,
    barCode: '',
    qrCode: ''
  },
  position: { //用户地理位置
    lat: 23.129163,
    lng: 113.264435,
    country: '',
    province: '',
    city: ''
  },
  joinNumber: '0',
  couponUseType: {
    recommendBuy: '', //推荐购车
    recommendMaintain: '', //推荐养修
    recommendInsurance: '', //推荐保险
    carBind: '', //车主绑定
    noCarBind: '', //非车主绑定
  },
  dlrCodeInfo: null, //选择专营店选择时存贮的专营店信息
  // codeShow: false,//控制条形码与二维码的显示与隐藏
  carBrandvalue: null, //选择车辆品牌时存储的品牌信息
  adviservalue: null, //选择顾问
  carCarsvalue: null, //车系
  carModelsvalue: null, //车型
  testCar: null, //试驾
  MaintainAppointment: {}, //养修预约顾问
  MaintainNew: {}, //养修预约顾问New
  textDriver: {}, //试驾顾问
  textDriverNew: {}, //试驾顾问New
  dlrCode: null, //专营店
  GET_USER_INFO: null, //用户信息
  GET_WEIXIN_INFO: null, //用户微信信息
  MY_INCOME: null, //我的收益和获得优惠券名单和我的优惠券数量
  GET_MSG_COUNT: null, //消息数量
  GET_EVENT: null, //获取活动列表
  GET_CLUE_RECORD: null, //我的记录
  GET_SELECT_DLR_LIST: null, //所有专营店列表
  GET_EVENT_DETAIL: null, //活动详情
  GET_CAR_BRAND: null, //所有车辆品牌
  GET_ZYDCAR_BRAND: null, //专营店车辆品牌
  GET_CAR_SERIES: null, //车系
  GET_CAR_TYPE_CONFIG: null, //车型
  GET_ZYCAR_CARS: null, //试驾
  GET_GW_SELECT: null, //选择顾问
  GET_MY_COUPON_UNRECEIVE: null, //我的待领取优惠券
}
/**
 * [mutations description]
 * @type {Object}
 */
const mutations = {
  updateDemoPosition(state, payload) {
    state.demoScrollTop = payload
  },
  updateMyRecordPage(state, payload) {
    state.myRecordPage = payload
  },
  updateLoading(state, payload) {
    state.isLoading = payload.isLoading
  },
  updateDirection(state, payload) {
    state.direction = payload.direction
  },
  updateToast(state, payload) {
    state.toast.showToast = payload.showToast
    state.toast.title = payload.title
  },
  updateAlert(state, payload) {
    state.alert.showAlert = payload.showAlert
    state.alert.isConfirm = payload.isConfirm
    state.alert.title = payload.title
    state.alert.fn = payload.fn
  },
  updatetextDriver(state, payload) {
    state.textDriver = payload
  },
  updatetextDriverNew(state, payload) {
    state.textDriverNew = payload
  },
  updateMaintainAppointment(state, payload) {
    state.MaintainAppointment = payload
  },
  updateMaintainNew(state, payload) {
    state.MaintainNew = payload
  },
  updateAlerttic(state, payload) {
    state.alerttic.showAlerttic = payload.showAlerttic
    state.alerttic.isConfirm = payload.isConfirm
    state.alerttic.title = payload.title
    state.alerttic.fn = payload.fn
  },
  updateNoneObject(state, payload) {
    state.noneObject.show = payload.show
    state.noneObject.text = payload.text
  },
  updateCode(state, payload) {
    state.code.showCode = payload.showCode
    state.code.barCode = payload.barCode
    state.code.qrCode = payload.qrCode
  },
  updatePosition(state, payload) {
    state.position.lat = payload.lat
    state.position.lng = payload.lng
    state.position.country = payload.country
    state.position.province = payload.province
    state.position.city = payload.city
  },

  updateJoinNumber(state, payload) {
    state.joinNumber = payload
  },
  updateDlrCodeInfo(state, payload) {
    state.dlrCodeInfo = payload
  },
  updateadviservalue(state, payload) {
    state.adviservalue = payload
  },
  updatecarBrandvalue(state, payload) {
    state.carBrandvalue = payload
  },
  updatetestCar(state, payload) {
    state.testCar = payload
  },
  updatecarCarsvalue(state, payload) {
    state.carCarsvalue = payload
  },
  updatecarModelsvalue(state, payload) {
    state.carModelsvalue = payload
  },
  updateDlrCode(state, payload) {
    state.dlrCode = payload
  },
  updateCouponUseType(state, payload) { //卡券运用场景接口
    state.couponUseType.recommendBuy = payload.recommendBuy, //推荐购车
      state.couponUseType.recommendMaintain = payload.recommendMaintain, //推荐养修
      state.couponUseType.recommendInsurance = payload.recommendInsurance, //推荐保险
      state.couponUseType.carBind = payload.carBind, //车主绑定
      state.couponUseType.noCarBind = payload.noCarBind //非车主绑定
  },

  GET_USER_INFO(state, payload) { //用户信息
    state.GET_USER_INFO = payload.result
  },
  GET_WEIXIN_INFO(state, payload) { //用户微信信息
    state.GET_WEIXIN_INFO = payload.result
  },
  MY_INCOME(state, payload) { //我的收益和获得优惠券名单和我的优惠券数量
    state.MY_INCOME = payload.result
  },
  GET_MSG_COUNT(state, payload) { //消息数量
    state.GET_MSG_COUNT = payload.result
  },
  GET_EVENT(state, payload) { //获取活动列表
    state.GET_EVENT = payload.result
  },
  GET_CLUE_RECORD(state, payload) { //我的记录
    state.GET_CLUE_RECORD = payload.result
  },
  GET_SELECT_DLR_LIST(state, payload) { //所有专营店列表
    state.GET_SELECT_DLR_LIST = payload.result
  },
  GET_EVENT_DETAIL(state, payload) { //活动详情
    state.GET_EVENT_DETAIL = payload.result
  },
  GET_CAR_BRAND(state, payload) { //所有车辆品牌
    state.GET_CAR_BRAND = payload.result
  },
  GET_ZYDCAR_BRAND(state, payload) { //专营店车辆品牌  
    state.GET_ZYDCAR_BRAND = payload.result
  },
  GET_CAR_SERIES(state, payload) { //车系  
    state.GET_CAR_SERIES = payload.result
  },
  GET_CAR_TYPE_CONFIG(state, payload) { //车型  
    state.GET_CAR_TYPE_CONFIG = payload.result
  },
  GET_ZYCAR_CARS(state, payload) { //试驾 
    state.GET_ZYCAR_CARS = payload.result
  },
  GET_GW_SELECT(state, payload) { //选择顾问 
    state.GET_GW_SELECT = payload.result
  },
  GET_MY_COUPON_UNRECEIVE(state, payload) { //我的待领取优惠券
    state.GET_MY_COUPON_UNRECEIVE = payload
  },
}
/**
 * [actions description]
 * @type {Object}
 */ //this.$store.commit('updateDlrCode', dlrCode);
const actions = {
  // updateDemoPosition({
  //   commit
  // }, top) {
  //   commit({
  //     type: 'updateDemoPosition',
  //     top: top
  //   })
  // },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
