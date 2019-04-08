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

    <dl v-if="dictionary.items">
      <template
        v-for="(item, itemId) in dictionary.items"
      >
        <dt :key="`word-${itemId}`">{{item.word}}</dt>
        <dd
          :key="`definition-${itemId}`"
        >
          {{item.definition}}
          <dl v-if="item.subitems">
            <template v-for="(subitem, subitemId) in item.subitems">
              <dt :key="`word-${itemId}-${subitemId}`">{{subitem.word}}</dt>
              <dd :key="`definition-${itemId}-${subitemId}`">{{subitem.definition}}</dd>
            </template>
          </dl>
        </dd>
      </template>
    </dl>
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
  dl {
    /* padding: 0; */
  }
  dl dt {
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
    margin-top: 16px;
    padding: 0;
  }
  dl dd {
    margin-bottom: 16px;
    padding: 0 16px;
  }
</style>
