<template>
   <div>
      <!-- This elements will be displayed when the directive within v-if is true -->
      <!-- Everything in the quotes will be executed as JavaScript -->
      <div v-if="working">
         <Picture />
         <p>Here is some information about him:</p>
         <ul>
            <!-- v-for is used to render the content from an array, "v-bind:key" refferences the index of the array  -->
            <!-- v-for repeat the tag where it is inserted -->
            <li v-for="(information, index) in vincentInfo" :key="index">
               {{ information }}
            </li>
         </ul>
         <p>And some other things:</p>
         <ul>
            <li v-for="moreInfo in moreAboutVincent" :key="moreInfo.id">
               {{ moreInfo.info }}
            </li>
         </ul>
         <div>
            <button @click="showNumber">{{ buttonText }}</button>
         </div>
         <!-- v-show works similar to v-if/else, but only to render elements -->
         <p v-show="show_number">His number is {{ number }}</p>
         <!-- v-bind link an html attribute to a vueJs data -->
         <p class="test">If you want to know more about me, visit <a v-bind:href="myLink" target="_blank">this page</a></p>
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
            show_number: false,
            call: false,
            number: '555-555-5555',
            myLink: 'https://pulpfiction.fandom.com/wiki/Vincent_Vega',
            buttonText: 'Show number',
            vincentInfo: [
               'he works for Marcellus Wallace',
               'he had a brother, but he was taken down by a cop',
               'worked in Amsterdã for three years',
               'his parter\'s name is Jules Winnfield'
            ],
            moreAboutVincent: [
               {id: 1, info: 'He lives in Redondo Beach'},
               {id: 2, info: 'He owns a red 1960s era Chevrolet Malibu'},
               {id: 3, info: 'He is called "Elvis man" by Mia Wallace'},
            ],
         }
      },
      methods: {
         showNumber() {
            this.show_number = !this.show_number;
            if(!this.show_number) {
               this.buttonText = 'Show number';
            } else {
               this.buttonText = 'Hide number';
            }
         }
      }
   }
</script>

<style>
   .superior-paragraph {
      color: red;
   }
</style>