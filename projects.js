const clone = require('clone')

let db = {}

const defaultData =  [
    {
        "id": "AWGUq_g1yiLINyEYs231",
        "name": "Cryptocurrency",
        "description": "Bitcoin 2.0",
        "estimated": 50,
        "github": "https://github.com/athensbird/hello-world-ci",
        "slack_link": "slack",
        "size": "M",
        "technologies": ["Java", "Machine Learning", "AWS", "Docker"],
        "backers": []
    },
    {
        "id": "AWGUq_g1yiLINyEYs234",
        "name": "PWS",
        "description": "Progressive Web Application",
        "estimated": 35,
        "github": "https://github.com/athensbird/pwa-newsfeed",
        "slack_link": "slack",
        "size": "S",
        "technologies": ["JavaScript", "Service Worker"],
        "backers": []
    },
    {
        "id": "AWGUq_g1yiLInPEYs234",
        "name": "TypeScript",
        "description": "A TypeScript based on Mobile App",
        "estimated": 80,
        "github": "https://github.com/athensbird/earthhack",
        "slack_link": "slack",
        "size": "L",
        "technologies": ["TypeScript", "React Native", "Android"],
        "backers": []
    }
  ]

function getData (token) {
  //Each token has it's own copy of the DB. The token in this case is like an app id.
  let data = db[token]
  //This populates the default user data if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getAll (token) {
  return new Promise((res) => {
    res(getData(token))
  })
}

function add (token, project) {
  return new Promise((res) => {
    let projects = getData(token)
    const technologyList = project['technologies_List'].map(p => p.label)
    const pData = {
      id: project.id,
      name: project.name,
      description: project.description,
      github: project.github,
      size: project.size,
      slack_link: project.slack,
      due: project.due,
      estimated: project.estimate,
      created: project.created,
      technologies: technologyList,
      backers: []
    }

    projects.push(pData);

    console.log(pData);

    res(projects)
  })
}

module.exports = {
  getAll,
  add
}
