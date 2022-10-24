<template>
   <div>
      <!-- : is equivalent to v-bind: -->
      <img :src="avatar" :alt="description">
      <Reuse />
   </div>
</template>
<script>
   import Reuse from './Reuse.vue';
   export default {
      name: 'Picture',
      components: {
         Reuse
      },
      data() {
         return {
            avatar: "/img/vega.jfif",
            description: "Vincent Vega"
         }
      }

   }
</script>