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
                  mdi-folder
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
                  Select a User
                </div>

                <v-card
                  v-else
                  :key="selected.id"
                  class="pt-4 mx-auto"
                  flat
                  max-width="800"
                >
                  <v-card-title>
                    <h3 class="headline mb-2">{{ selected.name }}</h3>
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-layout
                    wrap
                  >
                    <v-flex xs7>
                      <v-layout
                        tag="v-card-text"
                        wrap
                      >
                        <template v-if="selected.taxon">
                          <v-flex tag="strong" xs4 text-xs-right>Таксон:</v-flex>
                          <v-flex xs8>{{ selected.taxon }}</v-flex>
                        </template>
                        <template v-if="selected.areal">
                          <v-flex tag="strong" xs4 text-xs-right>Ареал:</v-flex>
                          <v-flex xs8>{{ selected.areal }}</v-flex>
                        </template>
                        <template v-if="selected.speakers">
                          <v-flex tag="strong" xs4 text-xs-right>Количество носителей:</v-flex>
                          <v-flex xs8>{{ selected.speakers }}</v-flex>
                        </template>
                        <template v-if="selected.age">
                          <v-flex tag="strong" xs4 text-xs-right>Время разделения:</v-flex>
                          <v-flex xs8>{{ selected.age }}</v-flex>
                        </template>
                        <v-flex xs12>
                          <v-avatar
                            v-if="selected.avatar"
                            size="88"
                          >
                            <v-img
                              :src="`https://avataaars.io/${selected.avatar}`"
                              class="mb-4"
                            ></v-img>
                          </v-avatar>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex
                      v-if="selected.motherland"
                      xs5
                    >
                      <v-card>
                        <v-card-title>
                          <h4>Прародина</h4>
                        </v-card-title>
                        <v-card-media :src="selected.motherland.src" />
                        <v-card-text>{{ selected.motherland.text }}</v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>

                  <v-layout
                    tag="v-card-text"
                    text-xs-left
                    wrap
                  >
                    <v-flex
                      v-if="selected.classification"
                      xs4
                    >
                      <v-card>
                        <v-card-title>
                          <h4>Классификация</h4>
                        </v-card-title>
                        <ul>
                          <li v-for="item in selected.classification">
                            <a href="#">{{ item }}</a>
                          </li>
                        </ul>
                      </v-card>
                    </v-flex>
                    <v-flex
                      v-if="selected.contents"
                      xs4
                    >
                      <v-card>
                        <v-card-title>
                          <h4>Состав</h4>
                        </v-card-title>
                        <ul>
                          <li v-for="item in selected.contents">
                            <a href="#">{{ item }}</a>
                          </li>
                        </ul>
                      </v-card>
                    </v-flex>
                    <v-flex
                      v-if="selected.codes"
                      xs4
                    >
                      <v-card>
                        <v-card-title>
                          <h4>Коды языковой группы</h4>
                        </v-card-title>
                        <ul>
                          <li v-for="item in Object.keys(selected.codes)">
                            <a href="#">{{ item }}</a>
                          </li>
                        </ul>
                      </v-card>
                    </v-flex>
                  </v-layout>

                  <v-divider></v-divider>

                  <v-layout
                    v-if="selected.description"
                    tag="v-card-text"
                    text-xs-left
                    wrap
                  >
                    {{selected.description}}
                  </v-layout>

                  <v-divider></v-divider>

                  <v-layout
                    v-if="selected.company"
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
