import './style.css'

const tabs = document.querySelectorAll('.project-tab')
const projects = document.querySelectorAll('.project-content')

tabs.forEach((tab) => {

  tab.addEventListener('click', () => {

    const target = tab.dataset.project

    // remove active state
    tabs.forEach(t => t.classList.remove('active-tab'))

    // hide all projects
    projects.forEach(project => {
      project.classList.add('hidden')
    })

    // activate clicked tab
    tab.classList.add('active-tab')

    // show selected project
    document
      .getElementById(target)
      .classList.remove('hidden')

  })

})