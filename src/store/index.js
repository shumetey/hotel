import axios from 'axios'
import Vuex, { Store } from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // model:{},
        posts: []
    },
    getters: {
    allPosts: (state) => {
        return state.posts
    }
    },
    actions: {
        getPosts({ commit }) {
            axios.get('https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/customers')
                .then(response => {
                commit('SET_POSTS', response.data)
            })
        },
        addCustomer({commit}, model) {
            alert(JSON.stringify(model))
            axios.post('https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/customers', model)
              .then((res) => {
                  const mod = res.data;
                commit('ADD_Customer', mod);
                // this.getPosts;
                // Store.dispatch('getPosts');       
              })
            
            },
            editCustomers({commit},model){
                // alert("edited")
                axios.put(`https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/customers/${model.id}`,model)
                .then((res) => {  
                    const edited = res.data;  
                          
                    commit('Edit_Customer', edited)
                    this.getPosts;
                    // Store.dispatch('getPosts');
                })
            },
        deleteCustomers({commit},id){
            if (confirm('Are you sure you want to delete this post?')) {
            axios.delete('https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/customers/' + id)
            .then(() => {              
                commit('Delete_Customer', id)
                this.getPosts;
                // Store.dispatch('getPosts');
            })
        }
    }
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        ADD_Customer(state, model) {
            state.posts = state.posts.push(model);
          },
        Edit_Customer(state, model) {
            const index = state.posts.findIndex(post=> post.id === model.id)
            if(index > -1){
                state.posts.splice(index,1,model)
            }
          },
        Delete_Customer(state, id){
          const  index = state.posts.findIndex(post => post.id === id)
            state.posts.splice(index, 1)
           }
    }

}); 

