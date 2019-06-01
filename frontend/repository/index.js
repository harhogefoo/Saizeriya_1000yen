export default class Repository {
  constructor(axios) {
    this.axios = axios
  }

  async getMenu() {
    const { data } = await this.axios.get(
      'https://saizeria-gacha.web.app/menu.json'
    )
    return data
  }
}
