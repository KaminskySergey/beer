
"use client"

import useBeer from "@/(store)/store";
import Layout from "@/components/layout/Layout"
import HomePage from "@/components/screen/home/Home"
import { Beer } from "@/types/beer.types";
import { FC, useEffect, useState } from "react";


 const Home: FC = () => {
  const [allBeer, setAllBeer] = useState<Beer[]>()
    const {fetchBeer, beer} = useBeer()
    
    useEffect(() => {
      setAllBeer(beer)
    }, [beer])
return (
    <Layout>
        <HomePage allBeer={allBeer}/>
    </Layout>
)
}

export default Home