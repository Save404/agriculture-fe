<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">
      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <div class="postInfo-container">
              <el-row>
                <el-col :span="12">
                  <el-form-item style="margin-bottom: 40px;" prop="title">
                    <MDinput name="name" v-model="postForm.noticeTitle" required :maxlength="100">
                      标题
                    </MDinput>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label-width="60px" label="重要性:" class="postInfo-container-item">
                    <el-rate style="margin-top:8px;" v-model="postForm.noticeLevel" :max='3' :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :low-threshold="1" :high-threshold="3">
                    </el-rate>
                  </el-form-item>
                </el-col>
                <el-col :span="2" v-if="fromEditButton||!fromDetailButton">
                  <el-button style="transform: translateY(2.4em);" type="primary" @click="releaseNotice" size="large">{{msg}}</el-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-form-item style="margin-bottom: 40px;">
          <div class="editor-container">
            <tinymce :height="300" v-model="postForm.noticeContent" />
          </div>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MDinput from '@/components/MDinput'
import Tinymce from '@/components/Tinymce'
import { noticeAdd, noticeDetail, noticeModify } from '@/api/notice'
export default {
  components: { MDinput, Tinymce },
  props: {
    fromEditButton: {
      type: Boolean,
      default: false
    },
    fromDetailButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      msg: '发布',
      postForm: {
        createTime: '',
        noticeId: '',
        noticeTitle: '',
        departmentName: '',
        noticeLevel: 0,
        noticeContent: ''
      },
      rules: {}
    }
  },
  created () {
    if (this.fromEditButton) {
      this.msg = '保存'
      const id = this.$route.params.id
      noticeDetail(id)
        .then(res => {
          for (const item in this.postForm) {
            this.postForm[item] = res[item]
          }
        })
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
    releaseNotice () {
      if (!this.fromEditButton) {
        noticeAdd(this.postForm.title, this.postForm.content, this.postForm.level)
          .then((res) => {
            this.$message({ message: '公告发布成功', type: 'success' })
            this.$router.push({ name: 'dashboard' })
          })
          .catch(() => {})
      } else {
        console.log(this.postForm)
        console.log(this.$route.params.id)
        noticeModify(this.$route.params.id, this.postForm.noticeTitle, this.postForm.noticeContent, this.postForm.noticeLevel)
          .then(res => {
            this.$message({ message: '公告更新成功', type: 'success' })
            this.$router.push({ name: 'noticeList' })
          })
      }
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
        transform: translateY(2.4em);
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
