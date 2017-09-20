import axios from 'axios';

export const makeRequest = (url) => {
  console.log('Inside make request');
  url = url || 'http://echo.jsontest.com';
  console.log(`URL is ${url}`) 
  // return new Promise((resolve, reject) => {
    // console.log('Here I am');
    // console.log(`${url}/key/value/one/two`)
    return axios.get(`${url}/key/value/one/two`)
    // axios.get('http://echo.jsontest.com/key/value/one/two')
      .then((response) => {
        console.log('Returning response data: ', response.data);
        return response.data;
        //        resolve(response.data) // if you are using resolve, reject syntax
//        resolve(() => {
//          return response.data;
//        })
//      })
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
}

export const hitGoEndpoint = (url) => {
  console.log('End point is: ', url);
  console.log('Hitting go end point')
  return axios.get(`${url}/go/test`)
  // return axios.get('http://localhost:1323/go/test')
    .then((response) => {
      console.log('This is the response data: ', response.data);
      return response.data;
    })
    .catch((error) => {
      return error;
    })
}

export default makeRequest;
