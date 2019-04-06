<template>
  <v-card>
    <v-card-title
      class="headline"
      v-text="title"
    />

    <v-card-text
      class="subheading"
      v-text="subtitle"
    />

    <v-list>
      <v-list-tile
        v-for="slang in slangs"
        :key="slang.id"
        :to="slang.link"
      >
        <v-list-tile-content>
          <v-list-tile-title v-text="slang.title" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import {
  mapState,
  mapActions,
} from 'vuex';

export default {
  name: 'SlangsList',
  data: () => ({
    title: 'Сленг',
    subtitle: 'Сленг и подобные явления',
  }),
  computed: {
    ...mapState('slangs', ['slangs']),
  },
  methods: {
    ...mapActions('slangs', ['fetchSlangs']),
  },
  mounted() { this.fetchSlangs(); },
};
</script>

<style scoped>

</style>
