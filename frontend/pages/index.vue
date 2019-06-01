<template>
  <v-layout column justify-center>
    <v-flex xs12 sm6 md3>
      <v-card max-width="500px" class="ma-auto pb-5 custom-border">
        <v-card-title
          class="display-1 red--text text--darken-1 font-weight-bold pt-5"
        >
          <p class="text-xs-center ma-auto">サイゼリア<br />N円ガチャ</p>
        </v-card-title>
        <hr class="ma-3" />
        <v-card-text class="text-xs-center">
          <v-btn
            class="custom-button"
            large
            color="primary"
            @click="doGacha(1000)"
            >1000円ガチャを回す</v-btn
          >
          <v-btn
            class="custom-button"
            large
            color="primary"
            @click="doGacha(500)"
            >500円ガチャを回す</v-btn
          >
          <v-btn
            class="custom-button"
            large
            color="primary"
            @click="doGacha(300)"
            >300円ガチャを回す</v-btn
          >
          <v-btn
            class="custom-button"
            large
            color="primary"
            @click="doGacha(1500)"
            >1500円ガチャを回す</v-btn
          >
          <v-btn
            class="custom-button"
            large
            color="primary"
            @click="doGacha(2000)"
            >2000円ガチャを回す</v-btn
          >
          <v-btn
            class="custom-button"
            large
            color="primary"
            @click="doGacha(3000)"
            >3000円ガチャを回す</v-btn
          >
        </v-card-text>
        <v-card-text class="text-xs-center">
          <v-btn to="/healty">バランスの取れた食事がしたい！</v-btn>
        </v-card-text>
        <v-card-text v-if="isButtonPushed">
          <v-container fluid grid-list-lg>
            <v-layout column>
              <v-flex v-for="item in items" :key="item.id">
                <v-card color="#eaf1eb">
                  <v-card-title>
                    <div class="ma-auto">
                      <p
                        class="title mb-2 text-xs-center red--text text--darken-1 font-weight-bold"
                      >
                        {{ item.name }}
                      </p>
                      <p
                        class="subheading text-xs-center grey--text text--darken-1 font-weight-bold ma-0"
                      >
                        {{ item.price }}円 {{ item.calorie }}kcal 塩分{{
                          item.salt
                        }}g
                      </p>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex>
                <v-card color="#c1d7bc">
                  <v-card-title>
                    <div class="ma-auto">
                      <p
                        class="title text-xs-center red--text text--darken-1 font-weight-bold ma-0"
                      >
                        計 {{ totalPrice }}円 {{ totalCalorie }}kcal 塩分
                        {{ totalSalt }}g
                      </p>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { getItemsLimitedPrice } from '~/helpers/menu'

export default {
  components: {},
  data() {
    return {
      items: [],
      isButtonPushed: false
    }
  },
  computed: {
    totalPrice() {
      return this.items.reduce((p, item) => p + item.price, 0)
    },
    totalCalorie() {
      return this.items.reduce((p, item) => p + item.calorie, 0)
    },
    totalSalt() {
      return (
        Math.round(this.items.reduce((p, item) => p + item.salt, 0) * 100) / 100
      )
    }
  },
  async asyncData({ $repository }) {
    const menu = await $repository.getMenu()
    return { menu }
  },
  methods: {
    doGacha(price) {
      this.items = getItemsLimitedPrice(this.menu, price)
      this.isButtonPushed = true
    }
  }
}
</script>

<style scoped>
.custom-border {
  border: 5px double #007c00;
}

.custom-button {
  width: 200px;
}
</style>
