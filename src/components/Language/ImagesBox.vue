<template>
  <v-carousel
    delimiter-icon="mdi-stop"
    prev-icon="mdi-arrow-left"
    next-icon="mdi-arrow-right"
  >
    <v-carousel-item
      v-for="(image, id) in images"
      :key="id"
    >
      <v-card light>
        <v-card-title v-if="image.text">{{ image.text }}</v-card-title>
        <a
          :href="image.src"
          target="_blank"
        >
          <v-img :src="image.src" />
        </a>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'ImagesBox',
  props: [
    'images'
  ]
}
</script>

<style scoped>

</style>
