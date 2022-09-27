// Vue object that will be mounted to the DOM
const MyNameApp = {
   // data() return an object with the data that will be used in the app
   data() {
      return{
         name: "Johnny Joestar",
         idade: 19,
      }
   }
}
// createApp is a function that will create a Vue app, in this case MyNameApp object
Vue.createApp(MyNameApp).mount('#app') // #app is the id of the div in the html file