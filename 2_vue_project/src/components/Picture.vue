<template>
   <!-- : is equivalent to v-bind: -->
   <img :src="avatar" :alt="description">
</template>
<script>
   export default {
      name: 'Picture',
      data() {
         return {
            avatar: "/img/vega.jfif",
            description: "Vincent Vega"
         }
      }

   }
</script>