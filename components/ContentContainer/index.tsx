import styles from './ContentContainer.module.scss'

interface ContentContainerProps {
  children: React.ReactNode
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <section className={styles.section}>{children}</section>
  )
}

export default ContentContainer