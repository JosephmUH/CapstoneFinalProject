<template>
<body>
   <!-- simple questions and their answers-->
     <head>
         <title>Welcome to the Customer Page</title>
	</head>
    <div class="center">
    <div>
        <h1 >Welcome to Customer Page</h1>
       
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
.viewbutton
   {
        background-color: lightslategray; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
   }
</style>