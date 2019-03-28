<template>
  <v-card>
    <v-card-title>
      <h3>{{ family.name }}</h3>
    </v-card-title>

    <v-layout
      tag="v-card-text"
      wrap
    >
      <template v-if="family.taxon">
        <v-flex tag="strong" xs4>Таксон:</v-flex>
        <v-flex xs8>{{ family.taxon }}</v-flex>
      </template>
      <template v-if="family.areal">
        <v-flex tag="strong" xs4>Ареал:</v-flex>
        <v-flex xs8>{{ family.areal }}</v-flex>
      </template>
      <template v-if="family.speakers">
        <v-flex tag="strong" xs4>Количество носителей:</v-flex>
        <v-flex xs8>{{ family.speakers }}</v-flex>
      </template>
      <template v-if="family.age">
        <v-flex tag="strong" xs4>Время разделения:</v-flex>
        <v-flex xs8>{{ family.age }}</v-flex>
      </template>

      <v-flex
        v-if="family.motherland"
        xs12
      >
        <v-card>
          <v-card-title tag="h4">Прародина</v-card-title>
          <v-img :src="family.motherland.src" />
          <v-card-text>{{ family.motherland.text }}</v-card-text>
        </v-card>
      </v-flex>

      <v-flex
        v-if="family.classification"
        xs12
      >
        <v-card>
          <v-card-title>
            <h4>Классификация</h4>
          </v-card-title>
          <ul>
            <li v-for="item in family.classification">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </v-card>
      </v-flex>
      <v-flex
        v-if="family.codes"
        xs12
      >
        <v-card>
          <v-card-title>
            <h4>Коды языковой группы</h4>
          </v-card-title>
          <ul>
            <li v-for="item in Object.keys(family.codes)">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'LanguageSummary',
  props: [
    'family',
  ],
};
</script>

<style scoped>

</style>
