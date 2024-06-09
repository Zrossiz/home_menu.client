import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <Image 
                        src='/Logo.svg' 
                        alt="Логотип" 
                        width={100}
                        height={80}
                    />
                </div>
            </div>
        </header>
    )
}