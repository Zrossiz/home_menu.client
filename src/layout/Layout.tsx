import { LayoutProps } from "./Layout.props"
import styles from './Layout.module.scss';
import { Header } from "./Header/Header";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <div className={styles.footer}>footer</div>
        </div>
    )
}