<template>
    <main>
      <topview></topview>
      <topnav></topnav>
      <about></about>
      <rinen></rinen>
      <message></message>
      <business></business>
      <steps></steps>
      <overview></overview>
      <access></access>
      <banner></banner>
  </main>
</template>

<script>
import topview from '../components/topview.vue'
import topnav from '../components/topnav.vue'
import about from '../components/about.vue'
import rinen from '../components/rinen.vue'
import message from '../components/message.vue'
import business from '../components/business.vue'
import steps from '../components/steps.vue'
import overview from '../components/overview.vue'
import access from '../components/access.vue'
import banner from '../components/banner.vue'

export default {
  name: 'Main',
  components: {
    topview,
    topnav,
    about,
    rinen,
    message,
    business,
    steps,
    overview,
    access,
    banner,
  }
}
</script>

<style>

</style>
