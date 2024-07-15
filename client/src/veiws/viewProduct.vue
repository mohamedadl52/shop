<template>
    <div>
    <div class="flex justify-center mt-10">
      <div class=" w-64   relative">
     <img :src="'/src/assets/uploads/'+ productImg" class="w-full h-48" alt="">
     <div class="w-full  bgwork2 flex justify-center  items-center h-48 absolute top-0 left-0 " >  
       <div class="absolute  iconspage top-1/2 left-1/3">
       <a href="#jbdv">
         <font-awesome-icon
                   class="
                     text-white
                     bg-maincolor
                     p-2
                     rounded-full
                     hover:text-gray-600
                     transition-all
                     duration-500
                     text-xl
                     mx-2
                     cursor-pointer
                   "
                   :icon="['fas', 'cart-plus']"
                 />
       </a>
                 <font-awesome-icon
                   class="
                   text-white
                     bg-maincolor
                     p-2
                     rounded-full
                     hover:text-red-600
                     transition-all
                     duration-500
                     text-xl
                     mx-2
                     cursor-pointer
                   "
                   :icon="['fas', 'heart']"
                 />
     </div>
     </div>
      <div class="px-2 py-1">
       <div class="flex justify-between mt-2">
         
       <p   class="text-xl font-bold text-seconcolor ">{{ product.title }}</p>
       <font-awesome-icon
                   class="
                   text-white
                     bg-maincolor
                     p-2
                     rounded-full
                     hover:text-red-600
                     transition-all
                     duration-500
                     text-xl
                     mx-2
                     cursor-pointer
                   "
                   :icon="['fas', 'heart']"
                 />
       </div>
       <p><span class="text-maincolor text-lg font-bold">${{product.price}} </span><i class="text line-through ml-4">$500</i></p>
        <p> 
         <font-awesome-icon
                   class="
                     text-yellow-500
                     rounded-full
                     transition-all
                     duration-500
                     text-xl
                     cursor-pointer
                   "
                   :icon="['fas', 'star']"
                 /> 
               
                 <font-awesome-icon
                   class="
                     text-yellow-500
                     rounded-full
                     transition-all
                     duration-500
                     text-xl
                     cursor-pointer
                   "
                   :icon="['fas', 'star']"
                 />
                 <font-awesome-icon
                   class="
                     text-yellow-500
                     rounded-full
                     transition-all
                     duration-500
                     text-xl
                     cursor-pointer
                   "
                   :icon="['fas', 'star']"
                 />
                 <font-awesome-icon
                   class="
                     text-yellow-500
                     rounded-full
                     transition-all
                     duration-500
                     text-xl
                     cursor-pointer
                   "
                   :icon="['fas', 'star']"
                 />
                 <font-awesome-icon
                   class="
                     text-yellow-500
                     rounded-full
                     transition-all
                     duration-500
                     text-xl
                     cursor-pointer
                   "
                   :icon="['fas', 'star']"
                 />
               
           <span class="text-lg ml-2 text-seconcolor ">(150)</span>
              
         </p> 
               <p class="text-white bg-maincolor p-2 text-center font-bold px-4">Add to cart</p>
         
     </div>
  
  </div>
</div>
<div>
     <p class="px-10 bg-red-500 font-bold uppercase w-64 mt-10 rounded-r-2xl p-2 text-white">
       description
     </p>

     <div class="text-xl font-bold px-10 ">
        {{ product.description }}
     </div>
</div>
</div>
</template>

<script>
import store from "@/store/index.js";
import Product from "../models/product";

export default {
  components : {
   
  } ,
  data: function () {
    return {
      product: new Product("", "" , "" , "" , ""),
      fileimg: "",
      productImg : null , 
      catogress: null,
      news : true ,
            cat : true ,
            modelV : true
    };
  },
  computed: {
    currentUser() {
      return store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    this.getproductId()
  },
  methods: {
    getproductId(){
      store.dispatch('product/getProduct' , this.$route.params.id).then((res)=>{
        this.product.title = res.title
        this.product.price = res.price
        this.product.description = res.description
        this.product.qyt = res.qyt
        this.productImg = res.img_url
      })
    } ,
 
 
  },
};
</script>

<style scoped>

.bgwork   {
background: rgba(0, 0, 0, 0.4);
transition: all 0.5s;
}
.bgwork2 , .iconspage {
 transition: all 1s;
}
.iconspage {
 display: none;
}
.bgwork:hover {
 background: rgba(0, 0, 0, 0.8);
 cursor :pointer
}
.bgwork2:hover {
 background: rgba(0, 0, 0, 0.8);
 cursor :pointer
}
.bgwork2:hover  .iconspage{
 display: block;
}


</style>