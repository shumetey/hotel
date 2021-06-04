<template>
   <div id="navbar">
            <div>
                <b-navbar toggleable="lg" type="dark" variant="info">
                    <b-navbar-brand href="#">NavBar</b-navbar-brand>

                    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                    <b-collapse is-nav id="nav_collapse">
                        <b-navbar-nav>
                            <b-nav-item href="#">Link</b-nav-item>
                            <b-nav-item href="#" disabled>Disabled</b-nav-item>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-form>
                                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
                                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                            </b-nav-form>

                            <b-nav-item-dropdown text="Lang" right>
                                <b-dropdown-item href="#">EN</b-dropdown-item> 
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>

                            <b-nav-item-dropdown right>
                                <!-- Using button-content slot -->
                                <template slot="button-content"><em>User</em></template>
                                <b-dropdown-item href="#">Profile</b-dropdown-item>
                                <b-dropdown-item href="#">Signout</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>


  <div class="todo-list">
    <!-- start of to-do form -->
    <b-form class="row" >
      <b-col cols="10">
        <b-form-input
          id="item"
          name="item"
          class="w-100"
          placeholder="What do you want to buy?"
        ></b-form-input>
      </b-col>
      <b-col cols="2">
        <b-button type="submit" variant="primary">Add Item</b-button>
      </b-col>
    </b-form>
    <!-- end of to-do form -->
    <!-- start of to-do list -->
    <b-row>
      <b-col md="10">
        <b-list-group>
          <b-list-group-item v-for="(item, index) in items" :key="index" :item="item">
            {{ item.name }}
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <!-- end of to-do list -->
  </div>
   </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'TodoList',
  computed: {
    ...mapState([
      'items'
    ])
  },
};
</script>
<style>
form {
  margin-bottom: 25px;
}
.list-group-item {
  display: flex;
}
.list-group-item:hover{
  background-color: aliceblue;
}
.checked {
  font-style: italic;
  text-decoration: line-through !important;
  color: gray;
  background-color: #eeeeee;
}
</style>





import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        name: "Milk",
        done: false
      },
      {
        name: "Bread",
        done: true
      },
      {
        name: "Cake",
        done: false
      }
    ]
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item)
    },
    editItem(state, { item, name = item.name, done = item.done }) {
      item.name = name;
      item.done = done;
    },
    removeItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1);
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", {
        name: item,
        done: false
      })
    },
    editItem({ commit }, { item, name }) {
      commit("editItem", { item, name });
    },
    toggleItem({ commit }, item) {
      commit("editItem", { item, done: !item.done });
    },
  }
});
// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });



