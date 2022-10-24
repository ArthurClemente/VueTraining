<template>
   <div>
      <button @click="active">Click Here!</button>
      <span v-show="activated">Activated!!</span>
   </div>
</template>
<script>
   export default {
      name: "Reuse",
      data() {
         return {
            activated: false
         }
      },
      methods: {
         active() {
            this.activated = !this.activated;
         }
      }
   }
</script>
<style>

</style>