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
  ],
  '/bugs/1': {
    id: 1,
    title: 'First bug',
    description: 'This is the first bug',
    attachments: [],
    timeline: [],
    createdAt: '2019-11-02'
  },
  '/bugs/2': {
    id: 2,
    title: 'Loading animation',
    description: 'This is the second bug',
    attachments: [],
    timeline: [],
    createdAt: '2019-11-02'
  },
  '/bugs/3': {
    id: 3,
    title: 'Missing documentation',
    description: 'This is the third bug',
    attachments: [],
    timeline: [],
    createdAt: '2019-11-02'
  },
  '/bugs/4': {
    id: 4,
    title: 'Links are broken',
    description: 'This is the fourth bug',
    attachments: [],
    timeline: [],
    createdAt: '2019-11-02'
  }
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
      throw new Error('Network error')
    }
    if (typeof mocks[url] !== 'undefined') {
      return mocks[url]
    }
    return null
  }
}

export default API
