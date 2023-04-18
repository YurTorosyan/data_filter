import axios from "axios"

export const fetchProductApi = (url) => {
  
  return axios.get(url,{
    params: {
      limit: 100
    }
    }).then(response => response.data)
}