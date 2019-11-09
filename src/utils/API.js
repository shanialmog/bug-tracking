const getMocks = {
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

const maybeThrow = async () => {
  await sleep(1000)
  if (Math.random() < 0.5) {
    throw new Error('Network error')
  }
}

const thrownNotFound = () => {
  throw new Error('404 Not found')
}

const API = {
  get: async url => {
    await maybeThrow()
    if (typeof getMocks[url] !== 'undefined') {
      return getMocks[url]
    }
    thrownNotFound()
  },
  post: async (url, payload) => {
    await maybeThrow()
    switch (url) {
      case '/bugs':
        getMocks['/bugs/4'].title = payload.title
        getMocks['/bugs/4'].description = payload.description
        return { id: 4 }
      default:
        thrownNotFound()
    }
  }
}

export default API
