<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ImprovementList msg="test"></ImprovementList>
  </div>
</template>

<script>
// @ is an alias to /src
import ImprovementList from '@/components/improvements/ImprovementList'

export default {
  name: 'Home',
  components: {
    ImprovementList
  }
}
</script>
