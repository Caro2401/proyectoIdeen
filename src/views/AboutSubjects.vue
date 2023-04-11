<template>
  <div class="d-flex align-center flex-column">
    <h1 class="display-2 font-weight-bold mb-2 primary--text">
          <br> MATERIAS INSCRITAS
    </h1>

    <div class="align-center">
    <v-container v-for="(dataDialog,index) in dataDialog" :key="index">
    <v-card width="800">
      <v-card-item>
        <v-card-title class="primary--text">{{dataDialog.nombre}}</v-card-title>

        <v-card-subtitle>Profesor: {{dataDialog.profe}}</v-card-subtitle>
      </v-card-item>

      <v-card-actions>
        <v-dialog v-model="dialog[dataDialog.nombre]" width="500">
              <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="body-2 font-weight-bold primary--text">
                    Ver Detalles
                  </v-btn>
                </template>
              
                <v-card>
                  <v-card-title class="primary--text">
                    {{dataDialog.nombre}}
                  </v-card-title>
                  <v-card-text>
                    <p>Profesor:{{dataDialog.profe}}</p>
                    <p>Salon:{{dataDialog.salon}}</p>
                    <p>Fecha:{{dataDialog.dias}}</p>
                    <p>Horario:{{dataDialog.horario}}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn class="primary--text" block @click="dialog[dataDialog.nombre] = false"> Cerrar </v-btn>
                  </v-card-actions>
                </v-card>

              </v-dialog>
      </v-card-actions>
    </v-card>
  </v-container>
  </div>
  </div>
</template>

<script>
import { dataDialog } from "@/components/dataDialog";
  export default {
    name: "dataDialog",
    data(){
      return{
        dataDialog:dataDialog,
        dialog:{},
      }
    },
   methods:{
    }
  }
</script>