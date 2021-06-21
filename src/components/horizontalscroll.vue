<template>
<!--Reference for the class used in this template-->
<!--https://flickity.metafizzy.co/options.html#carousel-cell4-->

        <div class="carousel" data-flickity='{ "groupCells": true, 
        "autoPlay": 3000, 
        "adaptiveHeight": true,
        "selectedAttraction": 0.03,
        "friction": 0.8,
        "pageDots": false 
        }'>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        <div class="carousel-cell"></div>
        </div>

</template>

<style scoped>
* { box-sizing: border-box; }

body { 
    font-family: sans-serif;  
 }

.carousel {

   margin-top: 10px;
}

.carousel-cell {
  width: 28%;
  height: 245px;
  margin-right: 10px;
 
  background: #8C8;
  border-radius: 5px;
  counter-increment: carousel-cell;
}

.carousel-cell.is-selected {
  background: #ED2;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(carousel-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}

</style>