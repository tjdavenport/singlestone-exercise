import styles from './banner.module.css'
import Button from '../Button/Button.js'
import Container from '../Container/Container.js'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.content}>
          <h3>New Games and Accessories</h3>
          <div className="sy1">
            <h1>Monthly packages.</h1>
            <h1>Excitement delivered daily.</h1>
          </div>
          <p className={styles.tagline}>What&apos;s the best way to shop for the latest video games and peripherals? How about never shopping at all? You&apos;ll get new stuff on your doorstep &mdash; every month.</p>
          <div className="sy1">
            <Button type="button">get started</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
