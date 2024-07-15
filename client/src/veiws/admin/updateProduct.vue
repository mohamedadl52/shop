<template>
    <div>
   
      <div  class="flex min-h-screen  w-full flex-row">
          <!-- start aside left part  -->   
          
       <navbar :cat="cat" :news="news" /> 

       <div  class="" style="background-color : #22222F">
                          <div class="bars ml-4 mt-2" @click="news =! news">
                              <div class="w-10 h-1 bg-white  my-1"></div>
                              <div class="w-10 h-1 bg-white  my-1"></div>
                              <div class="w-10 h-1 bg-white  my-1"></div>
                          </div>
                                 
                      </div>
          <!-- end aside left part  -->
        
             <!-- start right aside  -->
                      <div  class="w-full flex justify-center items-start" style="background-color : #22222F">
                         
                        <form
    class="mt-32 w-full"
    enctype="multipart/form-data"
    @submit.prevent="updateProdut"
  >
    <div class="container shadow-2xl pb-20 m-auto w-11/12">
      <div class="w-full lg:w-1/3 lg:mx-auto">
        <img  class="" :src="'/src/assets/uploads/'+ productImg" alt="">
        <input
          class="w-full my-2  shadow-2xl"
          @change="uploadfile"
          type="file"
          name="fileImg"
          ref="fileimg"
        />
      </div>
      <div class="w-full  lg:w-1/3 mx-auto">
        <div>
          {{ fileimg.name }}
        </div>
        <div>
            <input
          class="w-full p-2 shadow-2xl my-2"
          v-model="product.title"
          type="text"
          placeholder="title"
        />
        </div>
        <div>
            <textarea
          class="w-full p-2 shadow-2xl my-2"
          v-model="product.description"
          type="text"
          placeholder="description"
        > </textarea>
        </div>
        <div>
            <input
          class="w-full p-2 shadow-2xl my-2"
          v-model="product.qyt"
          type="number"
          placeholder="qyt"
        />
        </div>
        
      </div>
      <div class="w-full lg:w-1/3 mx-auto">
        <input
          class="w-full p-2 shadow-2xl my-2"
          v-model="product.price"
          type="number"
          placeholder="price"
        />
      </div>
      <div class="w-1/3 p-2 text-right shadow-2xl mx-auto">
        <select
          class="border-none text-right w-32 px-2 py-2 bg-gray-500 text-white"
          ref="catogres"
          v-if="catogress"
        >
          <option v-for="cat in catogress" :key="cat._id" :value="cat._id">
            {{ cat.type }}
          </option>
        </select>
      </div>
      <div class="w-full mt-2 lg:w-32 mx-auto">
        <input
          class="mx-auto w-full rounded-md p-2 bg-emerald-600 text-white"
          type="submit"
          value="update"
        />
      </div>
    </div>
  </form>
                      </div>

                      
             <!-- end right aside   -->
            
              </div>
      </div>
  
  </template>
  
  <script>
import store from "@/store/index.js";
import Product from "../../models/product";
import navbar from "/src/components/admin/navBar.vue";

export default {
  components : {
   navbar
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
    this.getCatogress();
    this.getproductId()
  },
  methods: {
    getproductId(){
      store.dispatch('product/getProduct' , this.$route.params.id).then((res)=>{
        this.product.title = res.title
        this.product.price = res.price
        this.product.description = res.description
        this.product.qyt = res.qyt
        this.product.title = res.title
        this.productImg = res.img_url
      })
    } ,
    getCatogress: function () {
      this.$store.dispatch('catogress/get').then((res) => {
        console.log(res);
        this.catogress = res.Catogress;
      });
    },
    uploadfile() {
      console.log(this.$refs.catogres.value);
      this.fileimg = this.$refs.fileimg.files[0];
    },
    updateProdut() {
      if (!this.fileimg) {
        alert("يجب تحديد الصور");
      }
      const formData = new FormData();
      formData.append("fileImg", this.fileimg);
      formData.append("title", this.product.title);
      formData.append("price", this.product.price);
      formData.append("description", this.product.description);
      formData.append("qyt", this.product.qyt);
      formData.append("catogres", this.$refs.catogres.value);
      
      store.dispatch("product/updateProduct", {id:this.$route.params.id , formData })
        .then(() => {
          this.getproductId()
          alert("تم تعديل بنجاح");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
  <style scoped>
table td {
    padding: 10px;
}
</style>