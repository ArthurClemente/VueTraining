<template>
  <div>
    <p>{{ msg }}</p>
    <FirstComponent />
  </div>
</template>

<script>
  import FirstComponent from './components/FirstComponent.vue'

  export default {
    name: 'App', // Component name
    components: { // Imported components to be used in the template
      FirstComponent
    },
    data() { // Data to be used in the component
      return {
        msg: 'This is the App component data return',
      }
    }
  }
</script>