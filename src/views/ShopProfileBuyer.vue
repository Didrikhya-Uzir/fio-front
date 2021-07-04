<template>
    <div class="carousel">
            <img src="../assets/carousel/c_1.jpg">
     </div>

    <div class="container profile-container">
        <div class="row">

            <div class="col-md-3">
                <img src="../assets/servicehome/photo.jpg" width="200" height="260" class="rounded float-right">
            </div>

            <div class="col-md-9">
                <p>Reviews Followers And Info</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            Cards here
        </div>
    </div>

</template>

<script>

export default {
    name: 'ShopProfileBuyer'
}
    

</script>

<style scoped>
.carousel img {
    width: 100%;
    height: 500px;
    margin: 0;
    padding: 0
}
.profile-container {
    width: 100%;
	height:330px;
	background:#ffffff;
	border-radius:20px;
	box-shadow:2px 2px 12px rgba(0,0,0,0.2);
	
	margin: -10%  auto 20px auto;
	position: relative;
	
   
}
.row {
    display: flex;
    justify-content: center;
	align-items: center;
    padding: 30px 10px 10px 20px;
}
.row img {
    width: 100%;
    border:1px solid black;
}
</style>