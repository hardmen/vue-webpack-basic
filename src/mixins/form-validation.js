import validator, { validateFormFields } from '@/utils/validators/rules-validation';

// 校验表单是否通过校验
export const mixinValidateForm = {
  methods: {
    async validateForm() {
      Object.keys(this.form).forEach((prop) => {
        if (typeof this.form[prop] === 'string') {
          // 去掉首尾空格
          // 防止XSS攻击（html方面）
          this.form[prop] = this.form[prop]
            .trim()
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        }
      });

      try {
        await validateFormFields(this.$refs.form);
        this.$emit('validate', this.form);
        return this.form;
      } catch (err) {
        console.warn(err);
        throw new Error('Form validation was failed.');
      }
    },
    resetFields() {
      this.$refs.form.resetFields();
    },
  },
};

// 校验表单中特定的field有没有通过校验；校验成功，返回其值
export const mixinValidateFormField = {
  methods: {
    validateFormField(field, value) {
      this.$refs.form.validate((valid, invalidFields) => {
        // 判断该属性是否在校验失败的field对象里面，如果校验通过则通知父组件
        if (!invalidFields[field]) this.$emit('validate-field', { field, value });
      });
    },
  },
};

// 校验再次输入的密码是否与上一次相同
export const mixinCheckPasswordAsPrevious = {
  data() {
    const validatePasswordConfirm = (rule, value, callback) => {
      if (value !== this.form.pass) {
        return callback(new Error('This password does not match the other password you entered.'));
      }
      return callback();
    };

    return {
      form: {
        pass: '',
        passwordConfirm: '',
      },
      rules: {
        passwordConfirm: [
          validator.requirement(),
          validator.charLengthMini(6, 20),
          { validator: validatePasswordConfirm },
        ],
      },
    };
  },
  methods: {
    // 当密码框输入变化时，要校验密码确认内容
    // （此监听方法需添加到 password 上）
    handlePasswordChange() {
      if (this.form.passwordConfirm) this.$refs.form.validateField('passwordConfirm');
    },
  },
};
