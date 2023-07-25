import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useState } from 'react'

import BurgerMenu from 'components/BurgerMenu'
import { User } from 'types/User'

import styles from './Navbar.module.scss'

const Navbar = () => {
  let authLinks;
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)

  const handleLoginClick = (event: MouseEvent): void => {
    event.preventDefault()

    setUser({
      name: 'Colin',
      role: 'admin',
      preferences: {
        theme: 'light',
      }
    })
  }

  const handleLogoutClick = (event: MouseEvent): void => {
    event.preventDefault()

    setUser(null)
  }

  const handleBurgerMenuButtonClick = (): void => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  if (user) {
    authLinks =
      <>
        <Link href="/logout">
          <a onClick={handleLogoutClick}>Logout</a>
        </Link>
      </>
  } else {
    authLinks =
      <>
        <Link href="/login">
          <a onClick={handleLoginClick}>Login</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </>
  }

  return (
    <header className={styles.header}>
      <button className={styles.burgerMenu} onClick={handleBurgerMenuButtonClick}>
        <Image
          alt="Burger menu icon"
          height={12}
          layout="fixed"
          src="/images/burgerMenu.svg"
          width={16}
        />
      </button>
      {
        isBurgerMenuOpen && <BurgerMenu user={user} />
      }
      <Link href="/">
        <a>
          <Image
            alt="C&amp;F Logo"
            height={68}
            layout="fixed"
            src="/images/logo.jpg"
            width={118}
          />
        </a>
      </Link>
      <nav className={styles.navLinks}>
        {authLinks}
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
