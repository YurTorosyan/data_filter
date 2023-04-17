export const fetchProductApi = (url) => {
  
  return fetch(url).then(response => response.json()).then(json => json)
}