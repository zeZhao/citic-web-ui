<style>
.main {
  /*margin: 20px 15px 0 5px;*/
}
.iframe-group {
  width: 100%;
  min-height: 800px;
  border: none;
}
</style>
<template>
  <Card class="main">
    <!-- <p slot="title">明细账单</p> -->
    <iframe :src="iframUrl" class="iframe-group"></iframe>
  </Card>
</template>
<script>
export default {
  data() {
    return {
      iframUrl: "/views/console/detail.jsp"
    };
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>
