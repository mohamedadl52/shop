<template>
   <div class="overflow-hidden">
    <div class="background overflow-hidden">
       <img class="w-full lg:hidden" height="20px" src="../assets//images//key7.jpg" alt="">
       
       
       <div  class="flex flex-col container justify-between lg:flex-row">
           <div class="mx-2 ml-5 lg:mt-64">
               <h1 style="color:rgb(19, 255, 255)" class="text-white lg:text-3xl  uppercase text-2xl  text-bold ">furnture store</h1>
               <h1 style="color:rgb(255, 255, 255)" class="text-white   uppercase text-lg  text-bold ">order now and you will get you product in time </h1>
                <router-link to="/shop">
                    <button style="border: 1px solid blueviolet; border-radius: 10px;" class="text-white   uppercase text-lg p-2 mt-4 w-64  text-bold">
                shop Now 
               </button>
                </router-link>     
            </div>
            <div  class="lg:w-1/2">

            </div>
        </div>
    </div>
    <div 
    class="mb-20 container mx-auto" >
        <div data-aos="zoom-out-up" class="mt-20">
                <h1 class="text-2xl px-5 font-bold text-maincolor ">last product  ></h1>

              <div class="flex gap-4 mt-2 flex-wrap justify-center">
                <prodduct v-for="item in carditem"  :key="item.id" :name="item.name" :price="item.price"  />
              </div>
               
        </div>
        <div data-aos="zoom-out-up" class="mt-20">
                <h1 class="text-2xl px-5 font-bold text-maincolor ">top product  ></h1>

              <div class="flex gap-4 mt-2 flex-wrap justify-center">
                <prodduct v-for="item in carditem"  :key="item.id" :name="item.name" :price="item.price"  />
              </div>
               
        </div>
        

    </div>
   </div>
</template>

<script>
import AOS from 'aos'
import prodduct from '../components/carD.vue'
import { onMounted  } from 'vue'
export default {
    components :{
        prodduct
    } ,
  
    data(){
        return {
       
     carditem : [
  {id :1 ,  name : 'product1' , price :50 } , 
  {id :2 ,  name : 'product2' , price :500 } , 
  {id :3 ,  name : 'product3' , price :60 } , 
  {id :2 ,  name : 'product2' , price :500 } 
] 
        }
    } ,
    setup(){
        onMounted(()=>{
            AOS.init()
        })
    }
}
</script>
<style scoped>


.imfly {
    animation: bgfly 2s infinite;
}
.background {
  background-image: url("../src/assets/images/key7.jpg");
 filter  :   hue-rotate(-194deg) ; 
  background-size: cover;
  width: 100%;
  height: 85vh;
  position: relative;
}
@keyframes bgfly {
    0% {
   transform: translateY(8px);
}
50% {
    
    transform: translateY(0px);

}
100%{
    
    transform: translateY(8px);
    }
}
</style>