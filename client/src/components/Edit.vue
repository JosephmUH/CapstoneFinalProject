<template>
    <div class="row justify-content-center">
        <div class="col-5">
            <h3 class="text-center">Update Application</h3>
            <!-- Form handles edit submission to the interview table -->
            <form @submit.prevent="handleUpdateForm">
                 <div class="form-group">
                    <label>Name of Company</label>
                    <input class="form-control" v-model="application.name" required>
                </div>

                <div class="form-group">
                    <label>Current Status</label>
                      <select class="form-control" id="exampleFormControlSelect1" v-model="application.status" required>
                        <option value="" disabled>---Select Stage---</option>
                        <option>Intial Submission</option>
                        <option>Phone Interview</option>
                        <option>Online Interview</option>
                        <option>In-Person Interview</option>
                        <option>Drug Test</option>
                        <option>Waiting on Company</option>
                        <option>No Longer Interested</option>
                        <option>Reviewing Company Offer</option>
                        <option>Accepted Company Offer</option>
                        <option>Denied Company Offer</option>
                       </select>
                </div>
                     <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comments</label>
                    <textarea v-model="application.comments" required class="form-control" id="FormControlTextarea1" rows="2"></textarea>
                 <br>
                 <div class="form-group">
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
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
            application: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-application/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.application = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-application/${this.$route.params.id}`;
            axios.post(apiURL, this.application).then((res) => {
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
