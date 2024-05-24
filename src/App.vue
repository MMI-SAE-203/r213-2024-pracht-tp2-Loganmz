<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import { RouterLink, RouterView } from 'vue-router/auto'
import login from './components/login.vue';

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})


</script>

<template>
  <login/>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/" class="text-red-500 underline"> Accueil </RouterLink>
        </li>
        <li>
          <RouterLink to="/offres">Toutes les offres</RouterLink>
        </li>
        <li>
          <RouterLink to="/agents">Agents</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>
