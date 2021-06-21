<template>
 
    <carousel />

    <section id="electronics">
        <h1>Electronics</h1>
        <horizontalscroll/>
    </section>
  
     <section id="Clothing">
        <h1>Clothing</h1>
        <horizontalscroll/>
    </section>

     <section id="Influencers">
        <h1>Influencers</h1>
        <horizontalscroll/>
    </section>

     <section id="Grocery">
        <h1>Grocery</h1>
        <horizontalscroll/>
    </section>

    
</template>

<script>
import fionavbar  from '../components/fionavbar.vue'
import carousel from '../components/carousel.vue'
import horizontalscroll from '../components/horizontalscroll.vue'
import footerfio from '../components/footerfio.vue'

export default {
    name: 'ShoppingHome',
    components: {
        carousel,
        fionavbar,
        footerfio,
        horizontalscroll
    }
}

</script> 


<style scoped>

</style>


       