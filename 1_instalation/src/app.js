// Vue object that will be mounted to the DOM
const MyNameApp = {
   // data() return an object with the data that will be used in the app
   data() {
      return{
         name: "",
         age: 19,
         input_name: "",
      }
   },
   methods: {
      submitForm(e) {
         // Prevent the form from submitting
         e.preventDefault();

         // The name is seted with the submit event
         this.name = this.input_name;
      }
   }
}
// createApp is a function that will create a Vue app, in this case MyNameApp object
Vue.createApp(MyNameApp).mount('#app') // #app is the id of the div in the html file