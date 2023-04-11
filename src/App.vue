<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="logo"
          class="shrink mr-2"
          src="@/assets/logoTec.png"
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>
      
      <div v-if="routname=='home' || routname == 'about' ">
      <v-btn text color="white" to="/home">
        Inicio
      </v-btn>
      <v-btn text color="white" to="/about">
        Materias
      </v-btn>
      <v-btn text color="white" @click="logout">
        Salir
      </v-btn>
      </div>

      <div v-if="routname=='register' || routname == 'login' ">
      <v-btn text color="white" to="/register">
        Registro
      </v-btn>
      <v-btn text color="white" to="/">
        Iniciar sesión
      </v-btn>
      </div>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import firebase from 'firebase';
export default {
  name: 'App',

  data: () => ({
    //
  }),

  computed:{
    routname(){
      return this.$route.name
    }
  },
  methods:{
    async logout(){
     await firebase.auth().signOut()
     this.$router.push("/")
  
    }
    }
};
</script>
