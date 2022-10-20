<template>
   <div>
      <Header />
      <p class="superior-paragraph">{{ msg }}</p>
      <FirstComponent />
      <LifeCycle />
      <Person />
   </div>
</template>

<script>
import Header from './components/Header.vue'
import FirstComponent from './components/FirstComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import Person from './components/Person.vue'

export default {
   name: 'App', // Component name
   components: { // Imported components to be used in the template
      Header,
      FirstComponent,
      LifeCycle,
      Person,
   },
   data() { // Data to be used in the component
      return {
         msg: 'This is the App component data return',
      }
   },

}
</script>

<style>
   body{
      background-color: #333;
      color: #fff;
   }

   a {
      color: red;
   }

   .test {
      background-color: blue;
   }
</style>