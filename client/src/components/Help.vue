
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
          <h2>Purpose of the Interview Tracking Single Page Application</h2>
          <p><strong>Assist Students Post Graduation </strong> 
          The purpose is to assist students in tracking their interview applications after graduation. 
          With the ability to enter multiple applications and other comments about their potential employers, this will assist students during their job hunting process.
         </p>

         <h2>How to use the Interview Tracking App</h2>
         <p>
           1. Use the "Enter New Job Application" form to submit the following information: Application Submitted Date
           | Name of Company | Current Stage | Comments on Company
          <p> 2. After selecting submit, you will then be able to see your result on the table to your right. </p>
          <p>
           3.  You can use the "Modify" button to modify the status of any exisiting submission. You can also use the "Delete"
           button to get rid of any old or out-of-date applications.
         </p>
                </div>
            </div>
        </div>
     </div>
    <br><br>
    <h2 class="text-center">Meet the Creator</h2>
    <p class="text-center font-italic">Click the image below to be directed to my LinkedIn Profile</p>
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
        PRIVACY STATEMENT
        ------
        WHAT DO WE DO WITH YOUR INFORMATION?
        We will never supply any of your information to a third party.
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
      Data is stored on your locally hosted Mongo Database.
      A database called "applicationTracker" is created. After a collection called, "applications" will be created to 
      to store the data from your interview submissions.
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
        If you have any other questions, comments, or concerns, you can reach out via Linkedin or 
       <a href="mailto:  jmercad4@CougarNet.UH.EDU">Email.</a>
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