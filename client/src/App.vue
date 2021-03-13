<template>
  <div> 
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-secondary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-center">Capstone Project</a>
        <ul class="nav navbar-nav flex-row float-center " >
          <!--<li class="nav-item ">
            <router-link class="nav-link pr-3" to="/">Home</router-link>
          </li>-->
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/help">Help/FAQ</router-link>
          </li>
        <li class="nav-item">
            <router-link class="nav-link pr-3" to="/landing">Home</router-link>
          </li>
         </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
   <!-- Footer  -->
<br><br>
    <div class="footer">
      <p>
        <span>
         <strong>Capstone Final P</strong><br>
           Copyright | @PrestigeConsulting | 2021
        </span>
      </p>
    </div>
</div>

</template>

<style>

 @import './assets/styles/style.css';

footer{
    bottom: 0;
    position: fixed;
    width: 100%;
}

.footer {
    position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
    text-align:center;
}
</style>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}

</script>
