<template>
  <div class="app">
    <b-form-group  label="Your Name:" >
      <b-form-input
        v-model="name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        v-model="surname"
        required
        placeholder="Enter Familia"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="saveUser">Save</b-btn>
  </div>
</template>

<script>
  export default {
    name: 'pageUser',
    methods: {
      saveUser () {
        this.$store.commit('user/set_name', this.name)
        this.$store.commit('user/set_surname', this.surname)	
        localStorage.name = this.name
        localStorage.surname = this.surname
      }
    },    
    data(){
      return{
        name: '',
        surname:''
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.name != localStorage.name || this.surname != localStorage.surname) {
        if (confirm('Данные не сохранены, хотите покинуть страницу?')) {
          next()
        }
      } else {
        next()
      }
    }    
  }
</script>
