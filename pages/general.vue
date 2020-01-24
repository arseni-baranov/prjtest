<template>
    <div class="app mt-5">
        <b-form-group v-for="(value, key) in userParent" :key="key" :label=changeCaseFirstLetter(key) >
            <b-form-input
                required
                :placeholder=value
                @change="update(userParent, key, $event)"
            ></b-form-input>
        </b-form-group>
        <b-btn variant="primary" @click="set_parent">Сохранить данные</b-btn>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'general',
    data() {
        return {
            userParent: this.$store.getters.userParent
        }
    },
    methods: {
        update: function(obj, prop, event) {
            this.$set(obj, prop, event)
        },
        set_parent: function() {
            this.$store.commit('user/set_parent', this.userParent)
        },
        changeCaseFirstLetter: function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}
</script>