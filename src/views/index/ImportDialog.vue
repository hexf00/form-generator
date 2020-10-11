<template>
  <div>
    <el-dialog title="Dialog Titile" v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="导入类型" prop="type">
          <el-radio-group v-model="formData.type" size="medium">
            <el-radio-button
              v-for="(item, index) in typeOptions"
              :key="index"
              :label="item.value"
              :disabled="item.disabled"
            >
              {{ item.label }}
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="formData.type === 'json'" label="JSON" prop="json">
          <el-input
            v-model="formData.json"
            type="textarea"
            placeholder="请输入JSON"
            :autosize="{ minRows: 4, maxRows: 4 }"
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="formData.type === 'file'" label="文件" prop="file">
          <el-upload ref="file" :file-list="filefileList" :before-upload="fileBeforeUpload">
            <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  inheritAttrs: false,
  props: [],
  data() {
    return {
      formData: {
        type: 'json',
        json: undefined,
        file: null,
      },
      rules: {
        type: [
          {
            required: true,
            message: '导入类型不能为空',
            trigger: 'change',
          },
        ],
        json: [],
      },
      typeOptions: [
        {
          label: 'JSON',
          value: 'json',
        },
        {
          label: '文件',
          value: 'file',
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onOpen() {},
    onClose() {
      this.$refs['elForm'].resetFields();
    },
    close() {
      this.$emit('update:visible', false);
    },
    handelConfirm() {
      this.$refs['elForm'].validate((valid) => {
        if (!valid) return;
        this.close();
      });
    },
  },
};
</script>
<style>
.el-upload__tip {
  line-height: 1.2;
}
</style>
