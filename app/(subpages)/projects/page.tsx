import ProjectList from '@components/projects'
import { getProjects } from '@lib/projects'

export const metadata = {
  title: 'Projects',
  description: 'Hanya roject kecil',
  alternates: {
    canonical: 'https://fajarr.space/projects',
  },
}

const Projects = async () => {
  const projects = await getProjects()
  return (
    <ProjectList showYears={true} count={projects.length} projects={projects} />
  )
}

export default Projects
