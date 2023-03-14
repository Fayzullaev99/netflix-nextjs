import Image from 'next/image'
import { motion } from "framer-motion"
import { useState } from 'react'
import styles from './card.module.css'
import classNames from 'classnames'

function Card({imgUrl="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80",size='medium'}) {
  const [imgSrc,setImgSrc] = useState(imgUrl)
  const classMap = {
    large:styles.lgItem,
    medium:styles.mdItem,
    small:styles.smItem,
  }
  const handleOnError = ()=>{
    console.log('error');
    setImgSrc("https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80")
  }
  return (
    <div className={styles.container}>
      <motion.div className={classNames(styles.imgMotionWrapper,classMap[size])}
      whileHover={{ scale: 1.2 }}>
      <Image 
        className={styles.cardImg}
        src={imgSrc} 
        alt="card"
        fill
        onError={handleOnError}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      </motion.div>
    </div>
  )
}

export default Card