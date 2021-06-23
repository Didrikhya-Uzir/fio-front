<template>
<div>
     <nav class="navbar navbar-expand-lg navbar-light sticky-top c-navbar">
        <div class="container-fluid">

        <section id="logo">
            <router-link to="/" class="navbar-brand c-brand">Find It Out</router-link>
        </section>

        <section id="sidebar-left-tabs">
            <div id="collapsable-nav" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" style="color: aliceblue;" class="nav-link" href="#">Categories</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" style="color: aliceblue;" class="nav-link" href="#" tabindex="-1" aria-disabled="true">Cart</router-link>
                    </li>
                    
                </ul>
            </div>
        </section>

        <section id="searchbar ">
            <form class="form-inline justify-content-center">
                <input class="form-control" type="text" placeholder="Search">
                <button class="btn btn-success" type="submit">Search</button> 
            </form>
        </section>

        <section id="sidebar-right-tabs">
            <div id="collapsable-nav" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" style="color: aliceblue;" class="nav-link" href="#">My Account</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" style="color: aliceblue;" class="nav-link" href="#" tabindex="-1" aria-disabled="true">Wish list</router-link>
                    </li>
                    
                </ul>
            </div>
        </section>

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
        currentlang: 'en'
        }
    }
}
</script>



<style scoped>
.c-navbar{
    background-color: black !important;
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
    color: rgb(30 215 96);
}

</style>