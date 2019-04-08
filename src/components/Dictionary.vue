<template>
  <v-card>
    <v-card-title
      primary-title
      class="title"
      v-text="dictionary.title"
    />

    <v-subheader
      v-if="dictionary.subtitle"
      :href="dictionary.link"
      target="_blank"
    >
      <a
        :href="dictionary.link"
        target="_blank"
      >
        {{dictionary.subtitle}}
      </a>
    </v-subheader>

    <ul v-if="dictionary.items">
      <li
        v-for="(item, key) in dictionary.items"
        :key="key"
      >
        {{item}}
      </li>
    </ul>
  </v-card>

</template>

<script>
export default {
  name: 'Dictionary',
  props: [
    'dictionary',
  ],
};
</script>

<style scoped>

</style>
