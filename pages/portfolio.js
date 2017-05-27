import React from 'react'
import Layout from '../components/Layout.js'
import Project from '../components/Project'

const Index = (props) => (
  <Layout>
    <p>Portfolio</p>
    <div>
      {props.projects.map(project => <Project key={project.id} {...project} />)}
    </div>
  </Layout>
)

Index.getInitialProps = function () {
  const projects = [
    { id: 1, name: 'Project 1', desc: 'Project description: Project 1', github: '', preview: '', image: '' },
    { id: 2, name: 'Project 2', desc: 'Project description: Project 2', github: '', preview: '', image: '' },
    { id: 3, name: 'Project 3', desc: 'Project description: Project 3', github: '', preview: '', image: '' },
    { id: 4, name: 'Project 4', desc: 'Project description: Project 4', github: '', preview: '', image: '' }
  ]

  console.log(`Show data fetched. Count: ${projects.length}`)

  return {
    projects
  }
}

export default Index
