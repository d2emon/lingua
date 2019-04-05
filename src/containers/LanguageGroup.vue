<template>
  <v-layout row>
    <v-flex xs12>
      <v-scroll-y-transition mode="out-in">
        <language-family
          :family="selected"
          @activate="selectGroups"
          @load="fetchSubgroups"
        />
      </v-scroll-y-transition>
    </v-flex>
  </v-layout>
</template>

<script>
import {
  mapState,
  mapActions,
} from 'vuex';

export default {
  name: 'LanguageGroup',
  props: [
    'group',
  ],
  components: {
    LanguageFamily: () => import('@/components/LanguageFamily.vue'),
  },
  computed: {
    ...mapState('groups', ['selected']),
  },
  methods: {
    ...mapActions('groups', [
      'selectGroup',
      'selectGroups',
      'fetchSubgroups',
    ]),
  },
  watch: {
    group: 'selectGroup',
  },
  mounted() { this.selectGroup(this.group); },
};
</script>

<style scoped>

</style>
