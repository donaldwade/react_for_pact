import axios from 'axios';

export const makeRequest = (url) => {
  console.log('Inside make request');
  // return new Promise((resolve, reject) => {
    // console.log('Here I am');
    // console.log(`${url}/key/value/one/two`)
    return axios.get(`${url}/key/value/one/two`)
    // axios.get('http://echo.jsontest.com/key/value/one/two')
      .then((response) => {
        console.log('Returning response data: ', response.data);
        return response.data;
        //        resolve(response.data)
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

export default makeRequest;
