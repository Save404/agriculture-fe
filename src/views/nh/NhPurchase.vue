<template>
  <div class="components-container">
    <h2>原料购买</h2>
    <div class="editor-container">
      <markdown-editor id="contentEditor" ref="contentEditor" v-model="content" :height="400" :zIndex="20"></markdown-editor>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
const content = `hello,world`
export default {
  components: { MarkdownEditor },
  data() {
    return {
      content: content,
      html: ''
    }
  }
}
</script>
