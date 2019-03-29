<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h3>Языковые семьи</h3>
        </v-card-title>
        <v-layout
          justify-space-between
          pa-3
        >
          <v-flex xs4>
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
          <v-flex
            d-flex
            text-xs-center
          >
            <v-scroll-y-transition mode="out-in">
              <v-container
                fluid
                grid-list-lg
              >
                <div
                  v-if="!selected"
                  class="title grey--text text--lighten-1 font-weight-light"
                  style="align-self: center;"
                >
                  Выберите язык
                </div>

                <language-family
                  v-else
                  :family="selected"
                />
             </v-container>
            </v-scroll-y-transition>
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
  components: {
    LanguageFamily: () => import('@/components/LanguageFamily'),
  },
  data: () => ({
    active: [],
    open: [],
    avatar: null,
  }),

  computed: {
    ...mapState('groups', [
      'groups',
      'selected',
    ]),
  },
  watch: {
    active: 'selectGroup',
  },
  methods: {
    ...mapActions('groups', [
      'selectGroup',
      'fetchGroups',
      'fetchSubgroups',
    ]),
  },
  mounted() { this.fetchGroups(); },
};
</script>

<style scoped>

</style>
