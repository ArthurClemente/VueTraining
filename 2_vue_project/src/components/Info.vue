<template>
   <div>
      <!-- This elements will be displayed when the directive within v-if is true -->
      <!-- Everything in the quotes will be executed as JavaScript -->
      <div v-if="working">
         <Picture />
         <p>he works for Marcellus Wallace</p>
         <ul>
            <li>he had a brother, but he was taken down by a cop</li>
            <li>worked in Amsterdã for three years</li>
            <li>his parter's name is Jules Winnfield</li>
         </ul>
         <!-- v-show works similar to v-if/else, but only to render elements -->
         <p v-show="call">His number is {{ number }}</p>
         <!-- v-bind link an html attribute to a vueJs data -->
         <p>If you want to know more about me, visit <a v-bind:href="myLink" target="_blank">this page</a></p>
      </div>
      <!-- Otherwise this will be displayed -->
      <p v-else>he's dead</p>
   </div>

</template>

<script>
import Picture from './Picture.vue';

   export default{
      name: 'Info',
      components: {
         Picture
      },
      data() {
         return {
            working: true,
            call: false,
            number: '555-555-5555',
            myLink: 'https://pulpfiction.fandom.com/wiki/Vincent_Vega'
         }
      }
   }
</script>