<template>
    <div class="container-fluid">
        <div class="row">
            <!--Check id to locate the item-->
        
            <div id="fliter-search box" class="col-md-4 box">
                <button @click=" displayshops">Shop</button>
                <button @click="displayproducts">Product</button>
            </div>
    

            <div id="tiles-productsorshop" class="col-md-8">
                <!--For shop-->
                <div v-if="showshops">
                    <div class=" col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="../assets/logo.png">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>  
                </div>
                <!--For products-->
                <div v-else>
                    Products
                </div>
            </div>
         

                
        </div>
    </div>

</template>

<script>

export default {
    name: 'AllProductList',
    data() {
        return {
            showshops: true
        }
    },
    methods: {
        displayshops() {
            this.showshops = true
        },
        displayproducts() {
            this.showshops = false
        }
    }
}
</script>

<style scoped>
.box {
    height: 100vh;
}
</style>