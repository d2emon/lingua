<template>
  <v-card>
    <v-card-title primary-title>
      <h1
        v-text="slang.title"
      />
    </v-card-title>

    <v-layout
      row
      wrap
    >
      <v-flex xs6>
        <v-container>
          <v-list v-if="slang.subslangs">
            <v-list-tile
              v-for="subslang in slang.subslangs"
              :key="subslang.id"
              :to="subslang.link"
            >
              <v-list-tile-content>
                <v-list-tile-title v-text="subslang.title" />
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-card-text v-html="slang.text" />

          <v-card v-if="slang.links">
            <v-toolbar>
              <v-toolbar-title>{{slang.links.title}}</v-toolbar-title>
            </v-toolbar>

            <v-list
              v-if="slang.links.items"
              two-line
              subheader
            >
              <v-list-tile
                v-for="item in slang.links.items"
                :key="item.url"
                :href="item.url"
                target="_blank"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.definition }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.url }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>

          <v-card-text v-html="slang.appendix" />
        </v-container>
      </v-flex>
      <v-flex xs6>
        <v-container>
          <dictionary
            v-if="slang.dictionary"
            :dictionary="slang.dictionary"
          />
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'Slang',
  components: {
    Dictionary: () => import('@/components/Dictionary.vue'),
  },
  props: [
    'slang',
  ],
};
</script>

<style scoped>
</style>
