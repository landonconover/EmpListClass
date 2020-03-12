import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ //eslint-disable-line no-unused-vars
  state: {
      employees: [],
      tasks: [
          
      ]
  },
  getters: {
      
  },

  //all code in mutations must be synchronous
  mutations: {
    /* User Mutations */
    addEmployee: (store, employee) => {
        store.employees.push(employee); // Add the employee to the store
    },
    removeEmployee: (store, employeeName) => {
        store.employees = store.employees.filter(function(employee){
            return employee.name != employeeName
        })
    }
  },

  //actions can be async action.commit('mutation')
  actions: {
        /* User Actions */
        addEmployee({ commit }, employee) {
            try {

                commit('addEmployee', employee);
            } catch(e) {
                console.log(e);
            }
        },
        removeEmployee({ commit }, employeeName) {
            commit('removeEmployee', employeeName);
        }
        
  }
})