const app = Vue.createApp({
    template: '',
    data(){
        return{
            firstName: 'John',
            lastName: 'Doe',
            email:'johndoe1@gmail.com',
            picture: 'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
            gender:"male"

        }
    },
    methods: {
        async getUser(){
            try {
                const res= await fetch('https://randomuser.me/api')
                const {results} =await res.json();
                console.log(results)

                this.firstName = results[0].name.first;
                this.lastName = results[0].name.last;
                this.email = results[0].email;
                this.gender = results[0].gender;
                this.picture = results[0].picture.large;
            } catch (error) {
                console.log(error)   
            }
            
        }
    }
})

app.mount('#app')