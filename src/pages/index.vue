<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import type { MaisonResponse } from '@/pocketbase-types'
const maisonsListe: MaisonResponse[] = [
  {
    Adresse: '123 Avenue de la Mer',
    Favori: true,
    Images: 'andy_barbosa_sg_ph20n_nbf_a_unsplash_TniIeRAF2F.jpg',
    Nom_de_la_maison: 'Villa en bord de mer',
    Nombre_de_chambres: 5,
    Nombre_de_salles_de_bain: 3,
    Prix: 750000,
    Superficie: 300,
    collectionId: 'fqypsoggopb3pa1',
    collectionName: 'maison',
    created: '2024-04-12 11:50:42.732Z',
    id: 'fmflwgtnrprmfh4',
    updated: '2024-04-12 11:50:42.732Z'
  },
  {
    Adresse: '456 Rue de la Ville',
    Favori: false,
    Images: 'matt_jones_xp_dhtc_pkog_unsplash_FNECgzeCbr.jpg',
    Nom_de_la_maison: 'Appartement moderne',
    Nombre_de_chambres: 2,
    Nombre_de_salles_de_bain: 2,
    Prix: 350000,
    Superficie: 120.5,
    collectionId: 'fqypsoggopb3pa1',
    collectionName: 'maison',
    created: '2024-04-12 11:52:27.990Z',
    id: 'jtd4k8y2ymk65oi',
    updated: '2024-04-12 11:52:27.990Z'
  },
  {
    Adresse: '789 Chemin des Bois',
    Favori: true,
    Images: 'michal_prucha_q_vkln_abq_z_0_unsplash_k8cWsgF4Gk.jpg',
    Nom_de_la_maison: 'Maison de campagne',
    Nombre_de_chambres: 4,
    Nombre_de_salles_de_bain: 2,
    Prix: 450000,
    Superficie: 200,
    collectionId: 'fqypsoggopb3pa1',
    collectionName: 'maison',
    created: '2024-04-12 12:30:53.239Z',
    id: '5iuwzymrcr39r5h',
    updated: '2024-04-12 12:30:53.239Z'
  },
  {
    Adresse: '10 Avenue du Centre',
    Favori: true,
    Images: 'webaliser_tptxzd9m_oo_unsplash_1_tPwjYDFZXq.jpg',
    Nom_de_la_maison: 'Penthouse en centre-ville',
    Nombre_de_chambres: 3,
    Nombre_de_salles_de_bain: 3,
    Prix: 900000,
    Superficie: 180,
    collectionId: 'fqypsoggopb3pa1',
    collectionName: 'maison',
    created: '2024-04-12 12:31:37.805Z',
    id: 'krwoyb51esaihl2',
    updated: '2024-04-12 12:31:37.805Z'
  },
  {
    Adresse: '15 Rue des Montagnes',
    Favori: false,
    Images: 'ian_keefe_ogc_jikrn_rc8_unsplash_wI0kUcrGOs.jpg',
    Nom_de_la_maison: 'Chalet de montagne',
    Nombre_de_chambres: 3,
    Nombre_de_salles_de_bain: 2,
    Prix: 600000,
    Superficie: 250,
    collectionId: 'fqypsoggopb3pa1',
    collectionName: 'maison',
    created: '2024-04-12 12:32:23.099Z',
    id: '5u90t2iwy8b7s7z',
    updated: '2024-04-12 12:33:14.745Z'
  }
]
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-for="maison in maisonsListe" :key="maison.Nom_de_la_maison" v-bind="maison" />
</template>
