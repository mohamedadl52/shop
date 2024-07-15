import {createRouter , createWebHistory} from 'vue-router'
import Home from '../veiws/HOme.vue'
import About from '../veiws/abOut.vue'
import login from '../veiws/lOgin.vue'
import signup from '../veiws/signUp.vue'
// import profile from '../veiws/prOfile.vue'
import test from '../veiws/testPage.vue'
import shop from '../veiws/shOp.vue'
import account from '../veiws/accOunt.vue'
import mangeAdress from '../veiws/mangeAdress.vue'
import chpass from '../veiws/chPass.vue'
import manginf from '../veiws/mangInf.vue'
import whitelist from '../veiws/whiteList.vue'
import checkHost from '../veiws/checkHost.vue'
import viewProduct from '../veiws/viewProduct.vue'

// router for Admin
import admin from '../veiws/admin/inDex.vue'
import catoGress from '../veiws/admin/catoGress.vue'
import custOmer from '../veiws/admin/custOmer.vue'
import addProduct from '../veiws/admin/addProduct.vue'
import updateProduct from '../veiws/admin/updateProduct.vue'

//  routs for projects 
import project1 from '../veiws/projects/proJect1.vue'
import project2 from '../veiws/projects/proJect2.vue'
import project3 from '../veiws/projects/proJect3.vue'


// rout for scam page  
   import  scam from '../veiws/SCAM/inDex.vue'
const router = createRouter({
    history : createWebHistory() , 
    routes : [
        {path:'/' , name : 'Home' , component : Home } ,
        {path:'/about' , name : 'About' , component : About , meta : {transitionName : 'slide'}},
        {path:'/login' , name : 'login' , component : login},
        {path:'/signup' , name : 'signup' , component : signup} ,  
        {path:'/test' , name : 'test' , component : test} ,
        {path:'/shop' , name : 'shop' , component : shop}  ,
        {path:'/account' , name : 'account' , component : account}  ,
        {path:'/mangeAdress' , name : 'mangeAdress' , component : mangeAdress} ,
        {path:'/manginf' , name : 'manginf' , component : manginf} ,
        {path:'/whitelist' , name : 'whitelist' , component : whitelist} ,
        {path:'/chpass' , name : 'chpass' , component : chpass} ,
        {path:'/viewProduct/:id' , name : 'viewProduct' , component : viewProduct} ,
        {path:'/checkhost' , name : 'checkHost' , component : checkHost} ,
        {path:'/admin' , name : 'admin' , component : admin} ,
        {path:'/admin/catogress' , name : 'catogress' , component : catoGress} ,
        {path:'/admin/products' , name : 'custOmer' , component : custOmer} ,
        {path:'/admin/product/add' , name : 'addProduct' , component : addProduct} ,
        {path:'/admin/product/update/:id' , name : 'updateProduct' , component : updateProduct} ,
        {path:'/projects/project1' , name : 'project1' , component : project1} ,
        {path:'/projects/project2' , name : 'project2' , component : project2} ,
        {path:'/projects/project3' , name : 'project3' , component : project3} ,
        {path:'/scam/' , name : 'scam' , component : scam} ,
    ]
})

export default router