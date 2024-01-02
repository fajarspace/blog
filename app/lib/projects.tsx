import type { Project } from './types'
import { cache } from 'react'

const Projects: Project[] = [
  {
    title: 'Stuff CSS',
    description: 'Stuff is a simple framework CSS for native website',
    href: 'https://stuffcss.netlify.app/',
    role: 'Framework',
    years: ['2022', 'present'],
  },
  {
    title: 'Selembarkertas Podcast',
    description:
      'Waktu kamu gak akan cukup, kerjakan sekarang! ikuti untuk mendapat podcast terbaru, Selamat menjadi pendengar.',
    href: 'https://selembarkertas.netlify.app',
    role: 'Podcast',
    years: ['2019', 'present'],
  },
  {
    title: 'Chattan.space',
    description: 'Real time chat with vigenere cipher encryption',
    href: 'https://github.com/fajarspace/real-time-chat',
    role: 'Chatting',
    years: ['2022'],
  },
  {
    title: 'Random anime pict ',
    description: "Random picture waifu's",
    href: 'https://gacha-waifu.netlify.app',
    role: 'Creator',
    years: [],
  },
]

export const getProjects = cache(async (): Promise<Project[]> => {
  // You can add any other logic or modification you need here

  return Projects
})
