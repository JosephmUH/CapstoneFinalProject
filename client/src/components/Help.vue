
<template>
<!-- Creates FAQ Page -->
<div class="grid">
  <div class="grid__item large--five-sixths push--large--one-twelfth">

    <header class="section-header text-center">
      <h1>FAQ</h1>
      <hr class="hr--small">
    </header>

    <div class="grid">
      <div class="grid__item large--four-fifths push--large--one-tenth">
        <div class="rte rte--nomargin rte--indented-images">
          <h2>Purpose of Capstone Final Project</h2>
          <p><strong>Assist Client with Orders </strong> 
               "The purpose of this Web Application is to organize and assist the customer in viewing and 
               purchasing forklifts. The application allows the customer to view all available forklifts and select one to buy.
               The application also has a back end inventory section to assist the manager in organizing records and inventory."
         </p>

         <h2>How to use Capstone App</h2>
         <p>
           1.  "Depending on who is logging in, the application can be used in two different ways, as a customer or as the manager." 
                
          <p> 2. The customer can use it to view forklifts and place an order. The manager can use it to organize orders, view useful Information
            and create orders to be shipped. </p>
          <p>
           3. This app is useful for both future customers, as they can more easily view the inventory and the manager so they can 
            organize customer and location records and view patterns and trends to expand the business.
         </p>
                </div>
            </div>
        </div>
     </div>
    <br><br>
    


<br><br><br><br><br>
<h4>More Information</h4>
<div id="accordion">
  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#collapseOne">
        Mission Statement 
      </a>
    </div>
    <div id="collapseOne" class="collapse" data-parent="#accordion">
      <div class="card-body">
 "Our mission at Premier Consulting is sharing our knowledge with ingenuity, innovation and imagination."
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
  Where is your data stored?
      </a>
    </div>
    <div id="collapseTwo" class="collapse" data-parent="#accordion">
      <div class="card-body">
    It is stored in a Microsoft SQL Database. 
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
       Contact Information
      </a>
    </div>
    <div id="collapseThree" class="collapse" data-parent="#accordion">
      <div class="card-body">
       Contact Info 
       <a href="mailto:ridakhazi9@gmail.com">Email</a>
      </div>
    </div>
  </div>

    </div>
     <!-- End of Main Div -->
</div>

</template>

<script>
export default {
    data () {
        return {
        }
    }
}

</script>

<style scoped>

</style>