<template>
   <div>
      <!-- Vue components can only have one root element-->
      <h1>Hello VUE!!</h1>
      <p>My name is {{ name }}, I'm a {{ profession }}</p> <!-- {{}} "execute" vue code -->
      <MultipleEvents />
   </div>
</template>

<script>
   // Imported component that will be used in the template
   import MultipleEvents from './MultipleEvents.vue'
   export default {
      // Exported object
      name: 'FirstComponent',
      components: {
         MultipleEvents
      },
      // Data to be used in the component
      data() {
         return {
            name: "Diego B.",
            profession: "Jockey",
         }
      }
   }
</script>