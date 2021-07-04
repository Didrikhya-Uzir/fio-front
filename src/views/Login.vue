<template>
    <div class="container">
        
        <div class="row">
            <div class="col-md-6">
                Insert an image
            </div>
            
            <div class="col-md-6">
                <h2>Login</h2>

                <form @submit.prevent="submitloginform" novalidate>

                    <label>Phone:</label>
                    <input type="tel" required v-model="phoneno">
                    
                    <label>Password:</label>
                    <input type="password" required v-model="password">
                   
                    <div class="c-button">
                        <button class="btn btn-primary">Submit</button>
                    </div>

                </form>
                
                <router-link to="/signup">Create an Account</router-link>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            phoneno: '',
            password: ''
        }
    },
    methods: {
    	submitloginform() {

    		const formdata = {
                              phone: this.phoneno,
                              password: this.password
                			}
                    
            axios.defaults.withCredentials = true
            axios.post('http://localhost:8000/api/users/login/',formdata)
                .then(response => {
                    this.$store.commit('updatetoken',response.data)
                    this.$router.push('/')
                })
                .catch(error => {
                    console.log(error)
                })

         

    	}
    	

    }
 }

</script>



<style scoped>
.c-error {
    border-radius: 5px;
    background-color: rgb(255, 73, 73);
    color:rgb(255, 255, 255);
    width: 80%;
}

.alert{
    width: 80%;
}
.container {
    background-color: rgb(229, 231, 236);
    border-radius: 10px;
    padding: 10px;
}

form {
    text-align: left;
    margin-top: 50px;
}
label {
    text-align: left;
}
input {
    width: 80%;
    background-color: rgb(229, 231, 236);
    display: block;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid rgb(5, 5, 5); 
    border-radius: 5px 0 0 ;
}
.c-button {
    margin-top: 10px;
}
button {
    width: 80%;
    border-radius: 20px;
}
</style>

