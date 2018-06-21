export const timeFormat = sj => {
  let countDay = 7 // 计算倒数的天数
  const now = Date.now() // 当前时间戳

  let time = new Date(sj)
  let year = time.getFullYear() === new Date().getFullYear() ? '' : time.getFullYear() + '年'
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hour = time.getHours()
  let minute = time.getMinutes()
  // let second = time.getSeconds()
  let result = year + month + '月' + date + '日 ' + hour + ':' + minute
  /* + ':' + second */

  const timeDiff = now - time
  const dayMs = 1000 * 60 * 60 * 24 // 一天的毫秒
  const hourMs = 1000 * 60 * 60
  if (timeDiff < dayMs * countDay) {
    if ((timeDiff / dayMs) > 1) {
      let day_ = timeDiff / dayMs
      let hour_ = (timeDiff % dayMs) / hourMs
      result = `${day_.toFixed()}天${hour_.toFixed()}小时前`
    } else {
      result = (timeDiff / hourMs).toFixed() + '小时前'
    }
  }
  return result
}
export const matchTag = (id, index, tags) => {
  if (id) {
    let ids = id.split(',')
    let arr = []

    const t = () => {
      for (let i of ids) {
        for (let n of tags) {
          if (+n.id === +i) {
            arr.push(n.text)
          }
        }
      }
    }
    t()
    return arr
  } else {
    return ''
  }
}
