export interface ApiResult {
  data: {
    characters: {
      info: {
        count: number,
        pages: number
      },
      results: []
    }
  }

}
