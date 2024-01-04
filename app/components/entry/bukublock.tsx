import Link from '@components/link'
import styles from './block.module.css'

type Props =
  | {
      title: string
      tags: string[]
      description?: string
      type?: string
      href: string
      date?: Date
      views?: number
      isThirdParty?: boolean
    }
  | {
      skeleton: true
    }

const BukuBlockEntry = (props: Props) => {
  if ('skeleton' in props) {
    return <li className={styles.skeleton} />
  }

  const { title, description, tags, type, href, isThirdParty } = props
  return (
    <li className={styles.item}>
      <Link
        href={href}
        title={description || title}
        className={styles.link}
        underline={false}
        external={isThirdParty}
      >
        {type && <div className={styles.type}>{type}</div>}

        <div className={styles.wrapper}>
          <div>
            <span className={styles.date}>
              Tags: <i>{tags}</i>
            </span>

            <h4 className={`${styles.title}`}>
              <Link href={href}>{title}</Link>
            </h4>
            {description && <p className={styles.description}>{description}</p>}
            {isThirdParty && (
              <span className={styles.thirdParty}>
                {new URL(href).hostname}
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BukuBlockEntry
