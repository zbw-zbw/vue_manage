import axios from "axios"
import qs from "querystring"

const instance = axios.create({
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar"
  }
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (config.method == "post" || config.method == "put") {
    if (token) {
      config.data.token = token;
    }
    config.data = qs.stringify(config.data)
  } else if (config.method == "get" || config.method == "delete") {
    if (token) {
      config.params.token = token;
    }
  }
  return config
}, err => {
  console.log(err)
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err)
})

export default instance