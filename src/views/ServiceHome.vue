<template>

	<div class="carousel">

		<div class="container">

			<div class="row">

				<div class="col-sm-2">
					<div class="inner"></div>
				</div>
				<div class="col-sm-2">
					<div class="inner"></div>
				</div>
				<div class="col-sm-2">
					<div class="inner"></div>
				</div>
				<div class="col-sm-2">
					<div class="inner"></div>
				</div>
				<div class="col-sm-2">
					<div class="inner"></div>
				</div>
				<div class="col-sm-2">
					<div class="inner"></div>
				</div>
				<div class="col-sm-2">
					<div class="inner"></div>
				</div>
			</div>
		</div>
	</div>

	
	<section id="category">
		<div class="row">
			    <div class="col-md-3">
				    <div>
				    	<img src="../assets/servicehome/photo.jpg">
				    </div>
			    </div>

          		<div class="col-md-9">
          			<div>
				    	<img src="../assets/servicehome/photo.jpg">
				    </div>
          		</div>
        </div>
     </section>

	
</template>


<style scoped>

.inner {
	border: 10px solid black;
	width: 100%;
	height: 14vw;
	border-image: url("../assets/servicehome/wood.jpg") 30;
	margin: 20px;
	box-shadow: 10px 5px 15px;
	background-image: url("../assets/servicehome/photo.jpg");
}

.carousel {
	background-color: #FFDEE9;
	background-image: linear-gradient(0deg, #B5FFFC 100%);
	margin-bottom: 2px;
}
	

</style>
