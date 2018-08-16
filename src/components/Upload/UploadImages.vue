<template>
  <div>
    <el-upload :action="importFileUrl" :data="upLoadData" name="importfile" :onError="uploadError" :onSuccess="uploadSuccess" :beforeUpload="before" enctype="multipart/form-data">
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <el-button type="text" @click="up">upppp</el-button>
  </div>
</template>
<script>
import { uploadImage } from '@/api/upload'
export default {
  data() {
    return {
      importFileUrl: 'http://localhost:8080/upload/images/',
      upLoadData: {
        images: []
      }
    }
  },
  methods: {
    uploadSuccess(response, file, fileList) {
      console.log('上传文件', response, file, fileList)
    },
    // 上传错误
    uploadError(response, file, fileList) {
      console.log('上传失败，请重试！')
    },
    before(file) {
      this.upLoadData.images.push(file)
      console.log(this.upLoadData.images)
    },
    done(res, file, fs) {
      console.log(this.fileList)
      console.log(res, file, fs)
      this.$message({ message: 'OK' })
    },
    up() {
      uploadImage(this.upLoadData.images)
        .then(res => {
          console.log(res)
        })
    }
  }
}

</script>
