<!-- template used to host both the form and table on same page -->
<template>

<div class="container" >
 <!-- This is where the main div is  -->
   <div class="row justify-content-between">
        <div class="col-3 border">
            <br>

            <form @submit="handleSubmitForm">
            <h3 class="text-center">Enter New Job Application</h3>
            
                <div class="form-group" border>
                    <label>Application Submitted Date</label>
                    <input class="form-control" type="date" v-model="application.date" required>
                </div>

                <div class="form-group">
                    <label>Name of Company</label>
                    <input class="form-control" type="text"  v-model="application.name" required>
                </div>

                <div class="form-group">
                    <label>Current Stage</label>
                      <select class="form-control" id="FormControlSelect1" v-model="application.status" required>
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
                    <label for="FormControlTextarea1">Comments on Company</label>
                    <textarea v-model="application.comments" required class="form-control" 
                    id="Textarea" rows="3"  maxlength="75" placeholder="(max 75 characters)"></textarea>
                    <span class="pull-right label label-default" id="count_message"></span>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
        <!-- Each Column has a different length suitable for its data -->
        <div class="col-9">
            <h2 class="text-center">Active Interviews</h2>
            <table class=" display table table-bordered"  style="width:100%">
                <thead class="thead-dark">
                    <tr class="d-flex">
                        <th class="col-2">Date</th>
                        <th class="col-4">Name</th>
                        <th class="col-2">Status</th>
                        <th class="col-5">Comments</th>
                        <th class="col-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class= "d-flex" v-for="application in Applications" :key="application._id">
                        <td class="col-2">{{ application.date }}</td>
                        <td class="col-4">{{ application.name }}</td>
                        <td class="col-2">{{ application.status }}</td>
                        <td class="col-5">{{ application.comments }}</td>
                        <td class="col-3">
                            <router-link :to="{name: 'edit', params: { id: application._id }}" class="btn btn-success btn-sm">Modify
                            </router-link>
                            <button @click.prevent="deleteStudent(application._id)" class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
    
</div>
    
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Applications: [],  
                 application: {
                   date: '',
                   name: '',
                   status: '',
                   comments: ''
                }
            }
        },
        
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Applications = res.data;
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:4000/api/delete-application/${id}`;
                let indexOfArrayItem = this.Applications.findIndex(i => i._id === id);
                    axios.delete(apiURL).then(() => {
                        this.$swal("Deletion Successful","Entry has been deleted", "error")
                        this.Applications.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
            },

           handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-application'
                axios.post(apiURL, this.application).then(() => {
                  this.application = {
                    date: '',
                    name: '',
                    status: '',
                    comments: ''
                  }
                }).catch(error => {
                    console.log(error)
                })
            },         
        },
    }

    

</script>


<style>
    .btn-success {
        margin-right: 10px;
    }
    textarea {
    resize: none;
    }
table {
    table-layout: fixed;
    word-wrap: break-word;
}

</style>