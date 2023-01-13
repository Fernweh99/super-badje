<template>
  <div id="nav">
    <!--Links navigazione Step-->
    <ul class="links">
      <li>
        <router-link :to="`/${getNext}`"><i class="fa-solid fa-left-long"></i></router-link>
      </li>
      <li v-if="name != 'print'">
        <router-link @click="pushNext" v-if="getNext" :to="`/${getNext}`"><i class="fa-solid fa-right-long"></i></router-link>
      </li>
      <li v-else>
        <a href="#" @click.prevent="goHome"><i class="fa-solid fa-rotate-right"></i></a>
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

<style lang="scss" scoped>
  #nav {
    background-color: #E54545;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background-color: white;
      border-radius: 50%;
      text-decoration: none;
      i {
        font-size: 30px;
        color: #FFC34D;
      }
    }
  }
</style>