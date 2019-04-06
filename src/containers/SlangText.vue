<template>
  <v-container>
    <slang
      v-if="slang"
      :slang="slang"
    />
    <v-card v-else>
      <v-card-title primary-title>
        <h1 class="headline">Сленг не найден</h1>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import {
  mapState,
  mapActions,
} from 'vuex';

export default {
  name: 'SlangText',
  components: {
    Slang: () => import('@/components/Slang.vue'),
  },
  props: [
    'slangId',
  ],
  computed: {
    ...mapState('slangs', [
      'slangs',
      'slang',
    ]),
  },
  methods: {
    ...mapActions('slangs', ['selectSlang']),
  },
  watch: {
    slangId: 'selectSlang',
  },
  mounted() { this.selectSlang(this.slangId); },
};
</script>

<style scoped>

</style>
