import useBeer from "@/(store)/store";
import { IBeers } from "@/types/beer.types";
import Image from "next/image";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

type IGallyryProps = {
    allBeer: IBeers['allBeer']
}

const GalleryList: FC <PropsWithChildren<unknown>> = ({children}) => {
  const visibleRecipes = 5;
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [allBeer, setAllBeer] = useState<object>([])
    const {fetchBeer, layzyLoadBeer, beer, page} = useBeer();

    useEffect(() => {
      fetchBeer();
    }, [fetchBeer]);

useEffect(() => {
    setAllBeer(beer)
}, [beer])
console.log(allBeer)
  
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); 

const handleScroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      layzyLoadBeer(nextPage);
      return nextPage;
    });
  }
};
console.log(beer, '333')
console.log(page, '444')
    return (
        <div >
            {
                allBeer?.map(el => (
                    <div key={el.id}>
                        {/* <Image src={beer.image_url} width={100} height={120} alt={beer.name} className="beer-image" /> */}
      <div className="beer-details">
        <h2 className="beer-name">{el.name}</h2>
        <p className="beer-tagline">{el.tagline}</p>
        <div className="beer-description">{el.description}</div>
        <div className="beer-info">
          <div className="beer-info-item">
            <span className="label">ABV:</span> {el.abv}%
          </div>
          <div className="beer-info-item">
            <span className="label">IBU:</span> {el.ibu}
          </div>
          <div className="beer-info-item">
            <span className="label">EBC:</span> {el.ebc}
          </div>
          <div className="beer-info-item">
            <span className="label">pH:</span> {el.ph}
          </div>
        </div>
        <div className="food-pairing">
          <span className="label">Food Pairing:</span>
          <ul>
            {el.food_pairing.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
      </div>
                    </div>
                ))
            }
        </div>
    )
}

export default GalleryList;