<template>
  <v-card>
    <v-card-title primary-title>
      <h1
        v-text="slang.title"
      />
    </v-card-title>

    <v-container>
      <v-layout
        row
        wrap
      >
        <v-flex xs6>
          <v-card-text v-html="slang.text" />

          <v-card-text v-html="slang.appendix" />
        </v-flex>
        <v-flex xs6>
          <dictionary
            v-if="slang.dictionary"
            :dictionary="slang.dictionary"
          />
        </v-flex>
      </v-layout>
    </v-container>
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
