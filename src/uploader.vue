<template>
  <div>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: "uploader",
    components: {},
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    destroyed() {
    }
  }
</script>

<style lang="less">

</style>