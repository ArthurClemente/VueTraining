<template>
   <div>
      <hr />
      <h2>My Form:</h2>
      <form action="" @submit="submitForm">
         <div>
            <!-- v-model corresponds to the variables stored in data -->
            <input type="text" v-model="name">
         </div>
         <div>
            <input type="text" v-model="email">
         </div>
         <div>
            <Submit />
         </div>
      </form>
   </div>
</template>

<script>
import InputText from './InputText.vue'
import Submit from './Submit.vue'
   export default {
      name: 'Form',
      components: {
         InputText,
         Submit
      },
      data() {
         return {
            name: "",
            email: ""
         }
      },
      methods: {
         submitForm(e) {

            e.preventDefault();

            const name = this.name;
            const email = this.email;

            console.log('form submitted');
            console.log('The name is: ' + name);
            console.log('The email is: ' + email);
         }
      }
   }
</script>