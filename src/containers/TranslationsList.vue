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
        v-for="phrase in phrases"
        :key="phrase.id"
        :to="phrase.link"
      >
        <v-list-tile-content>
          <v-list-tile-title v-text="phrase.phrase" />
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
  name: 'TranslationsList',
  data: () => ({
    title: 'На разных языках',
    subtitle: 'Популярные выражения на разных языках мира',
    languages: [],
  }),
  computed: {
    ...mapState('translations', ['phrases']),
  },
  methods: {
    ...mapActions('translations', ['fetchPhrases']),
  },
  mounted() { this.fetchPhrases(); },
};
</script>

<style scoped>

</style>
