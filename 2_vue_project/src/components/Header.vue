<template>
   <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Life</a></li>
      <li><a href="#">Death</a></li>
   </ul>
</template>
<script>
   export default {
      name: 'Header'
   }
</script>

// With the 'scoped' tag, the style will only be applied to the component.
<style scoped>
   ul {
      list-style: none;
      display: flex;
      background-color: #111;
   }

   li {
      margin-right: 10px;
   }

   a {
      color: #DDD;
      text-decoration: none;
      transition: .5s;
   }

   a:hover {
      color: turquoise;
   }
</style>