<template>
<div class="container justify-center"><br>
<b-card class="col-lg-5 mx-auto"
      header="Contact Form"
      header-tag="header" text-variant="primary">
<!-- <b-jumbotron class="text-center" text-variant="primary" lead="Contact Form"> -->
    <b-form @submit.prevent="addCustomer(model)" @reset.prevent="onReset" class="ml-5 mr-5">
    <b-row>
      <b-form-group label-cols-md="4" id="input-group-1" label="ID:" label-for="id">
        <b-form-input id="id" v-model="form.id" placeholder="Enter ID" required>
        </b-form-input>
      </b-form-group>
    </b-row><br> 
      <b-form-group id="input-group-2 fieldset-horizontal" label="Full_Name:" label-for="full_name">
        <b-form-input id="full_name input-horizontal" v-model="form.full_name" placeholder="Enter Name" required>
        </b-form-input> 
      </b-form-group>
      <b-form-group id="input-group-3" label="Subject:" label-for="subject">
        <b-form-input id="subject" v-model="form.subject" placeholder="Enter Subject" required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Email Address:" label-for="email"
        description="you'll never share your email with anyone else.">
        <b-form-input class="ml-10 p-10" id="email" v-model="form.email" type="email" placeholder="Enter Email" required></b-form-input>
      </b-form-group>
       <b-form-group id="message" label="Message:" label-for="message">
        <b-form-textarea id="textarea" v-model="form.message" placeholder="write message..." rows="5" max-rows="10">
        </b-form-textarea>
      </b-form-group>
       <!-- <label for="datepicker-placeholder">Deleted_at</label>
        <b-form-datepicker  id="deleted_at" v-model="form.deleted_at"  placeholder="Choose valid date" locale="en" required>
        </b-form-datepicker><br>  -->
      <b-form-group id="input-group-4" label="State:" label-for="state">
        <b-form-input id="state" v-model="form.state" type="text" placeholder="Enter State" required>
        </b-form-input><br>
      </b-form-group><br> 

      <b-button type="submit" variant="outline-primary" class="px-4 mx-2">Submit</b-button>
      <b-button type="reset" variant="outline-danger" class="px-4 mx-10">Reset</b-button>
    </b-form>

<!-- </b-jumbotron><br><br> -->
</b-card><br><br>

  </div>
</template>

<script>
import { mapActions} from "vuex";
  export default {
    data() {
      return {
        form: [],
      }
    },
    
  // mounted() {
  //  this.$store.dispatch("addCustomer");
  // }, 
    methods: {
       ...mapActions(["addCustomer"]),
        // onSubmit(form){
            // alert(JSON.stringify(form))
            // axios.post('https://60b15dd462ab150017ae0d94.mockapi.io/hms/api/v1/customers', this.form)
                    
                    // for(let field in this.form){
                    // this.form[field] = null;
                    // }
                  
                    // .catch((error) => {
                    //     this.error = true;
                    //     console.log(error)
                    // });
             
            // },
            onReset() {
                // this.success = false;
                // this.error = false;
                for(let field in this.form){
                    this.form[field] = null;
                }
            }
    }}
  
</script>