<!-- template used to host both the form and table on same page -->
<template>

<div class="container" >
 <!-- This is where the main div is  -->
   <div class="row justify-content-between">
        <div class="col-3 border">
            <br>

            <form @submit="handleSubmitForm">
            <h3 class="text-center">Place a New Order</h3>
            
                <div class="form-group" border>
                    <label>Customer Birthdate</label>
                    <input class="form-control" type="date" v-model="application.date" required>
                </div>

                <div class="form-group">
                    <label>Customer Name</label>
                    <input class="form-control" type="text"  v-model="application.name" required>
                </div>
                <div class="form-group">
                    <label>Customer Address</label>
                    <input class="form-control" type="text"  v-model="application.name" required>
                </div>

                <div class="form-group">
                    <label> Choose ForkLift</label>
                      <select class="form-control" id="FormControlSelect1" v-model="application.status" required>
                        <option value="" disabled>---Select Model---</option>
                        <option>Warehouse Forklift.</option>
                        <option>Side Loader</option>
                        <option>Counterbalance Forklift</option>
                        <option>Telehandler</option>
                        <option>Industrial Forklift</option>
                        <option>Rough Terrain Forklift</option>
                        <option>Pallet Jack</option>
                        <option>Walkie Stacker</option>
                        <option>Reach Fork Truck</option>
                        <option>Electric Lift Truck</option>
                       </select>
                </div>
                     <div class="form-group">
                    <label for="FormControlTextarea1">Order Invoice Details</label>
                    <textarea v-model="application.comments" required class="form-control" 
                    id="Textarea" rows="3"  maxlength="75" placeholder="(max 75 characters)"></textarea>
                    <span class="pull-right label label-default" id="count_message"></span>
                </div>

                <div class="form-group">
                    <button class="orderbutton">Place Order</button>
                </div>
            </form>
        </div>
        <!-- Each Column has a different length suitable for its data -->
        <div class="col-9">
            <h2 class="text-center">Customer Order Logs</h2>
            <table class=" display table table-bordered"  style="width:75%">
                <thead class="thead-dark">
                    <tr class="d-flex">
                        <th class="col-2">Name</th>
                        <th class="col-4">Date</th>
                        <th class="col-2">Forklift</th>
                        <th class="col-5">Price</th>
                        <th class="col-3">Order ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class= "d-flex" v-for="application in Applications" :key="application._id">
                        <td class="col-2">{{ application.firstName }}</td>
                        <td class="col-3">{{ application.lastName }}</td>
                        <td class="col-2">{{ application.status }}</td>
                        <td class="col-3">{{ application.comments }}</td>
                        <td class="col-3">
                            <router-link :to="{name: 'edit', params: { id: application._id }}" class="btn btn-success btn-sm">Modify
                            </router-link>
                            <button @click.prevent="deleteStudent(application._id)" class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class = "buttontable">
              <table>
                <tr>
              <td><button class="sortbutton">Sort</button></td>
                <td><router-link class="customerbutton pr-3" to="/allcustomers">View All Customers</router-link></td>
                </tr>
                </table>
            </div>
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
                   firstName: '',
                   lastName: '',
                   status: '',
                   comments: ''
                }
            }
        },
        
        created() {
            let apiURL = 'http://localhost:4000/api/customer';
            axios.get(apiURL).then(res => {
                this.Applications = res.data;
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:4000/api/delete-customer/${id}`;
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
.orderbutton{
  background-color: lightslategray; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
}
.sortbutton{
  background-color: lightslategray; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
}
.customerbutton{
  background-color: lightslategray; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
}
body {
  width: 100%;
  height: 100vh;
  margin: 0px;
  
  background-size: auto;
   background-image: url("https://wallpaperaccess.com/full/3514948.png");
}
.buttontable{
  align-items: center;
  margin-top:100px;
  margin: 0 auto;
  width: 656px;
 text-align: center;
  
}


</style>