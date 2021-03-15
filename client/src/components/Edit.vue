<template>
    <div class="row justify-content-center">
        <div class="col-5">
            <h3 class="text-center">Update Customer</h3>
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
                     <div class="form-group">
                    <label>ID</label>
                    <input class="form-control" v-model="customer.id" required>
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
                 customer: { },  
                 
            }
        },
    created() {
        let apiURL = `http://localhost:4000/api/edit-customer/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.customer = res.data[0];
        }).catch(error => {
                console.log(error)
            })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-customer/${this.$route.params.id}`;
            axios.post(apiURL, this.customer).then((res) => {
                this.$swal("Update Successful","Entry has been updated", "success")
                console.log(res)
                this.$router.push('/orders')
            }).catch(error => {
                console.log(error)
            })
        },
    }
}

</script>
