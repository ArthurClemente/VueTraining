<template>
   <div>
      <h2>This is my friend: {{ personName }}</h2>
      <Info />
      <Form />
   </div>
</template>

<script>
import Info from './Info.vue'
import Form from './form/Form.vue'
   export default {
      components: {
         Info,
         Form
      },
      name: 'Person',
      data(){
         return {
            personName: 'Vincent Vega',
         }
      }
   }
</script>