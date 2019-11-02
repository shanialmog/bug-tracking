import { Exception } from "handlebars"

const mocks = {
  '/bugs': [
    {
      id: 1,
      title: 'First bug'
    }, {
      id: 2,
      title: 'Loading animation'
    }, {
      id: 3,
      title: 'Missing documentation'
    }, {
      id: 4,
      title: 'Links are broken'
    }
  ]
}

const sleep = ms => {
  return new Promise(resolve => {
    window.setTimeout(resolve, ms)
  })
}

const API = {
  get: async url => {
    await sleep(1000)
    if (Math.random() < 0.5) {
      throw new Exception('Network error')
    }
    if (typeof mocks[url] !== 'undefined') {
      return mocks[url]
    }
    return null
  }
}

export default API
