<template>
  <div>
    <h1 class="bg-gray-600 my-10 text-xl text-center text-white p-2">cards</h1>
   <h2 class="p-2 bg-blue-500 text-white text-xl text-center uppercase mb-2">card one</h2>
   <div class="flex justify-center items-center flex-col lg:flex-row gap-4">
    <cardOne :name="'product 1'" :price="50"> </cardOne>
    <cardOne  :name="'product 2'" :price="10"> </cardOne>
    <cardOne  :name="'product 3'" :price="40"> </cardOne>
  </div>
   <h2 class="p-2 bg-blue-500 text-white text-xl text-center uppercase mb-2">card tow</h2>
   <div class="flex justify-center items-center flex-col lg:flex-row gap-4">
    <cardTow> </cardTow>

  </div>
  </div>
</template>

<script>
import cardOne from "@/components/projects/project2/cardOne.vue";
import cardTow from "@/components/projects/project2/cardTow.vue";
export default {
  setup() {},
  components: {
    cardOne, 
    cardTow
  },
};
</script>
