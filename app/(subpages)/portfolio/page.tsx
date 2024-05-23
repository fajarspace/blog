import ProjectList from '@components/projects'
import { getProjects } from '@lib/projects'

export const metadata = {
  title: 'Projects',
  description: 'Hanya roject kecil',
  alternates: {
    canonical: 'https://fajarr.space/portfolio',
  },
}

const Projects = async () => {
  const projects = await getProjects()
  return (
    <>
      <h2>Portfolio</h2>
      <ProjectList
        showYears={true}
        count={projects.length}
        projects={projects}
      />
    </>
  )
}

export default Projects
