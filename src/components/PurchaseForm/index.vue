<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">
      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput name="name" v-model="postForm.title" required :maxlength="100">
                标题
              </MDinput>
            </el-form-item>
            <div class="postInfo-container">
              <el-row>
                <el-col :span="11">
                  <el-form-item label-width="80px" label="联系电话:" class="postInfo-container-item">
                    <el-input style="width: 200px;" v-model="postForm.telephone" placeholder="联系方式"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label-width="60px" label="重要性:" class="postInfo-container-item">
                    <el-rate style="margin-top:8px;" v-model="postForm.importance" :max='3' :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :low-threshold="1" :high-threshold="3">
                    </el-rate>
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                  <el-button type="primary" @click="releasePurchase" size="large">发布</el-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-form-item style="margin-bottom: 40px;">
          <div class="editor-container">
            <markdown-editor id="contentEditor" ref="contentEditor" v-model="postForm.content" :height="300" :zIndex="20"></markdown-editor>
          </div>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MarkdownEditor from '@/components/MarkdownEditor'
import MDinput from '@/components/MDinput'
import { purchaseAdd } from '@/api/purchase'
const content = `hello,world`
export default {
  components: { MarkdownEditor, MDinput },
  props: {
    type: String,
  },
  data() {
    return {
      postForm: {
        author: '',
        basicId: '',
        title: '',
        telephone: '',
        importance: 0,
        content: ''
      },
      rules: {},
    }
  },
  computed: {
    ...mapGetters([
      'basicId',
      'roles',
      'phone'
    ])
  },
  methods: {
    releasePurchase() {
      this.postForm.author = this.phone
      this.postForm.basicId = this.basicId
      const typ = this.type || this.roles[0]
      purchaseAdd(typ, this.postForm)
        .then((res) => {
          console.log(res)
        })
        .catch(() => {})
    }
  }
}

</script>
<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 10px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
    .editor-container {
      min-height: 300px;
      margin: 0 0 30px;
      .editor-upload-btn-container {
        text-align: right;
        margin-right: 10px;
        .editor-upload-btn {
          display: inline-block;
        }
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}

</style>
