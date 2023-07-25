import Link from 'next/link'

import { User } from 'types/User'

import styles from './BurgerMenu.module.scss'

interface BurgerMenuProps {
  user: User | null
}

const BurgerMenu = ({ user }: BurgerMenuProps) => {
  let authLinks

  if (user) {
    authLinks =
    <li><h3><Link href="/logout"><a>Logout</a></Link></h3></li>;
  } else {
    authLinks =
      <>
        <li><h3><Link href="/login"><a>Login</a></Link></h3></li>
        <li><h3><Link href="/register"><a>Register</a></Link></h3></li>
      </>
  }

  return (
    <nav className={styles.container} aria-expanded="true" aria-hidden="false">
      <ol>
        <li><h3><Link href="/trip/europe"><a>Europe</a></Link></h3></li>
        <li><Link href="/country/denmark"><a>Denmark</a></Link></li>
        <li><h3><Link href="/trip/south-america"><a>South America</a></Link></h3></li>
        <li><Link href="/country/colombia"><a>Colombia</a></Link></li>
        <li><Link href="/country/ecuador"><a>Ecuador</a></Link></li>
        <li><Link href="/country/peru"><a>Peru</a></Link></li>
        <li><Link href="/country/bolivia"><a>Bolivia</a></Link></li>
      </ol>
      <hr />
      <ol>
        <li><h3><Link href="/about"><a>About Us</a></Link></h3></li>
        {authLinks}
      </ol>
    </nav>
  )
}

export default BurgerMenu
