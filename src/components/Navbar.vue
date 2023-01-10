<template>
  <div id="nav">
    <!--Links navigazione Step-->
    <ul class="links">
      <!-- <li>
        <router-link v-if="getPrev" :to="`/${getPrev}`">Prev</router-link>
      </li> -->
      <li v-if="name != 'print'">
        <router-link @click="pushNext" v-if="getNext" :to="`/${getNext}`">Next</router-link>
      </li>
      <li v-else>
        <a @click.prevent="goHome">Reset</a>
      </li>
    </ul>
    <!--/Links navigazione Step-->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    name: String,
  },
  methods: {
    goHome() {
      // this.$store.dispatch("resetColors");
      this.$store.commit("resetSteps");

      this.$router.push({ name: "Home" });
    },
    pushNext() {
      this.$store.state.stepsActivated.push(this.getNext);
    }
  },
  computed: {
    next() {
      return !this.$store.state.next;
    },
    getNext() {
      let result = false;
      if (this.$store.state.steps.indexOf(this.name) < this.$store.state.steps.length && this.next) {
         result = this.$store.state.steps[this.$store.state.stepsActivated.length]
      }
      return result;
    },
  }
}
</script>

<style>

</style>