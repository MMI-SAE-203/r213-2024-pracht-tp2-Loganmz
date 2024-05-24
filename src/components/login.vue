<script setup lang="ts">
// @ts-nocheck

import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';

let pb = null;
const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const loginMode = ref(true);

onMounted(async () => {
pb = new PocketBase('http://127.0.0.1:8090');

pb.authStore.onChange(() => {
  currentUser.value = pb.authStore.model
}, true)

});

const Logout = () => {
  pb.authStore.clear();
  currentUser.value = null;
}

const Login = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(username.value, password.value);

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
    // currentUser.value = pb.authStore.model
  } catch (error) {
    alert(error.message)
  }
}

const CreateAccount = async () => {
  try {
    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": username.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": fullName.value
    };

    const record = await pb.collection('users').create(data);

    await Login();
  } catch (error) {
    alert(error.message)
  }
}

</script>

<template>
    <div class=" bg-black flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="pt-10 w-full text-gray-400 max-w-md space-y-8 ">
        <div v-if="currentUser">
          <h1>welcome {{ currentUser?.name }}</h1>
          <div>
            <button type="button" @click="Logout"
              class="rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Disconnect</button>
  
          </div>
        </div>
        <div v-else>
          <h1>{{ loginMode ? "login" : "signup" }}</h1>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <label for="username" class="block text-sm font-medium leading-6 text-Orange">email</label>
            <div class="mt-2">
              <input v-model="username" type="text" name="username" id="username" autocomplete="none"
                placeholder="Enter email "
                class=" px-2 block w-full rounded-md border-0 py-1.5 text-Orange shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <label for="password" class="block text-sm font-medium leading-6 text-Orange">password</label>
            <div class="mt-2">
              <input v-model="password" type="password" name="password" id="password" autocomplete="none"
                placeholder="Enter password "
                class=" px-2 block w-full rounded-md border-0 py-1.5 text-Orange shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6">
            </div>
          </div>
          <div v-if="loginMode">
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="Login"
                class="mr-3 rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">Login</button>
  
              <button type="button" @click="loginMode = false"
                class="rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">Signup</button>
  
            </div>
          </div>
          <div v-else>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <label for="fullName" class="block text-sm font-medium leading-6 text-Orange">Name</label>
              <div class="mt-2">
                <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none"
                  placeholder="Enter Full Name "
                  class=" px-2 block w-full rounded-md border-0 py-1.5 text-Orange shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="CreateAccount"
                class="mr-3 rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">Save
                New user</button>
  
              <button type="button" @click="loginMode = true"
                class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">return
              </button>
  
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
  <hr class="w-full">
</div>
  </template>
  
 
  
  <style scoped>
  </style>