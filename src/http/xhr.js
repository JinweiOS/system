const host = 'https://restapi.amap.com/v3'

function requestQuery(method, data, callback) {
  const xhr = new XMLHttpRequest()
  const queryParams = objToQuery(data)
  xhr.open(method, `${host}/weather/weatherInfo?${queryParams}`, true)
  xhr.send()

  xhr.addEventListener('load', function () {
    callback(JSON.parse(xhr.response))
  })
}

function requestQueryPromise(method, data) {
  // return new Promise((resolve) => {
  //   const xhr = new XMLHttpRequest()
  //   const queryParams = objToQuery(data)
  //   xhr.open(method, `${host}/weather/weatherInfo?${queryParams}`, true)
  //   xhr.send()
  
  //   xhr.addEventListener('load', function () {
  //     resolve(JSON.parse(xhr.response))
  //   })
  // })
  return new Promise((resolve) => {
    requestQuery(method, data, resolve)
  })
}

function objToQuery(obj) {
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&')
}


export {
  requestQuery,
  requestQueryPromise
}

