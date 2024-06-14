import { LayoutProps } from "./Layout.props"
import styles from './Layout.module.scss';
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import Head from "next/head";

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />    
            </Head>
            <div className={styles.wrapper}>
                <Header />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}