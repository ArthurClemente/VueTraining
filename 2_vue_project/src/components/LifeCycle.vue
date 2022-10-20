<template>
   <h1>Hi, my name is: {{ myName }}</h1>
</template>
<script>
   export default {
      // Exported component
      name: 'LifeCycle',
      // Data to be used in the component
      data() {
         return {
            myName: 'Some Name',
         }
      },
      // Lifecycle hooks
      created() { // Called when the component is created
         setTimeout(() => {
            this.myName = 'Johnny Joestar'
         }, 1000);
         this.lifeCycle();
      },
      mounted() { // Called when the component is mounted
         setTimeout(() => {
            this.myName = 'Alucard'
         }, 2000)
      },
      methods: {
         lifeCycle() {
            console.log('Life Cycle');
         }
      }
   }
</script>