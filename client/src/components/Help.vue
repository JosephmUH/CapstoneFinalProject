
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
          <p><strong>Assist Client with orders </strong> 
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>

         <h2>How to use Capstone App</h2>
         <p>
           1.  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <p> 2. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          <p>
           3. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
                </div>
            </div>
        </div>
     </div>
    <br><br>
    <h2 class="text-center">Title</h2>
    <p class="text-center font-italic">Make this a link to something</p>
         <div class="row justify-content-center">
           <a href="https://www.linkedin.com/in/j380975ab/">
         <img src="../assets/selfie.png" height="420px" width="360px">
           </a> 
      </div>


<br><br><br><br><br>
<h4>More Information</h4>
<div id="accordion">
  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#collapseOne">
        Privacy Policy 
      </a>
    </div>
    <div id="collapseOne" class="collapse" data-parent="#accordion">
      <div class="card-body">
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. 
  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    incididunt ut labore et dolore magna aliqua. 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
       Contact info 
       <a href="mailto:  testing@gmail.com">Email.</a>
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