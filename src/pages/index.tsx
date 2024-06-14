import { getCategories } from "@/api";
import { Layout } from "@/layout/Layout";
import { ICategory, IGetAllCategories, IHomeProps } from "@/types";
import { GetServerSideProps } from "next";
import styles from '../styles/Home.module.scss';
import { CategoryItem } from "@/components";

export default function Home({ categories }: IHomeProps) {
  console.log(categories);
  return (
    <Layout>
      <div className={styles.wrapper}>
        {categories && 'data' in categories && categories.data.map((item: ICategory) => {
          return (
            <CategoryItem
             key={item.id}
             path={item.slug} 
             name={item.name} 
            />
          );
        })}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const categories: IGetAllCategories | { message: string } = await getCategories();

  return {
    props: {
      categories
    }
  }
}