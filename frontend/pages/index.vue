<template>
  <v-layout column justify-center>
    <v-flex xs12 sm6 md3>
      <v-card max-width="500px" class="ma-auto pb-5 custom-border">
        <v-card-title
          class="display-1 red--text text--darken-1 font-weight-bold pt-5 ma-auto"
        >
          <p v-if="isRandom" class="text-xs-center ma-auto">
            サイゼリヤ<br />N円ガチャ
          </p>
          <p v-else class="text-xs-center ma-auto">
            サイゼリヤ<br />バランスガチャ
          </p>
        </v-card-title>
        <v-card-text class="text-xs-center">
          <v-btn v-if="isRandom" @click="toggleButton"
            >バランスの取れた食事がしたい？</v-btn
          >
          <v-btn v-else @click="toggleButton">N円ガチャに戻る</v-btn>
        </v-card-text>
        <hr class="ma-3" />
        <v-card-text v-if="isRandom" class="text-xs-center">
          <div>
            <v-btn
              class="custom-button"
              large
              color="primary"
              @click="doGacha(1000)"
              >1000円ガチャを回す</v-btn
            >
          </div>
          <div>
            <v-btn
              class="custom-button"
              large
              color="primary"
              @click="doGacha(500)"
              >500円ガチャを回す</v-btn
            >
          </div>
          <div>
            <v-btn
              class="custom-button"
              large
              color="primary"
              @click="doGacha(1500)"
              >1500円ガチャを回す</v-btn
            >
          </div>
        </v-card-text>
        <v-card-text v-if="!isRandom" class="text-xs-center">
          <v-btn color="primary" class="long" @click="doBalanceGacha"
            >バランスの取れた<br />食事がしたいガチャ</v-btn
          >
          <v-btn color="primary" class="long" @click="doBalanceAdultGacha"
            >バランスの取れた<br />食事がしたい大人のガチャ</v-btn
          >
        </v-card-text>
        <v-card-text v-if="isButtonPushed">
          <v-container fluid grid-list-lg>
            <v-layout column>
              <v-flex v-for="item in items" :key="item.id">
                <v-card color="#eaf1eb">
                  <v-card-title>
                    <div class="ma-auto">
                      <p
                        class="subheading mb-2 text-xs-center red--text text--darken-1 font-weight-bold"
                      >
                        {{ item.name }}
                      </p>
                      <p
                        class="body-1 text-xs-center grey--text text--darken-1 font-weight-bold ma-0"
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
                        class="subheading text-xs-center red--text text--darken-1 font-weight-bold ma-0"
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
import { getItemsLimitedPrice, parseMenu, getRandomItem } from '~/helpers/menu'

export default {
  components: {},
  data() {
    return {
      items: [],
      isButtonPushed: false,
      isRandom: true
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
    const { salads, alcohols, drinks, appetizers, mainDishes } = parseMenu(menu)
    return { menu, salads, alcohols, drinks, appetizers, mainDishes }
  },
  methods: {
    toggleButton() {
      this.isRandom = !this.isRandom
    },
    doGacha(price) {
      this.items = getItemsLimitedPrice(this.menu, price)
      this.isButtonPushed = true
    },
    doBalanceGacha() {
      const salad = getRandomItem(this.salads)
      const appetizer = getRandomItem(this.appetizers)
      const mainDish = getRandomItem(this.mainDishes)
      this.items = [salad, appetizer, mainDish]
      this.isButtonPushed = true
    },
    doBalanceAdultGacha() {
      const salad = getRandomItem(this.salads)
      const appetizer = getRandomItem(this.appetizers)
      const mainDish = getRandomItem(this.mainDishes)
      const drink = getRandomItem([...this.drinks, ...this.alcohols])
      this.items = [salad, appetizer, mainDish, drink]
      this.isButtonPushed = true
    }
  }
}
</script>

<style scoped>
.custom-border {
  border: 5px double #007c00 !important;
}

.custom-button {
  width: 200px;
}

.long {
  height: 80px;
  width: 200px;
}
</style>
