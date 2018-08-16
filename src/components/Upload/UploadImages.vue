<template>
  <div>
    <el-upload class="upload-demo" action="http://localhost:8080/upload/images" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :on-success="uploadSuccess" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList" enctype="multipart/form-data">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div>
      <el-button type="text" @click="up">Load</el-button>
    </div>
  </div>
</template>
<script>
import { uploadImage } from '@/api/upload'
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
      this.fileList.push(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    uploadSuccess(res, file, fs) {
      console.log(this.fileList)
      console.log(res, file, fs)
      this.$message({ message: 'ok' })
    },
    up() {
      console.log(this.fileList)
      uploadImage(this.fileList)
        .then(res => {
          console.log(res)
        })
    }
  }
}

</script>
