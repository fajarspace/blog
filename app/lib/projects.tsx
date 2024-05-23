import type { Project } from './types'
import { cache } from 'react'

const Projects: Project[] = [
  {
    title: 'Maziyyah.id',
    description: 'Web untuk alumni pesantren gontor',
    href: 'https://maziyyah.id/',
    role: 'client',
    tech: ['React Js,', ' Express.js,', ' Bootstraps'],
    years: [''],
  },
  {
    title: 'Penjadwalan praktikum',
    description: 'Web untuk penjadwalan praktikum',
    href: 'https://jadwal.lab.bangsa.web.id/',
    role: 'client',
    tech: ['React Js,', ' Express.js,', ' Bootstraps'],
    years: [''],
  },
  {
    title: 'CV. Cipta Mandiri Perkasa',
    description:
      'CV. Cipta Mandiri Perkasa adalah perusahaan yang berkompeten dalam pekerjaan atap Kubah GRC, Masjid, Kerawangan, Ornamen, Menara dan motif awan kaligrafi.',
    href: 'https://ciptamandiriperkasa.id/',
    role: 'client',
    tech: ['Next Js,', ' Strapi Backend,', ' Tailwind CSS'],
    years: [''],
  },
  {
    title: 'Informatika API',
    description: 'Website API untuk informatika UPB.',
    href: 'https://api.informatikaupb.com/',
    role: 'client',
    tech: ['Hugo,', ' Express.js,', ' JWT'],
    years: [''],
  },
  {
    title: 'Stuff CSS',
    description:
      'Stuff CSS adalah framework CSS sederhana untuk website native.',
    href: 'https://stuffcss.netlify.app/',
    role: 'Framework',
    tech: ['Next Js,', ' SASS,', ' Node Js'],
    years: ['2022', 'present'],
  },
  {
    title: 'Selembarkertas Podcast',
    description:
      'Waktu kamu gak akan cukup, kerjakan sekarang! ikuti untuk mendapat podcast terbaru, Selamat menjadi pendengar.',
    href: 'https://selembarkertas.netlify.app',
    role: 'Podcast',
    tech: ['Hugo'],
    years: ['2019', 'present'],
  },
  {
    title: 'Chattan.space',
    description: 'Aplikasi chat real-time dengan enkripsi vigenere cipher.',
    href: 'https://github.com/fajarspace/real-time-chat',
    role: 'Chatting',
    tech: ['PHP,', ' Bootstraps'],
    years: ['2022'],
  },
  {
    title: 'Random anime pict ',
    description: 'Web untuk mendapatkan gambar acak dari anime.',
    href: 'https://gacha-waifu.netlify.app',
    role: 'Random-stuff',
    tech: ['Next Js'],
    years: ['2023'],
  },
  {
    title: 'Kodelab',
    description:
      'Bikin W3school nya indonesia & Roadmaps untuk kamu para developer!',
    href: 'https://kodelab.netlify.app',
    role: 'Education',
    tech: ['React Js'],
    years: ['2021', 'present'],
  },
  {
    title: 'Jurnal Dev',
    description: 'Kumpulan blog tentang developer',
    href: 'https://jurnaldev.netlify.app',
    role: 'Education',
    tech: ['Hugo'],
    years: ['2020'],
  },
]

export const getProjects = cache(async (): Promise<Project[]> => {
  // You can add any other logic or modification you need here

  return Projects
})
