
const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json()).then(data => resolve(data)).catch(err => reject(err))
  })
}

export default {
  getbannerlist (dispatch) {
    console.log(2)
    getData('http://www.daxunxun.com/douban').then(data => {
//      console.log(data)
      dispatch({
        type: 'CHANGE_BANNER',
        data
      })
    })
  },
  getprolist (dispatch) {
    getData('http://www.daxunxun.com/douban').then(data => {
      dispatch({
        type: 'CHANGE_PROLIST',
        data
      })
    })
  }
}
