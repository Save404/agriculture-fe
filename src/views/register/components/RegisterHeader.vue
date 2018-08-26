<template>
  <div class="register-header">
    <h1>{{role}}注册</h1>
  </div>
</template>
<script>
export default {
  props: ['role']
}
</script>
<style scoped>
.register-header {
  position: absolute;
  padding: 50px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
</style>
