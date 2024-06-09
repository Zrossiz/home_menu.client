import Link from 'next/link';
import styles from './CategoryItem.module.scss';
import { CategoryItemProps } from './CategoryItem.props';

export const CategoryItem = ({ path, name }: CategoryItemProps) => {
    return (
        <Link href={path} className={styles.wrapper}>
            <div className={styles.title}>
                <h2>{name}</h2>
            </div>
        </Link>
    )
}