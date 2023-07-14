"use client"

import useBeer from "@/(store)/store"
import GalleryList from "@/components/gallery/GalleryList"
import { Beer } from "@/types/beer.types"
import { FC, PropsWithChildren, useEffect, useState } from "react"


  

const HomePage: FC <PropsWithChildren<unknown>> = ({children}) => {
//     const [allBeer, setAllBeer] = useState<object>([])
//     const {fetchBeer, beer} = useBeer();

//     useEffect(() => {
//       fetchBeer();
//     }, [fetchBeer]);

// useEffect(() => {
//     setAllBeer(beer)
// }, [beer])
// console.log(allBeer)
return (
<>
<h1>Hello</h1>
<GalleryList>
    {children}
</GalleryList>
</>
    )
}

export default HomePage