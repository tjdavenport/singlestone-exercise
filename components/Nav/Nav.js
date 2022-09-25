import styles from './nav.module.css'
import Container from '../Container/Container.js'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className="container">
          <img className={styles.logo} src="/logo-endless.svg"/>
        </div>
      </Container>
    </nav>
  )
}
