<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'
const maisonsListe = await pb.collection('maison').getFullList({filter:"Favori=true"})
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-for="maison in maisonsListe" :key="maison.Nom_de_la_maison" v-bind="maison" />
</template>
