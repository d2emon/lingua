<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h1>{{selected.name}}</h1>
        </v-card-title>
        <v-scroll-y-transition mode="out-in">
          <v-container
            fluid
            grid-list-lg
          >
            <v-layout
              justify-space-between
              pa-3
            >
              <v-flex xs3>
                <v-list subheader>
                  <!-- v-subheader>Recent chat</v-subheader -->
                  <v-list-tile
                    v-for="child in selected.children"
                    :key="child.slug"
                    :to="`/groups/${child.slug}`"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title v-html="child.name"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex
                d-flex
                text-xs-center
              >
                <language-family
                  :family="selected"
                />
              </v-flex>
            </v-layout>

          </v-container>
        </v-scroll-y-transition>

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
  name: 'LanguageGroup',
  props: [
    'group',
  ],
  components: {
    LanguageFamily: () => import('@/components/LanguageFamily'),
  },
  computed: {
    ...mapState('groups', ['selected']),
  },
  methods: {
    ...mapActions('groups', ['selectGroup']),
  },
  watch: {
    group: 'selectGroup',
  },
  mounted() { this.selectGroup(this.group); },
};
</script>

<style scoped>

</style>
