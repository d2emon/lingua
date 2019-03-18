<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-layout
          justify-space-between
          pa-3
        >
          <v-flex xs5>
            <v-treeview
              :active.sync="active"
              :items="items"
              :load-children="fetchGroups"
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
                  mdi-account
                </v-icon>
              </template>
            </v-treeview>
          </v-flex>
          <v-flex
            d-flex
            text-xs-center
          >
            <v-scroll-y-transition mode="out-in">
              <div
                v-if="!selected"
                class="title grey--text text--lighten-1 font-weight-light"
                style="align-self: center;"
              >
                Select a User
              </div>
              <v-card
                v-else
                :key="selected.id"
                class="pt-4 mx-auto"
                flat
                max-width="400"
              >
                <v-card-text>
                  <v-avatar
                    v-if="avatar"
                    size="88"
                  >
                    <v-img
                      :src="`https://avataaars.io/${avatar}`"
                      class="mb-4"
                    ></v-img>
                  </v-avatar>
                  <h3 class="headline mb-2">
                    {{ selected.name }}
                  </h3>
                  <div class="blue--text mb-2">{{ selected.email }}</div>
                  <div class="blue--text subheading font-weight-bold">{{ selected.username }}</div>
                </v-card-text>
                <v-divider></v-divider>
                <v-layout
                  tag="v-card-text"
                  text-xs-left
                  wrap
                >
                  <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Company:</v-flex>
                  <v-flex>{{ selected.company.name }}</v-flex>
                  <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Website:</v-flex>
                  <v-flex>
                    <a :href="`//${selected.website}`" target="_blank">{{ selected.website }}</a>
                  </v-flex>
                  <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Phone:</v-flex>
                  <v-flex>{{ selected.phone }}</v-flex>
                </v-layout>
              </v-card>
            </v-scroll-y-transition>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {
  fetchGroups,
  fetchUsers,
  pause
} from '../services';

export default {
  name: 'GroupsList',
  data: () => ({
    active: [],
    avatar: null,
    open: [],
    groups: [],
  }),

  computed: {
    items() {
      return [
        {
          name: 'Группы языков',
          children: this.groups,
        },
      ];
    },
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];
      return this.groups.find(group => group.id === id);
    },
  },

  methods: {
    async fetchGroups(item) {
      console.log(item)
      await pause(1500);
      return Promise.all([
        fetchUsers(),
        fetchGroups(),
      ])
        .then(([users, groups]) => ([
          ...users,
          ...groups,
        ]))
        .then((groups) => {
          console.log(groups);
          this.groups = groups;
        });
    },
  },
};
</script>

<style scoped>

</style>
