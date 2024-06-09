import { getCategories } from "@/api";
import { Layout } from "@/layout/Layout";
import { IGetAllCategories, IHomeProps } from "@/types";
import { GetServerSideProps } from "next";
import styles from '../styles/Home.module.scss';
import { CategoryItem } from "@/components";

export default function Home({ categories }: IHomeProps) {
  console.log(categories);
  return (
    <Layout>
      <div className={styles.wrapper}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
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