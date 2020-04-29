<template>
  <div class="register-success">
    <section>
      <h1 class="title">Registration submitted successfully</h1>

      <p class="main-content">
        New account registration successfully submitted. We will be in touch soon.
      </p>
      <p class="main-content">
        This account requires approval before you can log in and begin using it.
        In the meantime, someone will contact you to answer any questions you have and help
        you learn more about our services.
      </p>
    </section>

    <section>
      <h2 class="subtitle">Contact us:</h2>
      <!-- <p class="contact-message">Telephone Number: 136 2356 2356</p> -->
      <p class="contact-message">Email Address: help@4DSTC.com</p>
    </section>

    <div class="back-button-box">
      <el-button
        type="primary"
        size="medium"
        plain
        @click="$router.push({ name: 'Login' })">Back</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 430px;
  height: 100%;
  margin-right: 80px;

  .title {
    margin-bottom: 30px;
    font-size: 18px;
    text-align: center;
  }
  .main-content {
    line-height: 1.5;
    text-align: justify;
    color: #606060;
  }
  .subtitle {
    margin-top: 40px;
    font-size: 16px;
  }
  .contact-message {
    margin-top: 20px;
    color: #606060;
  }
  .back-button-box {
    margin-top: 30px;
    text-align: right;
  }
}
</style>
