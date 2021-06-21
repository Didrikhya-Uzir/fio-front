<template>
  <div class="home">
     <carousel />
    <div class="container-fluid">

      <section id="shopping">
        <div class="row">
			    <div class="col-md-4">
				    <router-link to="/"><div id="shopping-tile"><span>Shopping</span></div>
            </router-link>
			    </div>
          <div class="col-md-8">
            <horizontalscroll/>
          </div>
        </div>
      </section>    
      <hr>   

      <section id="service" >
        <div class="row">
          <div class="col-md-4">
				    <router-link to="/">
            <div id="service-tile"><span>Service</span></div>
            </router-link>
			    </div>

          <div class="col-md-8">
            <horizontalscroll/>
          </div>
        </div>
      </section>
      <hr>
      <section id="special">
        <div class="row">
          <div class="col-md-4">
				    <router-link to="/">
            <div id="special-tile"><span>Whats New</span></div>
            </router-link>
			    </div>

          <div class="col-md-8">
            <horizontalscroll/>
          </div>
        </div>
      </section>

    </div>
   
    
  </div>
</template>

<script>
import carousel from '../components/carousel.vue'
import horizontalscroll from '../components/horizontalscroll.vue'
export default {
  name: 'Home',
  components: {
    carousel,
    horizontalscroll
  }
}
</script>

<style scoped>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 250px;
}

.card {
  display: inline-block;
}


#shopping-tile, #service-tile, #special-tile {
  box-shadow: 0 1px 5px 1px #ccc;
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  border: 2px solid #aaa;
  border-radius: 8px; 
  background-position: center;
  margin: 5px;
}

#shopping-tile:hover , #service-tile:hover , #special-tile:hover {
  border: 2px solid #000;
}

#shopping-tile {
  background: url("../assets/home/shopping.jpg") no-repeat;
}

#service-tile {
  background: url("../assets/home/service.jpg") no-repeat;
}

#special-tile  {
  background-image: url("../assets/home/opportunities.jpg") no-repeat;
}

#shopping-tile span , #service-tile span, #special-tile span {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 1.6em;
  text-transform: uppercase;
  color: #fff;
  background-color: #000;
  opacity: .7;
  overflow: hidden;
}
</style>
