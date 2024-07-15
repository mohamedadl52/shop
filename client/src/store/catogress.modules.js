import CatogressService from '../../services/catogress.service';


export const catogress = {
  namespaced: true,
  actions: {
    add({ commit }, product) {

      return CatogressService.add(product).then(
        user => {
          commit('AddSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('AddFailure');
          return Promise.reject(error);
        }
      );
    },
    get({ commit }) {

      return CatogressService.get().then(
        data => {
          commit('getSuccess', data);
          return Promise.resolve(data);
        },
        error => {
          commit('getFailure');
          return Promise.reject(error);
        }
      );
    },
    delete( {commit} ,id ) {
      commit('delete')
      console.log(id)
      return CatogressService.delete(id).then(
        data => {
          console.log('good delete')
          return Promise.resolve(data);
        },
        error => {
          console.log('bad delete' , error)
          return Promise.reject(error);
        }
      );
    },
    update( {commit} ,{id , name} ) {
      commit('updated')
      console.log({id , name})
      return CatogressService.update({id , name}).then(
        data => {
          console.log('good updated')
          return Promise.resolve(data);
        },
        error => {
          console.log('bad updated' , error)
          return Promise.reject(error);
        }
      );
    },

  },
  mutations: {
    AddSuccess() {
      console.log('good')
    },
    AddFailure() {
      console.log('failer')
    },
    getSuccess() {
      console.log('get sucess')
    },
    getFailure() {
      console.log('get failuer')
    },
    delete() {
      console.log('delete')
    },
    updated() {
      console.log('updated')
    },
  
  }
};