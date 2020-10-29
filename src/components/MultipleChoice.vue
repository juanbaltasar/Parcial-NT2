<template>

  <section class="src-components-multiple-choice">
    <div class="row" v-for="(gasto, index) in datosGastos" :key="index">
      <span class="elemento">{{ gasto.nombre }}</span>
      <br/>
      <span class="elemento">{{ gasto.descripcion }}</span>
      <br/>
      <span class="elemento">{{ importeCon$(gasto.importe) }}</span>
      <br/>
      <span class="elemento">{{ fechaFormateada(gasto.createdAt) }}</span>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-multiple-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas:[
          {Pregunta:1, respuestas:['b','d']}, //no llego a mostrarlas por el tiempo
          {Pregunta:2, respuestas:['b']},
          {Pregunta:3, respuestas:['c']},
          {Pregunta:4, respuestas:['d']},
          {Pregunta:5, respuestas:['b', 'e']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-multiple-choice {

  }
</style>
