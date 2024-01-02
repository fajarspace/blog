import Socials from '@components/socials'
import ProjectList from '@components/projects'
import Link from '@components/link'
import AboutMe from '@components/aboutme'
import { getProjects } from '@lib/projects'
import styles from './page.module.css'
import TimeOfDay from './timer'
import { Suspense } from 'react'
// import { PostListRSC } from '@components/posts-list/rsc'
// import Posts from '@components/posts-list'
import { PostMainRSC } from '@components/posts-list-main/rsc'

const PROJECT_COUNT = 3

export const revalidate = 10800

export default async function HomePage() {
  const projects = await getProjects()

  return (
    <>
      <div className={styles.heading}>
        <h1>Fajar A.</h1>
        <Socials />
      </div>
      <AboutMe />
      <h2>Projects</h2>
      <ProjectList
        showYears={false}
        count={PROJECT_COUNT}
        projects={projects}
      />
      <h2>Posts</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <PostMainRSC paginate={true} />
      </Suspense>
      <footer className={styles.footer}>
        <span>
          <Link href="/about">Tentang situs ini</Link>
        </span>
        <TimeOfDay />
      </footer>
    </>
  )
}
