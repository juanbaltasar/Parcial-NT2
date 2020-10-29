<template>

  <section class="src-components-gastos">
    <div class="row" v-for="(gasto, index) in datosGastos" :key="index">
      <span class="elemento">{{ gasto.nombre }}</span>
      <br/>
      <span class="elemento">{{ gasto.descripcion }}</span>
      <br/>
      <span class="elemento">{{ importeCon$(gasto.importe) }}</span>
      <br/>
      <span class="elemento">{{ fechaFormateada(gasto.createdAt) }}</span>
    </div>
    <div class="row">
      <span class="elemento">Total</span>
      <br/>
      <span class="elemento">Total</span>
      <br/>
      <span class="elemento">Total</span>
      <br/>
      <span class="elemento" :class="{verde: this.Verde(), magenta: this.Magenta(), naranja: this.Naranja() }">{{Total()}}</span>
    </div>
  </section>

</template>

<script>
const axios = require('axios')

  export default  {
    name: 'src-components-gastos',
    props: [],
    mounted () {
      this.getDatosGastos();
    },
    data () {
      return {
        datosGastos:[],
        total:0
      }
    },
    methods: {
      async getDatosGastos(){
        const datos = await axios.get('https://5f99b19750d84900163b9015.mockapi.io/PARCIAL-NT2-Gastos')
        console.log(datos.data)
        this.datosGastos = datos.data
      },
      importeCon$(importe){
        let retorno = importe.toString().split('')
        retorno.unshift('$ ')
        return retorno.join('')
      },
       fechaFormateada(fecha){
         let retorno = []
        let fechaArray = fecha.split('')
        console.log(fechaArray)
        retorno.unshift(fechaArray[18]) //y asi segun el orden en el que se quiera formatear
       },
       Total(){
        let total = 0
        for (const g of this.datosGastos) {
          total += parseInt(g.importe)
        }
        this.total = total
        return total
      },
      Verde(){
        if (this.total < 1000) {
          return true
        }
      },
      Magenta(){
        if (this.total > 1000 && this.total < 5000) {
          return true
        }
      },
      Naranja(){
        if (this.total > 5000) {
          return true
        }
      }
    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .elemento{
    border:3px solid;
    margin: 0% 1.5%;
  }
  .verde{
    color:green;
  }
  .magenta{
    color:magenta
  }
  .naranja{
    color:orange
  }
</style>
