<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h3>Классификация языков</h3>
        </v-card-title>
        <v-layout
          justify-space-between
          pa-3
        >
          <v-flex xs12>
            <v-treeview
              :active.sync="active"
              :items="groups"
              :load-children="fetchSubgroups"
              :open.sync="open"
              activatable
              active-class="primary--text"
              class="grey lighten-5"
              open-on-click
              transition
              expand-icon="mdi-chevron-down"
              loading-icon="mdi-loading"
            >
              <template v-slot:prepend="{ item, active }">
                <v-icon
                  v-if="!item.children"
                  :color="active ? 'primary' : ''"
                >
                  mdi-translate
                </v-icon>
              </template>
              <template v-slot:label="{ item }">
                <router-link :to="`/groups/${item.slug}`">{{ item.name }}</router-link>
              </template>
              <template v-slot:append="{ item }">
                <v-icon
                  v-if="item.dead"
                  color="error"
                >
                  mdi-skull
                </v-icon>
              </template>
            </v-treeview>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {
  mapState,
  mapActions,
} from 'vuex';

export default {
  name: 'GroupsList',
  data: () => ({
    active: [],
    open: [],
    avatar: null,
  }),

  computed: {
    ...mapState('groups', [
      'groups',
    ]),
  },
  watch: {
    active: 'selectGroups',
  },
  methods: {
    ...mapActions('groups', [
      'selectGroups',
      'fetchGroups',
      'fetchSubgroups',
    ]),
  },
  mounted() { this.fetchGroups(); },
};
</script>

<style scoped>

</style>
