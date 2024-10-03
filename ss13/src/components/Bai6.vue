<template>
  <div class="text-center pa-4">
    <h1>Bai 6</h1>
    <v-dialog
      v-model="dialog"
      max-width="400"
      persistent
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          XÁC NHẬN
        </v-btn>
      </template>

      <v-card
        prepend-icon="mdi-map-marker"
        text="Bạn có xác nhận làm mới dữ liệu không?nếu có dữ liệu sẽ đc cập nhật"
        title="XÁC NHẬN"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="dialog = false">
            XÁC NHẬN
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>