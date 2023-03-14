import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './navbar.module.css'

function Navbar({ username }) {
    const router = useRouter()
    const [showDropdown, setShowDropdown] = useState(false)
    const handleOnClickHome = (e) => {
        e.preventDefault()
        router.push('/')
    }
    const handleOnClickMyList = (e) => {
        e.preventDefault()
        router.push('/browese/my-list')
    }
    const handleShowDropdown = (e) => {
        e.preventDefault()
        setShowDropdown(!showDropdown)
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink}>
                    <div className={styles.logoWrapper}>
                        <Image src={"/static/netflix.svg"} alt="logo" width={128} height={35} />
                    </div>
                </a>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                    <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
                </ul>

                <nav className={styles.navContainer}>
                    <div className={styles.test}>
                        <button className={styles.usernameBtn} onClick={handleShowDropdown}>
                            <p className={styles.username}>{username}</p>
                            <Image src={"/static/expand_more.svg"} alt="user" width={24} height={24} />
                        </button>
                        {showDropdown && (
                            <div className={styles.navDropdown}>
                                <div>
                                    <Link className={styles.linkName} href="/login">Sign out</Link>
                                    <div className={styles.lineWrapper} />
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar