<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'
const maisonsListe = await pb.collection('maison').getFullList()
</script>

<template>
  <ul>
  <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ uneMaison.Nom_de_la_maison }}
    </RouterLink>
  </li>
</ul>
</template>
