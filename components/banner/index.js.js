import Image from 'next/image'
import styles from './banner.module.css'
function Banner({ title, subTitle, imgUrl }) {
    const handleOnPlay = () => {

    }
    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <div className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}>N</p>
                        <p className={styles.series}>S E R I E S</p>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                    <h3 className={styles.subTitle}>{subTitle}</h3>
                    <div className={styles.playBtnWrapper}>
                        <button className={styles.btnWithIcon} onClick={handleOnPlay}>
                            <Image 
                                src='/static/play_arrow.svg' 
                                alt="Play Icon" 
                                width="32"
                                height="32"
                            />
                            <span className={styles.playText}>Play</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.bannerImg} style={{
                background: `linear-gradient(to top right, rgba(228, 221, 221, 0.2) 10%, rgba(0,0,0,0.3) 95%), url(${imgUrl})`,
            }} />
        </div>
    )
}

export default Banner