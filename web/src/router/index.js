import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/components/ProjectList'
import ProjectPage from '@/components/ProjectPage'

Vue.use(Router)



export default function(projects) {
  const pages = projects.map(project => {
    return {
      path: '/projects/' + project.url,
      name: "projects",
      component: ProjectPage,
      props: {
        project: project
      }
    }
  });
  return new Router({
    routes: [
      {
        path: '/',
        name: "ProjectList",
        component: ProjectList,
        props: {
          projects: projects
        }
      },
      {
        path: '*'
        // TODO: 404 page
      }
    ].concat(pages)
  })
}