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

        <v-layout row wrap>
          <v-flex xs6>
            <v-card>
              <v-card-title>Пример распределения таксонов по уровням</v-card-title>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs2>макросемья, фила</v-flex>
                  <v-flex xs10>ностратическая макросемья</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>семья</v-flex>
                  <v-flex xs10>индоевропейская</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>подсемья</v-flex>
                  <v-flex xs10>«европейская»</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>надветвь</v-flex>
                  <v-flex xs10>&nbsp;</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>зона</v-flex>
                  <v-flex xs10>&nbsp;</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>подзона</v-flex>
                  <v-flex xs10>&nbsp;</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>ветвь</v-flex>
                  <v-flex xs10>балто-славянская</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>подветвь</v-flex>
                  <v-flex xs10>&nbsp;</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>группа</v-flex>
                  <v-flex xs10>славянская</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>подгруппа</v-flex>
                  <v-flex xs10>восточнославянская</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>подподгруппа</v-flex>
                  <v-flex xs10>&nbsp;</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>микрогруппа</v-flex>
                  <v-flex xs10>&nbsp;</v-flex>
                </v-layout>
                <hr />
                <v-layout row wrap>
                  <v-flex xs2>
                    <ul>
                      <li>язык</li>
                      <li>кластер</li>
                    </ul>
                  </v-flex>
                  <v-flex xs8>русско-белорусский кластер</v-flex>
                  <v-flex xs2>1 уровень [89-95% совпадений между составляющими]</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>
                    <ul>
                      <li>наречие</li>
                      <li>язык</li>
                    </ul>
                  </v-flex>
                  <v-flex xs8>южнорусское наречие</v-flex>
                  <v-flex xs2>2 уровень [95-99%]</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>диалект</v-flex>
                  <v-flex xs8>московская группа говоров</v-flex>
                  <v-flex xs2>3 уровень [99-100%]</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs2>говор</v-flex>
                  <v-flex xs8>московский городской</v-flex>
                  <v-flex xs2>4 уровень</v-flex>
                </v-layout>
              </v-container>
            </v-card>
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
