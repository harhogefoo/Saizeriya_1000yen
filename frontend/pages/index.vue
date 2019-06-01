<template>
  <v-layout column justify-center>
    <v-flex xs12 sm6 md3>
      <v-card max-width="500px" class="ma-auto custom-border">
        <v-card-title
          class="headline red--text text--darken-1 font-weight-bold pt-5"
        >
          <p class="text-xs-center ma-auto">サイゼリア<br />1000円ガチャ</p>
        </v-card-title>
        <hr class="ma-3" />
        <v-card-text class="text-xs-center pb-5">
          <v-btn color="primary">ガチャを回す</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.custom-border {
  border: 5px double #007c00;
}
</style>
