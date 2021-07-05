<template>
    <div class="container">
        
        <div class="row">

            <div v-if="showlogin" class="col-md-6">
                Insert an image
            </div>
            
            <div class="col-md-6">
                <div v-if="showlogin">
                    <h2>Login</h2>

                    <form @submit.prevent="submitloginform" novalidate>

                        <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" class="form-control" id="phone" placeholder="Enter email" required v-model="phoneno">
                        </div>

                        <div class="form-group">
                        <label for="Password">Password</label>
                        <input type="password" class="form-control" id="Password" placeholder="Password" required v-model="password">
                        </div>

                        <button type="submit" class="btn btn-primary c-button">Login</button>

                    </form>
                </div>

                <div v-else>
                    <h2>Sign Up</h2>

                    <form @submit.prevent="submitform" novalidate>
                       
                        <div class="alert alert-danger" id="existerror" role="alert" style="display: none">
                            User already exists
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" class="form-control" id="phone" placeholder="Enter phone number" required v-model="phoneno">
                        </div>
                        <div v-if="errors.phonenoerr"  class="alert alert-danger" role="alert" >
                            {{ errors.phonenoerr }}
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>First Name</label>
                                <input type="text" class="form-control" placeholder="First name" v-model="first_name">
                            </div>
                            <div class="form-group col-md-6">
                                <label>Last Name</label>
                                <input type="text" class="form-control" placeholder="Last name" v-model="last_name">
                            </div>
                        </div>
                        <div v-if="errors.nameerr"  class="alert alert-danger" role="alert" >
                            {{ errors.nameerr }}
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" required v-model="email">
                        </div>

                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" id="Password" placeholder="Password" required v-model="password">
                        </div>
                        <div v-if="errors.passworderr"  class="alert alert-danger" role="alert" >
                            {{ errors.passworderr }}
                        </div>

                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="termsandcondition">
                            <label class="form-check-label" for="exampleCheck1">I accept the terms and condition</label>
                        </div>
                        <div v-if="errors.notaccepterr"  class="alert alert-danger" role="alert" >
                            {{ errors.notaccepterr }}
                        </div>
                        <button type="submit" class="btn btn-primary c-button">Signup</button>
                        
                      
                    </form>

                </div>
                    <div class="pointer" v-if="showlogin" @click="swaplogin">Create an Account</div>
                    <div class="pointer" v-else @click="swaplogin">Already have an account?</div>
                </div>

            <div v-if="!showlogin" class="col-md-6">
                Insert an image
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Authenticate',
    data() {
        return {
            first_name: '',
            last_name: '',
            name: this.first_name + this.last_name,
            termsandcondition: false,
            phoneno: '',
            password: '',
            email:'',
            usertype: '',
            errors: {nameerr: '',
                    phonenoerr: '',
                    passworderr: '',
                    notaccepterr: ''},
            showlogin: true
        }
    },
    methods: { 
        swaplogin() {
            this.showlogin = !this.showlogin
            this.phoneno = ''
            this.password = ''
        }, 
        submitform() {
    
            this.errors.nameerr = this.first_name === '' && this.last_name === '' ? 'Please include your name': ''
            this.errors.phonenoerr = this.phoneno.length !== 10 ? 'Please Enter a valid number': ''
            this.errors.passworderr = this.password.length < 8 ? 'Password must contain atleast 8 characters': ''
            this.errors.notaccepterr = this.termsandcondition == false ? 'Accept the Terms and Condition' : ''
            $('.alert').alert() //Bootstrap toast

            if (!this.errors.nameerr && 
                !this.errors.phonenoerr && 
                !this.errors.passworderr &&
                !this.errors.notaccepterr ) {
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
        },
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
.pointer {
    cursor: pointer;
    text-align: left;
    margin-top:10px;

}
.c-error {
    border-radius: 5px;
    background-color: rgb(255, 73, 73);
    color:rgb(255, 255, 255);
    width: 80%;
}


.container {
    background-color: rgb(229, 231, 236);
    border-radius: 10px;
    padding-left: 8%;
}

form {
    text-align: left;
    margin-top: 50px;
}
/*
label {
    text-align: left;
}
input {
    width: 100%;
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
}*/
</style>

