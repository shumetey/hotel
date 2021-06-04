<template>
  <div class="container-fluid mt-1">
    <h4 class="ml-16" style="color: red; margin-left: 20%">Customer Lists</h4>
    <b-row>
      <b-col>
        <table class="table table-striped table-borderd table-hover">
          <thead>
            <tr style="color: blue">
              <th>ID</th>
              <th>Full_Name</th>
              <th>Subject</th>
              <th>Email</th>
              <th>Message</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in allPosts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.full_name }}</td>
              <td>{{ post.subject }}</td>
              <td>{{ post.email }}</td>
              <td>{{ post.message }}</td>
              <td>{{ post.state }}</td>
              <td class="text-right">
                <b-button
                  @click.prevent="editCustomer(post)"
                  variant="primary"
                  size="sm"
                  ><b-icon icon="pencil"></b-icon
                ></b-button>
                <b-button
                  @click.prevent="deleteCustomers(post.id)"
                  variant="danger"
                  size="sm"
                  ><b-icon icon="trash"></b-icon
                ></b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card
          :title="edit ? 'Edit ID#' + model.id : 'New Post'"
          text-variant="primary"
        >
          <b-form @submit.prevent="addCustomer(model)"  @reset.prevent="editCustomers(model)" >
            <b-form-group label="Name">
              <b-form-input
                type="text"
                v-model="model.full_name"
              required></b-form-input>
            </b-form-group>
            <b-form-group label="subject">
              <b-form-input type="text" v-model="model.subject" required></b-form-input>
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input type="text" v-model="model.email" required></b-form-input>
            </b-form-group>
            <b-form-group label="message">
              <b-form-input
                type="text"
                v-model="model.message"
              required></b-form-input> </b-form-group
            ><br />
            <b-form-group label="state">
              <b-form-input
                type="text"
                v-model="model.state"
              required></b-form-input> </b-form-group
            ><br />
            <div>
              <span v-if="edit"> <b-btn type="reset" @click="edit()" variant="primary" style="margin-left: 30%"
                >Save Change</b-btn
              ></span>
            <b-btn v-else type="submit" variant="primary" style="margin-left: 30%"
                >Save</b-btn>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      model: {},
      edit: false,
    };
  },
  computed: mapGetters(["allPosts"]),
  methods: {
    editCustomer(post) {
      this.edit = true;
      this.model = post;
    },
    ...mapActions(["getPosts", "deleteCustomers", "addCustomer", "editCustomers"]),
  },
  created() {
    this.getPosts();
  },
  // computed: {
  //   posts() {
  //     return this.$store.getters.allPosts;
  //   }
  // },

  // computed: {
  //   posts() {
  //     return this.$store.state.posts
  //   }
  // },
  // mounted() {
 //   this.$store.dispatch("getPosts");
  // }, 






  // created () {
  //   this.refreshPosts()
  // },
  // methods: {
  //   refreshPosts () {
  //         axios.get("https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users")
  //     .then(response => {
  //       this.posts = response.data;
  //     })
  //     // this.posts = api.getPosts('https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users')
  //   },
  //   populatePostToEdit (post) {
  //     this.model = Object.assign({}, post)
  //     this.post = Object.assign({}, post)
  //   },
  //   savePost () {
  //     if (this.model.id === this.post.id) {
  //       // updatePost(this.model.id, this.model)
  //         axios.put(`https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users/${this.model.id}`,this.model)
  //     } else {
  //       alert(this.model.id)
  //       // alert(this.post.id)
  //       // createPost(this.model)
  //         axios.post(`https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users`,this.model)
  //     }
  //     this.model = {} // reset form
  //        this.refreshPosts()
  //   },
  //   deletePost (id) {
  //     if (confirm('Are you sure you want to delete this post?')) {
  //       // if we are editing a post we deleted, remove it from the form
  //       if (this.model.id === id) {
  //         this.model = {}
  //       }
  //       axios.delete(`https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/users/${id}`)
  //       //  api.deletePost(id)
  //        this.refreshPosts()
  //     }
  //   }
  // }
};
</script>



