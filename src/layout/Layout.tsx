import { LayoutProps } from "./Layout.props"
import styles from './Layout.module.scss';

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>header</div>
            <main className={styles.main}>
                {children}
            </main>
            <div className={styles.footer}>footer</div>
        </div>
    )
}