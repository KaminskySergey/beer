import Layout from "@/components/layout/Layout"
import HomePage from "@/components/screen/home/Home"
import { HomeProps } from "@/types/beer.types";
import { GetServerSideProps } from "next";
import { FC } from "react";

export async function getServerSideProps  ()  {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=15');
      const data = await response.json();
  
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
  
      return {
        props: {
          data: null,
        },
      };
    }
  }

 const Home: FC<HomeProps> = ({data = []}) => {
    console.log(data)
return (
    <Layout>
        <HomePage />
    </Layout>
)
}

export default Home