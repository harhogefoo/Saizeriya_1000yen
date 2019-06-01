export default class Repository {
  constructor(axios) {
    this.axios = axios
  }

  async getMenu() {
    const { data } = await this.axios.get(
      'https://harhogefoo.github.io/Saizeriya_1000yen/menu.json'
    )
    return data
  }
}
