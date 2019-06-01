import shuffle from 'lodash.shuffle'

export const getItemsLimitedPrice = (items, limitPrice) => {
  const shuffledItems = shuffle(items)

  let currentPrice = 0
  const result = []
  shuffledItems.some(item => {
    if (limitPrice < currentPrice) {
      return true
    }
    const { price } = item
    const nextPrice = currentPrice + price
    if (nextPrice <= limitPrice) {
      currentPrice += price
      result.push(item)
    }
  })

  return result
}

export const getRandomItem = items => shuffle(items)[0]

const filterByKey = (items, keyName, key) =>
  items.filter(item => item[keyName] === key)

export const parseMenu = menu => {
  const saladMenu = filterByKey(menu, 'type', 'salad')
  const appetizerMenu = filterByKey(menu, 'type', 'appetizer')
  const soupMenu = filterByKey(menu, 'type', 'soup')
  const alcoholMenu = filterByKey(menu, 'type', 'alcohol')
  const drinkMenu = filterByKey(menu, 'type', 'drinkbar')
  const pizzaMenu = filterByKey(menu, 'type', 'pizza')
  const gratinMenu = filterByKey(menu, 'type', 'gratin')
  const pastaMenu = filterByKey(menu, 'type', 'pasta')
  const doriaMenu = filterByKey(menu, 'type', 'doria')
  const riceMenu = filterByKey(menu, 'type', 'rice')
  const hamburgMenu = filterByKey(menu, 'type', 'hamburg')
  const chickenMenu = filterByKey(menu, 'type', 'chicken')
  const steakMenu = filterByKey(menu, 'type', 'steak')

  const appetizers = [...appetizerMenu, ...soupMenu, ...riceMenu]
  const mainDishes = [
    ...pizzaMenu,
    ...gratinMenu,
    ...pastaMenu,
    ...doriaMenu,
    ...hamburgMenu,
    ...chickenMenu,
    ...steakMenu
  ]
  return {
    salads: saladMenu,
    appetizers,
    mainDishes,
    alcohols: alcoholMenu,
    drinks: drinkMenu
  }
}
