<template>

  <section class="formulario">
    <form novalidate>
      <label>Nombre</label>
      <input type="text" v-model="$v.f.nombre.$model"/>
      <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
        <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
        <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos 5 caracteres</div>
        <div v-else-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener como maximo 15 caracteres</div>
      </div>
      <label>Descripcion</label>
      <input type="text" v-model="$v.f.descripcion.$model"/>
      <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
        <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
      </div>
      <label>Importe</label>
      <input type="text" v-model="$v.f.importe.$model"/>
      <div v-if="$v.f.importe.$error && $v.f.importe.$dirty" class="alert alert-danger mt-1">
        <div v-if="$v.f.importe.required.$invalid">Este campo es requerido</div>
        <div v-else-if="$v.f.importe.numeric.$invalid">Este campo debe ser numerico</div>
      </div>
    </form>
    <button @click.prevent="sendForm()"></button>
    <pre>{{ $v }}</pre>
  </section>

</template>

<script>
  import {
    required,
    numeric,
    minLength,
    maxLength
  } from "@vuelidate/validators";


  export default {
    name: 'src-components-formulario',
    props: [],
    mounted() {

    },
    data() {
      return {
        f: {}
      }
    },
    methods: {
      async sendForm() {
        if(!this.$v.invalid){
          let form = {
                nombre: this.$v.f.nombre.$model,
                descripcion: this.$v.f.descripcion.$model,
                importe: this.$v.f.importe.$model
            }
            this.axios.post('https://5f99b19750d84900163b9015.mockapi.io/PARCIAL-NT2-Gastos', form, {'content-type': 'application/json'})
            .then(res => console.log(res.data))
            .catch(error => console.log('HTTP POST ERROR', error))
            this.$v.$reset()
        }
      }
    },
    computed: {

    },

    validations: {
      f: {
        nombre: {
          minLength: minLength(5),
          maxLength: maxLength(15),
          required
        },
        importe: {
          numeric,
          required
        },
        descripcion: {
          required
        }
      }
    }
  }
</script>

<style scoped lang="css">
  .src-components-formulario {}
</style>