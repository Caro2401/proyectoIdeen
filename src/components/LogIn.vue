<template>
  <div class="d-flex align-center flex-column">
    <h1 class="display-2 font-weight-bold mb-2 primary--text">
          <br> INICIAR SESIÓN <br>
    </h1>
  
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" width="600">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :rules="[v => !!v || 'Campo obligatorio']"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="[v => !!v || 'Campo obligatorio']"
          type="password"
          clearable
          persistent-counter
          label="Password"
          placeholder="Contraseña"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          @click="onSubmit"
        >
          Iniciar sesión
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</div>
</template>

<script>
import firebase from 'firebase'
  export default {
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
    }),

    methods: {
      async onSubmit () {
        if (!this.form) return
        if(this.form){
          await firebase.auth().signInWithEmailAndPassword(this.email,this.password).catch((error) => {alert(error.message)})
          await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({
            last_login: firebase.firestore.FieldValue.serverTimestamp()
          })
          this.$router.push("/home")
        }
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>