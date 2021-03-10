<template>
<body>
   <!-- simple questions and their answers-->
     <head>
         <title>Welcome to Our Capstone Final Project</title>
	</head>
    <div class="center">
    <div>
        <h1 >Welcome to TB Forklifts</h1>
        <p >In this application, we are trying to build a simple CRM for management purposes. Thank you.</p>
        <p><router-link class="btn btn-secondary" to="/orders">Place Order</router-link></p>
   </div>
</div>
</body>

</template>

<script>
export default {
  components: {
      
  },
  data() {
      return {
         
      }
  },
  methods: {
      
    }
}
</script>
<style>
h1{
text-align:center;
}
p{
    text-align:center;
}
.about{
    text-align:center;
}
h3{
    text-align:center;
}

   body {
  width: 100%;
  height: 100vh;
  margin: 0px;
  
  background-size: auto;
   background-image: url("https://wallpaperaccess.com/full/3514948.png");
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
}
</style>