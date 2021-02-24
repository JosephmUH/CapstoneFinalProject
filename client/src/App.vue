<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-secondary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-center">Capstone Skeleton</a>
        <ul class="nav navbar-nav flex-row float-center">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/help">Help/FAQ</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view>
      </router-view>
    </div>
   <!-- Footer  -->
<br><br>
    <div class="footer">
      <p>
        <span>

          <strong>Joseph Mercado - Final Project</strong><br>
           Copyright @JosephMercado, 2020
        </span>
      </p>
    </div>
</div>

</template>

<style>

footer{
    bottom: 0;
    position: fixed;
    width: 100%;
}

.footer {
    height: 100px;
    margin: auto;
    width: 500px;
    text-align:center;
    padding:10px;
    color:black;
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
