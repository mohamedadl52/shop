import axios from 'axios';

const API_URL = 'http://localhost:8081/api/catogress';

class CatogressService {
  add(product) {
    console.log(product)
    return axios
      .post(API_URL + '/', {
        type : product
      })
      .then(response => {
      

        return response.data;
      });
  }
  get() {
  
    return axios
      .get(API_URL)
      .then(response => {
    

        return response.data;
      });
  }
  delete(id) {
   console.log(id)
    return axios
      .delete(API_URL + "/" + id)
      .then(response => {
    

        return response.data;
      });
  }
  update(info){
return axios.put(API_URL + '/' + info.id , {type : info.name }).then(response=>{
  return response.data
})
  }

}

export default new CatogressService();