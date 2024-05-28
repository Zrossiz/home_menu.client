import { LayoutProps } from "./Layout.props"
import styles from './Layout.module.scss';
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}