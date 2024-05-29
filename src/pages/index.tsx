import { getCategories } from "@/api";
import { Layout } from "@/layout/Layout";
import { IGetAllCategories, IHomeProps } from "@/types";
import { GetServerSideProps } from "next";

export default function Home({ categories }: IHomeProps) {
  console.log(categories);
  return (
    <Layout>
      <div>test</div>
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