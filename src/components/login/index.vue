<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-5 col-lg-3">
        <b-card>
          <b-form @submit="onLogin">
            <b-form-group id="userInputGroup"
                          label="Username:"
                          variant="text-muted"
                          label-for="userInput"
            >
              <b-form-input id="userInput"
                            type="text"
                            v-model="form.user"
                            required
                            placeholder="Enter username">
              </b-form-input>
            </b-form-group>
            <b-form-group id="passwordInputGroup"
                          label="Password:"
                          variant="text-muted"
                          label-for="passwordInput">
              <b-form-input id="passwordInput"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Enter password">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" block>Login</b-button>
          </b-form>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          user: '',
          password: '',
        },
      };
    },
    methods: {
      onLogin(e) {
        e.preventDefault();
        console.log(JSON.stringify(this.form));
        this.$router.push({path: 'trending'});
      },
    },
  };
</script>
<style lang="scss">
  label {
    color: #7e7e7e;
  }
</style>
