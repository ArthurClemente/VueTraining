<template>
   <div>
      <h2>This is my friend: {{ personName }}</h2>
      <Info :number="number" :working=true />
      <Form />
   </div>
</template>

<script>
import Info from './Info.vue'
import Form from './form/Form.vue'
import { StringDecoder } from 'string_decoder';
   export default {
      components: {
         Info,
         Form
      },
      name: 'Person',
      data(){
         return {
            personName: 'Vincent Vega',
            number: '555-555-5555'
         }
      }
   }
</script>