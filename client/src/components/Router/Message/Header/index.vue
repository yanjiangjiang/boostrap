<template>
<div class="message-header">
        <el-steps :active="active" finish-status="finish">
                <el-step title="门店信息"></el-step>
                <el-step title="资质信息"></el-step>
                <el-step title="完成"></el-step>
        </el-steps>

<!--------------------------第一页------------------------------------------------------  -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"    class="demo-ruleForm" v-if="this.active=='1'">
                <el-form-item label="门店名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="外卖电话" prop="iphone">
                    <el-input v-model="ruleForm.iphone"></el-input>
                </el-form-item>
                
                          <el-form-item label="门店分类" prop="iphone">
                              <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                  </el-select>
                </el-form-item>    
                          <el-form-item>
                              <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
        </el-form>
<!--------------------------第二页------------------------------------------------------  -->
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"    class="demo-ruleForm" v-else-if="this.active=='2'">
              <el-form-item label="个人QQ" prop="qq">
                  <el-input v-model="ruleForm.qq"></el-input>
              </el-form-item>
              <el-form-item label="注册资金" prop="money">
                  <el-input v-model="ruleForm.money"></el-input>
              </el-form-item>      
              <el-form-item label="网站" prop="http">
                  <el-input v-model="ruleForm.http">
                      <template slot="prepend">Http://</template>
                  </el-input>
              </el-form-item>        
                       
                   
              <el-form-item>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
        </el-form>
 <!-- ----------------------------第三页-------------------------------------------- -->

            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"    class="demo-ruleForm" v-else-if="this.active=='3'">
              <el-form-item label="身份证号码" prop="library">
                  <el-input v-model="ruleForm.library"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="bigName">
                  <el-input v-model="ruleForm.bigName"></el-input>
              </el-form-item>      
              <el-form-item label="性别" prop="sex">
                  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in sex"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                    
                 
              </el-form-item>        
                       
                   
              <el-form-item>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
    <!------------------------------------------------------------------------------  -->

<el-button style="margin-top: 12px;" @click="next" class="but">下一步</el-button>




</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      active: 1,
      ruleForm: {
        name: "",
        iphone: "",
        qq: "",
        money: "",
        http: "",
        library: "",
        bigName:"",
        radio: 1
      },
      sex: [
        {
          value: "选项1",
          label: "男"
        },
        {
          value: "选项2",
          label: "女"
        }
      ],
      value: "",
      rules: {
        name: [
          { required: true, message: "请输入门店名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        iphone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { min: 11, max: 11, message: "长度为11个字符", trigger: "blur" }
        ],
        qq: [
          { required: true, message: "请输入QQ号码", trigger: "blur" },
          { min: 9, max: 11, message: "长度为9-11个字符", trigger: "blur" }
        ],
        money: [
          { required: true, message: "请输入注册资金", trigger: "blur" },
          { min: 1, max: 2, message: "长度为1-10w", trigger: "blur" }
        ],

        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {
    ...mapState(["options"])
  },
  methods: {
    next() {
      if (this.active++ > 2) {
        alert("已经填完，即将跳回主页");
        this.$router.push("/home");
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.message-header {
  width: 80%;
  height: auto;
  margin: 100px auto;
}
.el-steps {
  margin-bottom: 50px;
}
</style>


