<template>
    <div class="row justify-content-center">
        <div class="col-5">
            <h3 class="text-center">Update Application</h3>
            <!-- Form handles edit submission to the interview table -->
            <form @submit.prevent="handleUpdateForm" >
               
                <div class="form-group">
                    <label>Customer First Name</label>
                    <input class="form-control" v-model="customer.firstName" required>
                </div>
                <div class="form-group">
                    <label>Customer Last Name</label>
                    <input class="form-control" v-model="customer.lastName" required>
                </div>
                 <br>
                 <div class="form-group">
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
            return {  
                 customer: { }
            }
        },
    created() {
        let apiURL = `http://localhost:4000/api/edit-customer/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.customer = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-customer/${this.$route.params.id}`;
            axios.post(apiURL, this.customer).then((res) => {
                 this.$swal({
                  icon: 'success',
                  title:"Success",
                  text: "Your application has been updated!",
                  type: "success",
                  timer: 3000,
                  buttons: false,
                  })
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        },
    }
}

</script>
