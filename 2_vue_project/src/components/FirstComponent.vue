<template>
   <div>
      <!-- Vue components can only have one root element-->
      <!-- Each component used is independent -->
      <Reuse />
      <h1>Hello VUE!!</h1>
      <Reuse />
      <Reuse />
      <Reuse />
      <p>My name is {{ name }}, I'm a {{ profession }}</p> <!-- {{}} "execute" vue code -->
      <MultipleEvents />
      <Reuse />
      <Reuse />
      <Reuse />
      <Reuse />
      <Reuse />
   </div>
</template>

<script>
   // Imported component that will be used in the template
   import MultipleEvents from './MultipleEvents.vue';
   import Reuse from './Reuse.vue';
   export default {
      // Exported object
      name: 'FirstComponent',
      components: {
         MultipleEvents,
         Reuse
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