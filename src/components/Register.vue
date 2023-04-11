<template>
    <div class="d-flex align-center flex-column">
    <h1 class="display-2 font-weight-bold mb-2 primary--text">
          <br> CREA UNA CUENTA <br>
    </h1>
    <v-card
      class="mx-auto"
      width="600"
      title="User Registration"
    >
    <v-form
        v-model="form"
        @submit.prevent="onSubmit"
        >
      <v-container>
        <v-text-field
          v-model="name"
          :rules="[v => !!v || 'Campo obligatorio']"
          color="primary"
          label="Nombre completo"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="id"
          :rules="[v => !!v || 'Campo obligatorio']"
          color="primary"
          label="Matricula"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="email_inst"
          :rules="[v => /.+@.+\..+/.test(v) || 'Email no valido',]"
          color="primary"
          label="Correo institucional"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="[v => /.+@.+\..+/.test(v) || 'Email no valido',]"
          color="primary"
          label="Correo personal"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          :rules="[v => v.length >=6 || 'Minimo 6 caracteres']"
          type="password"
          color="primary"
          label="Contraseña"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="conf_password"
          :rules="[v => v.length >=6 || 'Minimo 6 caracteres']"
          type="password"
          color="primary"
          label="Confirma tu ontraseña"
          variant="underlined"
        ></v-text-field>
  
        <v-checkbox
          v-model="terms"
          :rules="[v => !!v || 'Debes aceptar para continuar!']"
          color="secondary"
          label="Acepto los términos y condiciones"
        ></v-checkbox>
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="primary" @click="onSubmit"
                  :disabled="!form"
                  block>
          Registrarse
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
      </v-form>
    </v-card>
    </div>
  </template>

<script>
import firebase from 'firebase';
export default {
  data: () => ({
    name: null,
    id: null,
    email_inst: null,
    email: null,
    password: null,
    conf_password: null,
    terms: false,
  }),

  methods: {
     async onSubmit () {
        if (!this.form) return
        if(this.form){
          await firebase.auth().createUserWithEmailAndPassword(this.email_inst,this.conf_password)
          const img = await firebase.storage().ref('user.juan.jpeg').getDownloadURL().catch((error) => {alert(error.message)})
          await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
            'nombre':this.name,
            'matricula':this.id,
            'email':this.email,
            'email_inst':this.email_inst,
            'imagen':img
          }).catch((error) => {alert(error.message)})
          console.log(firebase.auth().currentUser.uid)
          this.$router.push("/")
          
        }
        setTimeout(() => (this.loading = false), 2000)
      },
      
    },
}
</script>