<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/gastos"><a class="nav-link" href="#">Gastos</a></router-link>
        <router-link to="/formulario"><a class="nav-link" href="#">Formulario</a></router-link>
        <router-link to="/preguntas"><a class="nav-link" href="#">Preguntas</a></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="css">

</style>