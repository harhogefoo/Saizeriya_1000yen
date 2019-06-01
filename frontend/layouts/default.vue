<template>
  <v-app style="background: #337A20;">
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="#fff">
      <v-content>
        <v-container>
          <span
            >featuring:
            <a href="https://saizeriya-1000yen.herokuapp.com/" target="_blank"
              >サイゼリヤ1000円ガチャ</a
            ></span
          >
        </v-container>
      </v-content>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
