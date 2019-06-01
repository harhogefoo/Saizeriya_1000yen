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
