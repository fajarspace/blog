import React from 'react'
import styles from './footer.module.css'

const PostFooter = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <p>Terima kasih sudah membaca {`>//<`}</p>
    </footer>
  )
}

export default PostFooter
