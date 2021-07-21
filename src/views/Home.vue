<template>
  <demo></demo>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import demo from "./demo/index.vue";

@Options({
  components: {
    demo,
  },
})
export default class Home extends Vue {}
</script>
