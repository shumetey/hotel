<template>
  <div id="home">

    <carousel :autoplay="true" :nav="false" caption="Blank Image" img-blank img-alt="Blank image">
    <template slot="prev"></template>
    <img src="https://placeimg.com/200/200/any?1">
    <img src="https://placeimg.com/200/200/any?2">
    <img src="https://placeimg.com/200/200/any?3">
    <img src="https://placeimg.com/200/200/any?4">
    <template slot="next"></template>
    </carousel>

    </div>
</template>

<script>
// import { BCarousel } from 'bootstrap-vue'
// Vue.component('b-carousel', BCarousel)
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },
}
</script>