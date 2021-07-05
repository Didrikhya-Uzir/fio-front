<template>
<div>
     <nav class="navbar navbar-expand-lg navbar-light sticky-top c-navbar">
        <div class="container-fluid">

        <section id="logo">
            <router-link to="/" class="navbar-brand c-brand">Find It Out</router-link>
        </section>

        
        <div id="collapsable-nav" class="collapse navbar-collapse  ml-3">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <router-link to="/" style="color: aliceblue;" class="nav-link" href="#">Categories</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/" style="color: aliceblue;" class="nav-link" href="#" tabindex="-1" aria-disabled="true">Cart</router-link>
                </li>
                
            </ul>
        </div>
     
    
        <div class="input-group mx-auto" style="width:50%" >
            <div class="input-group-prepend">
            <select v-model="searchby">
                <option value="allcategory">All Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
            </select>
            </div>

       


       
            <div id="collapsable-nav" class="collapse navbar-collapse ml-2">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link to="/" style="color: aliceblue;" class="nav-link" href="#"><i class="far fa-user-circle mr-2"></i>My Account</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" style="color: aliceblue;" class="nav-link" href="#" tabindex="-1" aria-disabled="true">Wish list</router-link>
                    </li>
                    
                </ul>
            </div>
       

        <section id="langchange">
            <select class="navbar-nav ml-auto btn btn-secondary dropdown-toggle" v-model="currentlang" @click="$store.commit('changelang', currentlang)"> 
                <option value="en">English</option>
                <option value="as">Assamese</option>
                <option value="bn">Bengali</option>
                <option value="hn">Hindi</option>
            </select>
        </section>
        


        </div>
    </nav>   
</div> 
</template>

<script>

export default {
    data() {
        return {
        currentlang: 'en',
        searchby: 'allcategory'
        }
    }
}
</script>



<style scoped>
.c-navbar{
    background-color: #4169e1 !important;
}

.c-brand{
    color: whitesmoke !important;
    font-family: 'Staatliches', cursive;
}

section {
    margin: 0;
    padding: 0 ;
}

.btn btn-success{
    color: whitesmoke;
}

</style>