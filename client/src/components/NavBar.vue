<template>
  <div class="bg-gray-200">
    <div class="logo">
      <div>
        <img src="..//assets//vue.svg" alt="" />
      </div>
      <div>
        <span class="flex">
              
          <router-link style="  --tw-bg-opacity: 1;
    background-color: rgb(126 36 36 / var(--tw-bg-opacity));" class="text-white"  v-if="!loggedIn" to="/login">
            تسجيل دخول
            <font-awesome-icon :icon="['fas', 'sign-in']" />
          </router-link>

          <router-link style="  --tw-bg-opacity: 1;
    background-color: rgb(126 36 36 / var(--tw-bg-opacity));" class="text-white" v-if="!loggedIn" to="/signup">
            تسجيل جديد
            <font-awesome-icon :icon="['fas', 'user-plus']" />
          </router-link>
          <router-link style="  --tw-bg-opacity: 1;
    background-color: rgb(126 36 36 / var(--tw-bg-opacity));" class="text-white" v-if="loggedIn" @click="logout()" to="/logout">
           <span>
            <font-awesome-icon :icon="['fas', 'sign-out']" />
            تسجيل خروج
           </span>
          </router-link>
        </span>
      </div>
    </div>

    <div>
      <ul
        class="flex bg-gray-700 p-2 overflow-hidden flex-row-reverse text-lg text-white font-bold ulNav"
      style="background: #1c0a0a;"
        >
        <li>
          <router-link  to="/">
            <font-awesome-icon class="pl-4" :icon="['fas', 'home']" />
            <span class="px-2"> الصفحة الرئيسية </span>
          </router-link>
        </li>
        <li>
          <router-link to="/shop">
            <font-awesome-icon class="pl-4" :icon="['fas', 'cart-plus']" />
            <span class="px-2">تسوق</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.logo {
  @apply flex  justify-between items-center p-1;
}
.logo span a {
  @apply text-sm font-semibold mx-1 bg-gray-100 p-2  rounded-xl;
}

.ulNav li {
  @apply mx-3;
}
</style>


<script>
import store from '../store/index'
export default {
  methods: {
    logout() {
       store.dispatch("auth/logout").then(()=>{
        this.$router.push("/login");
       })
    } 
  },
  computed: {
   loggedIn() {
     return this.$store.state.auth.status.loggedIn;
   },
 },
 
}
</script>