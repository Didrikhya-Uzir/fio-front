<template>
    <div class="container">
        
        <div class="row">
            <div class="col-md-6">
                Insert an image
            </div>
            
            <div class="col-md-6">
                <h2>Sign Up</h2>

                
                

                <form @submit.prevent="submitform" novalidate>

                    <div class="alert alert-danger" id="existerror" role="alert" style="display: none">
                        Phone Number already exists
                    </div>

                    <label>Name:</label>
                    <input type="text" required v-model="name">
                    <div v-if="errors.nameerr"  class="alert alert-danger" role="alert" >
                        {{ errors.nameerr }}
                    </div>

                    <label>Phone:</label>
                    <input type="tel" required v-model="phoneno">
                    <div v-if="errors.phonenoerr"  class="alert alert-danger" role="alert" >
                        {{ errors.phonenoerr }}
                        
                    </div>

                    <label>Email:</label>
                    <input type="email" v-model="email">

                    <label>Password:</label>
                    <input type="password" required v-model="password">
                    <div v-if="errors.passworderr"  class="alert alert-danger" role="alert" >
                        {{ errors.passworderr }}
                    </div>

                    <div class="c-button">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                    

                </form>

                <router-link to="/login">Already have an account</router-link>
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
            name: '',
            phoneno: '',
            password: '',
            email:'',
            usertype: '',
            errors: {nameerr: '',
                    phonenoerr: '',
                    passworderr: ''}
        }
    },
    methods: {  
        submitform() {
    
            this.errors.nameerr = this.name === '' ? 'Please include your name': ''
            this.errors.phonenoerr = this.phoneno.length !== 10 ? 'Please select a valid number': ''
            this.errors.passworderr = this.password.length < 8 ? 'Password must contain atleast 8 characters': ''
           
            $('.alert').alert() //Bootstrap toast

            if (!this.errors.nameerr && !this.errors.phonenoerr && !this.errors.passworderr ) {
                const formdata = {
                    username: this.name,
                    email: this.email,
                    phone: this.phoneno,
                    full_name: this.name,
                    user_type: 'buyer',
                    password: this.password
                }

                axios.defaults.withCredentials = true
                axios.post('http://localhost:8000/api/users/create/',formdata)
                    .then(response => {
                        this.$store.commit('updatetoken',response.data)
                        this.$router.push('/')
                    })
                    .catch(error => {
                        document.getElementById('existerror').style.display = "block"
                        this.password= ''
                    })

                    

            }

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

