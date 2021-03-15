<!-- template used to host both the form and table on same page -->
<template>

<div class="container" >
 <!-- This is where the main div is  -->
   <div class="row justify-content-between" >
        <div class="col-3 border" >
            <br>
            <form @submit="handleSubmitForm">
            <h3 class="text-center">Create a New Customer</h3>
            
                <div class="form-group">
                    <label>Customer First Name</label>
                    <input class="form-control" type="text"  v-model="customer.firstName" required>
                </div>
                <div class="form-group">
                    <label>Customer Last Name</label>
                    <input class="form-control" type="text"  v-model="customer.lastName" required>
                </div>
                 <div class="form-group">
                    <label>Customer Phone</label>
                    <input class="form-control" type="text"  v-model="customer.phone" required>
                </div>
                 <div class="form-group">
                    <label>Customer Home Address</label>
                    <input class="form-control" type="text"  v-model="customer.home_address" required>
                </div>
                 <div class="form-group">
                    <label>Customer Email</label>
                    <input class="form-control" type="text"  v-model="customer.email" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Submit</button>
                </div>
                 <div class="row justify-content-center">
         <img src="../assets/tb-logo.png" height="50px" width="320px">
      </div>
            </form>
        </div>
        <!-- Each Column has a different length suitable for its data -->
        <div class="col-9">
            <h2 class="text-center">Customer Information</h2>
            <table class=" display table table-bordered"  style="width:100%">
                <thead class="thead-dark">
                    <tr class="d-flex">
                        <th class="col-2">Customer ID</th>
                        <th class="col-3">Customer First</th>
                        <th class="col-3">Customer Last</th>
                       
                        <th class="col-4">Actions</th>
                        <!--<th class="col-3">Order ID</th>-->
                    </tr>
                </thead>
                <tbody>
                    <tr class= "d-flex" v-for="customer in Customers" :key="customer.id">
                        <td class="col-2">{{ customer.id }}</td>
                        <td class="col-3">{{ customer.firstName }}</td>
                        <td class="col-3">{{ customer.lastName }}</td>
                        
                        <!--<td class="col-3">{{ application.comments }}</td>-->
                        <td class="col-4">
                            <router-link :to="{name: 'edit', params: { id: customer.id }}" class="btn btn-secondary">Modify
                            </router-link>
                            <router-link :to="{name: 'viewcustomers', params: { id: customer.id }}" class="btn btn-light">View
                            </router-link>
                            <button @click.prevent="deleteCustomer(customer.id)" class="btn btn-dark">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br><br>
            
        </div>

    </div>
    
</div>
    
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Customers: [],  
                 customer: {
                   id: '',
                   firstName: '',
                   lastName: '',
                   phone: '',
                   home_address: '',
                   email: ''
                   
                }
            }
        },
        
        created() {
            let apiURL = 'http://localhost:4000/api/customer';
            axios.get(apiURL).then(res => {
                this.Customers = res.data;
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            deleteCustomer(id){
                let apiURL = `http://localhost:4000/api/delete-customer/${id}`;
                let indexOfArrayItem = this.Customers.findIndex(i => i._id === id);
                    axios.delete(apiURL).then(() => {
                        this.$swal("Deletion Successful","Entry has been deleted", "error")
                        this.Customers.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
            },

           handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/add-customer'
                axios.post(apiURL, this.customer).then(() => {
                  this.customer = {
                    id: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    home_address: '',
                    email: ''
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