'use client'

import React from 'react'
import styles from './bannertop.module.css'
import Link from 'next/link'

const BannerTop = () => {
  return (
    <div className={styles.topbanner}>
      <Link href="/buku/mudah-membuat-framework-css-dari-nol" target="_blank">
        Baca buku terbaru saya{' '}
        <b>&apos; Mudah Membuat Framework CSS dari Nol &apos;</b>
      </Link>
    </div>
  )
}

export default BannerTop
