<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss"></style>

<script>
import Navbar from '@/components/layout/Navbar'

export default {
  components: {Navbar}
}
</script>
