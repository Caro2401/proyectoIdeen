<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-2 primary--text">
          INFORMACIÓN DEL ALUMNO
        </h1>
        
        <v-img
          :src="require('../assets/imagen.jpeg')"
          class="pa-6 bg-secondary rounded-circle d-inline-block"
          contain
          
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-2" cols="5">
        <p class="subheading font-weight-bold primary--text">
          Nombre Completo
        </p>
        <p class="subheading font-weight-regular">
          {{user.nombre}}
        </p>
      </v-col>
      <v-col class="mb-2" cols="1">
        <p class="subheading font-weight-bold primary--text">
          Matrícula
        </p>
        <p class="subheading font-weight-regular">
          {{user.matricula}}
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-2" cols="5">
        <p class="subheading font-weight-bold primary--text">
          Correo institucional
        </p>
        <p class="subheading font-weight-regular">
          {{user.email_inst}}
        </p>
      </v-col>
      <v-col class="mb-2" cols="1">
        <p class="subheading font-weight-bold primary--text">
          Carrera
        </p>
        <p class="subheading font-weight-regular">
          ITC
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="mb-2" cols="6">
        <p class="subheading font-weight-bold primary--text">
          Correo Personal
        </p>
        <p class="subheading font-weight-regular">
          {{user.email}}
        </p>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import firebase from 'firebase';
  export default {
    name: 'HelloWorld',

    async created(){
      this.user= await this.getuser()
    },

    data(){
      return{
        user:null
      }
    },
   methods:{
    async getuser(){
      const user = await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
      return user.data()
    }
    }
  }
</script>
