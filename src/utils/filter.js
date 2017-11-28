import Vue from 'vue'

const getCurDate = (() => {
  let dd = new Date();
  let y = dd.getFullYear();
  let m = dd.getMonth() + 1; //获取当前月份的日期
  let d = dd.getDate();
  if (m < 10) m = "0" + m;
  if (d < 10) d = "0" + d;
  return y + "/" + m + "/" + d;
})

/**
 * [filter 日期]
 * 显示刚刚 5分钟前
 * 显示时间 5分钟后，没过今天(23:59:59之前)
 * 显示昨天 5分钟后，过了今天
 * 显示前天 5分钟后，过了昨天
 * 显示日期 5分钟后，过了前天
 */

Vue.filter('formatTime', (time) => {
  if (time) {
    let formateTime = time.replace(new RegExp("-", "gm"), "/");
    // let creatTime = new Date(formateTime).getTime(); //创建时间毫秒数
    // let curTime = new Date().getTime(); //当前时间毫秒数
    // let timeDifference = curTime - creatTime; //时间差
    // timeDifference = new Date(timeDifference);//、、bug 虽然能算出天数，但是2017-09-28 19:00:00 与 2017-09-29 09:00:00 是 相差0.5，但他属于昨天
     
    let creatTime = new Date(formateTime.substring(0, 10)+' 00:00:00').getTime(); //创建时间毫秒数
    let curTime = new Date((new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate()+' 00:00:00')).getTime(); //当前时间毫秒数
    let timeDifference = curTime - creatTime; //时间差
    timeDifference = new Date(timeDifference);

    let day = timeDifference / 1000 / 60 / 60 / 24; //天数 
    let hour = day * 24; //小时数
    let minute = hour * 60; //分钟数

    let showTime = '';
    if (minute <= 5) { showTime = '刚刚'; } 
    else if (minute >= 5 && minute <= 10) { showTime = '5分钟前'; } 
    else if (parseInt(day) == 0) { showTime = time.substring(10, 16); } 
    else if (parseInt(day) == 1) { showTime = '昨天' + time.substring(10, 16); } 
    else if (parseInt(day) == 2) { showTime = '前天' + time.substring(10, 16); } 
    else { showTime = time.substring(0, 10); }
    return showTime
  }
});

Vue.filter('formatFullTime', (time) => {
    let formateTime = time.replace(new RegExp("-", "gm"), "/");
    let creatTime = new Date(formateTime.substring(0, 10)+' 00:00:00').getTime(); //创建时间毫秒数
    let curTime = new Date((new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate()+' 00:00:00')).getTime(); //当前时间毫秒数
    let timeDifference = curTime - creatTime; //时间差
    timeDifference = new Date(timeDifference);

    let day = timeDifference / 1000 / 60 / 60 / 24; //天数 
    let hour = day * 24; //小时数
    let minute = hour * 60; //分钟数

    let showTime = '';

    if (minute <= 5) { showTime = '刚刚'; } 
    else if (minute >= 5 && minute <= 10) { showTime = '5分钟前'; } 
    else if (parseInt(day) == 0) { showTime = time.substring(10, 16); } 
    else if (parseInt(day) == 1) { showTime = '昨天' + time.substring(10, 16); } 
    else if (parseInt(day) == 2) { showTime = '前天' + time.substring(10, 16); } 
    else { showTime = time }

    return showTime
});


Vue.filter('formatDate', (time) => {
  if (time) {
    return time.substring(0, 10)
  }
});
Vue.filter('formatDate2', (time) => {
  if (time) {
    return time.substring(0, 16)
  }
});


/**
 * [filter 距离]
 * <1000m 的显示  xxx m
 * >1000m 的 ==> <500Km 显示 xxxkm ==> >500km 的显示
 */
Vue.filter('formatDistance', (distance) => {
  let filterDistance = 0;
  if (distance < 1000) {
    filterDistance = distance.toFixed(1) + 'm';
  } else if (distance / 1000 < 500) {
    filterDistance = (distance / 1000).toFixed(1) + 'km'
  } else {
    filterDistance = '>500km'
  }
  return filterDistance
});

Vue.filter('formatKeyword', (keyword) => {
  if (keyword) {
    return keyword.substring(0,5)
  }
});