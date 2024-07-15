<template>
    <div>
   
      <div  class="flex min-h-screen  w-full flex-row">
          <!-- start aside left part  -->   
          
       <navbar :cat="cat" :news="news" /> 
          <!-- end aside left part  -->
        
             <!-- start right aside  -->
                      <div  class="w-full" style="background-color : #22222F">
                          <div class="bars ml-4 mt-2" @click="news =! news">
                              <div class="w-10 h-1 bg-white  my-1"></div>
                              <div class="w-10 h-1 bg-white  my-1"></div>
                              <div class="w-10 h-1 bg-white  my-1"></div>
                          </div>
                                 <div>
                                       <p class="ml-4 uppercase text-white font-bold mt-10 cursor-pointer" @click="modelV = false">add new catogress  <span
class="border ml-4 bg-maincolor p-2 text-white
                                        " >+</span></p>
                                        <table border="1" class="text-white text-center  border-2 lg:w-1/2 w-auto mx-auto font-semibold  mt-10  ml-10">
                                           <tr class="border-2 bg-gray-500 ">
                                            <td class="border-2  ">id</td>
                                            <td class="border-2">name</td>
                                            <td class="border-2">products</td>
                                            <td class="border-2">action</td>
                                           </tr>
                                           <tbody v-for="(cat , index) in  catogress" :key="cat.id">
                                            <tr>
                                                <td class="border-2">{{ index +1 }}</td>
                                                <td class="border-2"><input disabled :id="cat._id" class="bg-transparent" type="text" v-model="cat.type"></td>
                                                <td class="border-2 ">{{cat.Number}}</td>
                                                <td class="border-2 cursor-pointer"><span  @click="deleteData(cat)" class="text-red-500">delete </span>/ <span :id="cat._id+'up1'" @click="updateData(cat);"  class="text-green-500">{{'edite'}}</span><span @click="updateData2(cat);" :id="cat._id+'up2'"  class="text-green-500 hidden">{{'update'}}</span></td>
                                            </tr>
                                            
                                           </tbody>
                                        </table>

                                 </div>
                      </div>

                      <div
id="model" :class="modelV ? 'hidden' :'flex' " class="absolute bg-seconcolor w-1/2 h-1/2 flex justify-center items-center top-1/4 left-1/4 shadow-xl  bg-white
                      ">
                        <span class="absolute cursor-pointer right-3 top-1 text-white font-bold text-2xl" @click="modelV = true">X</span>
                            <div class="w-full flex justify-center items-center flex-col p-2">
                                <input id="" type="text" v-model="catogres" class="p-2 border border-black w-full" name="" placeholder="add catogress"> <br>
                                <input
                                @click.prevent="addCatogress"
type="submit" value="add" class="bg-maincolor w-full uppercase font-bold text-white font-semibold
                                 p-1 mt-4  px-4">
                            </div>
                      </div>
             <!-- end right aside   -->
            
              </div>
      </div>
  
  </template>
  
  <script>
  import navbar from "/src/components/admin/navBar.vue";
   import store  from  '../../store/index'
export default {
components : {
    navbar
},
    data(){
        return{
            news : true ,
            cat : true ,
            modelV : true , 
            catogres  :  null ,
            catogress : null , 
            numm :  1
    }
},
 created (){
    this.getData()
 }
, 
 methods  :  {
    addCatogress() {
        store.dispatch('catogress/add', this.catogres).then(()=>{
            this.modelV = true 
            this.catogres =  null
            this.getData()
        })
    } , 
    getData(){
        store.dispatch('catogress/get').then((data)=>{
            this.catogress =  data.Catogress
        })
        
    } ,
    updateData (cat){
        // if(){
            
            document.getElementById(cat._id).disabled = false
            document.getElementById(cat._id).style.background = 'white'
            document.getElementById(cat._id+'up1').style.display = 'none'
            document.getElementById(cat._id+'up2').style.display = 'inline'
            document.getElementById(cat._id).style.color = 'black'
        // } else {

        // }
    }  , 
    updateData2 (cat){
        // if(){
            store.dispatch('catogress/update' ,{id : cat._id , name : cat.type}) .then(()=>{
                
                document.getElementById(cat._id).disabled = true
                document.getElementById(cat._id).style.background = 'transparent'
                document.getElementById(cat._id+'up1').style.display = 'inline'
                document.getElementById(cat._id+'up2').style.display = 'none'
                document.getElementById(cat._id).style.color = 'white'
            })
        // } else {

        // }
    }  , 
    deleteData(cat){
        let deletee = prompt(`if you want delet write name of it (${cat.type})  `)
        if (deletee == cat.type ) {

            store.dispatch('catogress/delete' , cat._id).then(()=>{
                this.getData()
            })
        } else {
            alert('sorry be sure that write the right name ')
        }

    }
 } 
}
  </script>
  <style scoped>
table td {
    padding: 10px;
}
</style>