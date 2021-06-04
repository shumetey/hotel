<template>
  <div class="container-fluid mt-1">
    <h4 class=" ml-16" style="color:red;">Crud Operations</h4>
    <b-row>
      <b-col>
        <table class="table table-striped table-borderd table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.Name }}</td>
              <td>{{ post.Email }}</td>
              <td>{{ post.Age}}</td>
              <td class="text-right">
                <b-button @click.prevent="populatePostToEdit(post)" variant="primary" size="sm">Edit</b-button> 
                <b-button @click.prevent="deletePost(post.id)" variant="danger" size="sm">Delete</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.id ? 'Edit Post ID#' + model.id : 'New Post')">
          <form @submit.prevent="savePost">
            <b-form-group label="ID">
              <b-form-input type="text" v-model="model.id"></b-form-input>
            </b-form-group>
            <b-form-group label="Name">
              <b-form-input type="text" v-model="model.Name"></b-form-input>
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input type="text" v-model="model.Email"></b-form-input>
            </b-form-group>
            <b-form-group label="Age">
              <b-form-input type="text" v-model="model.Age"></b-form-input>
            </b-form-group><br>
            <div>
              <b-btn type="submit" variant="success">Save</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row> 
  </div>
</template>

<script>
import axios from "axios";
// import api from '../api.js'
export default {
  data () {
    return {
      posts: [],
      model: {}
    }
  },
  created () {
    this.refreshPosts()
  },
  methods: {
    refreshPosts () {
          axios.get("https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users")
      .then(response => {
        this.posts = response.data;
      })
      // this.posts = api.getPosts('https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users')
    },
    populatePostToEdit (post) {
      this.model = Object.assign({}, post) 
      this.post = Object.assign({}, post) 
    },
    savePost () {
      if (this.model.id === this.post.id) {
        // updatePost(this.model.id, this.model)
          axios.put(`https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users/${this.model.id}`,this.model)
      } else {
        alert(this.model.id)
        // alert(this.post.id)
        // createPost(this.model)
          axios.post(`https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users`,this.model)
      }
      this.model = {} // reset form
         this.refreshPosts()
    },
    deletePost (id) {
      
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        axios.delete(`https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users/${id}`)
        //  api.deletePost(id)
         this.refreshPosts()
      }
    }
  }
}
</script>
