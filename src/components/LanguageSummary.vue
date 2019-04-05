<template>
  <v-card flat>
    <v-layout
      tag="v-card-text"
      wrap
    >
      <template v-if="family.taxon">
        <v-flex tag="strong" xs4>Таксон:</v-flex>
        <v-flex xs8>{{ family.taxon }}</v-flex>
      </template>
      <template v-if="family.languagesCount">
        <v-flex tag="strong" xs4>Языков:</v-flex>
        <v-flex xs8>{{ family.languagesCount }}</v-flex>
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
