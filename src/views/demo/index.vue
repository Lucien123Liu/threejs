<template>
  <div :id="domId"></div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { generateChar } from "@/common/util";
import Template from "./Template/Template.ts";
import { onMounted } from "@vue/runtime-core";
import { addModel } from "./UI/AddModel";

export default {
  setup() {
    const domId = ref(generateChar());
    onMounted(() => {
      const web3D = new Template(document.getElementById(domId.value));
      web3D.init()
      console.log(web3D)
      addModel(web3D)
    });
    return {
      domId,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
