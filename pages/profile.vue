<template>
  <div class="app">
    <b-form-group  label="Your Country:" >
      <b-form-input
        v-model="country"
        required
        placeholder="Enter country"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="setCountry">Save</b-btn>
  </div>
</template>

<script>
  export default {
    name: 'pagePrifile',
    methods: {
      setCountry () {
        this.$store.commit('profile/set_country', this.country)
        localStorage.country = this.country
      }
    },
    data(){
      return {
        country: 'USA'
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.country != localStorage.country) {
        if (confirm('Данные не сохранены, хотите покинуть страницу?')) {
          next()
        }
      } else {
        next()
      }
    }
  }
</script>
