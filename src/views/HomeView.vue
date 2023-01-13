<template>
  <div class="d-flex h-100" :class="name">
    <Navbar class="w-nav" :name="name"/>
    <div :key="name" class="description">
      <!-- first three steps of costumization-->
      <h2 v-if="name != 'data' && name != 'print'">
        {{ this.$store.state.stepsActivated.length + " Choose " + setArticle + " " + name }}
      </h2>
      <!-- last step of costumization -->
      <h2 v-else-if="name == 'data'">
        {{ this.$store.state.stepsActivated.length + " Insert your " + name }}
      </h2>
      <!-- last step of costumization -->
      <h2 v-else-if="name == 'print'">
        {{ this.$store.state.stepsActivated.length + " " + capitalize(name) }}!
      </h2>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: "HomeView",
  components: {
    Navbar,
  } ,
  props: {
    name: String,
  },
  computed: {
    setArticle() {
      const vocals = ['a', 'e', 'i','o', 'u'];
      let cont = true;
      let result = 'a';
      vocals.forEach(vocal => {
        if (this.name[0] == vocal && cont == true) {
          result = 'an'
          cont = false;
        }
      })
      return result;
    },
    capitalize(){
      return (v)=>{
        return v.charAt(0).toUpperCase() + v.slice(1);
      }
    }
  }
};
</script>
<style lang="scss">
  .w-nav {
    width: 150px;
    height: 100%;
  }
  .description {
    width: calc(100% - 150px);
    height: 100%;
  }
</style>
