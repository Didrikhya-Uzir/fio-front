<template>
    <div id="i-carousel">
        <div id="carousel" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
        </ul>

        <!-- The slideshow -->
        <div class="carousel-inner">

            <div class="carousel-item active">
            <img src="../assets/carousel/c_1.jpg">
            </div>

            <div class="carousel-item">
            <img src="../assets/carousel/c_2.jpg">
            </div>

            <div class="carousel-item">
            <img src="../assets/carousel/c_3.jpg">
            </div>
            
        </div>

        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#carousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#carousel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>

        </div>
    </div>
</template>

<style scoped>

img {
    width: 100%;
    height: 500px;
}

</style>