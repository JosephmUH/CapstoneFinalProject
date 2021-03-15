<template>
    <div id = "index" class = "myindex">
        <h1>Order Reports</h1> <!-- to view a kitten in detail-->

        <table class="table table-light display table table-bordered">
            <thead>
            <tr>
               
                <td>Customer First Name</td>
                <td>Customer Last Name</td>
                <td>Customer Id</td>
                
                
            </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{{ customer.firstName }}</td>
                    <td>{{ customer.lastName }}</td>
                    <td>{{ customer.id }}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

    export default {
         name: 'index',
        data(){
            return{
                
                customer:{},
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
             getoneItem()
            {
             let uri = 'http://localhost:4000/edit-customer/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.viewItems = response.data;
                });
            },
        }
    }
</script>
<style>
   .myindex{
       background-color:white;
   } 
   h1{
       color: lightslategray;
       text-align: center;
   }
   .editbutton{
        background-color: lightseagreen; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
   }
   .deletebutton
   {
        background-color: black; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
   }
</style>