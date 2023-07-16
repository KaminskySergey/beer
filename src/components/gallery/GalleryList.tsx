import useBeer from "@/(store)/store";
import { Beer, IBeers } from "@/types/beer.types";
import Image from "next/image";
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

import styles from './GalleryList.module.css';
import { useRouter } from "next/router";

type IGallyryProps = {
    allBeer: IBeers['allBeer']
}

const GalleryList: FC <PropsWithChildren<unknown>> = ({children}) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const [allBeer, setAllBeer] = useState<object>([])
    const {fetchBeer, layzyLoadBeer, beerInfo, toggleBeerCards, beer, selectedBeers} = useBeer();
    const router = useRouter()

    useEffect(() => {
      fetchBeer();
    }, [fetchBeer]);

useEffect(() => {
    setAllBeer(beer)
    
}, [beer])
  


useEffect(() => {
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
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [layzyLoadBeer]); 



const handleClick = (el: Beer) => {
  beerInfo(el)
router.push(`/beer/${el.id}`)
}

const toggleRightClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, beerId: string) => {
  e.preventDefault(); 
  toggleBeerCards(beerId)
};

console.log(allBeer, 'selectedProductsselectedProductsselectedProducts')
    return (
      <>
      <ul className={styles['list']}>
  {Array.isArray(allBeer) &&
    allBeer?.map((el) => (
      <li key={el.id} style={{backgroundColor: selectedBeers.find((item: { id: string; }) => item.id === el.id ) ? 'orange' : ''}} className={styles['item-card']} onContextMenu={(e) => toggleRightClick(e, el.id)}>
        <div className={styles['cont-img']}>
          <Image width={100} height={120}  src={el.image_url} alt={el.name} />
        </div>
          
            <h2>{el.name}</h2>
            <button className={styles['button']} onClick={() => handleClick(el)}>Подробнее</button>
          
        
      </li>
    ))}
</ul>

      </>
    )
}

export default GalleryList;