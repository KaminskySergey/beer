import useBeer from "@/(store)/store"
import styles from "./BeerDetails.module.css"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { Beer } from "@/types/beer.types"
const BeerDetails: FC= () => {
  const { currentBeer, }: { currentBeer?: object } = useBeer();
  const [beerState, setBeerState] = useState<any>({})
  
  useEffect(() => {
    setBeerState(currentBeer)
  }, [currentBeer])
  
    return (
<div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image width={150} height={300} src={beerState.image_url} alt={beerState.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{beerState.name}</h2>
        <p className={styles.tagline}>{beerState.tagline}</p>
        <p className={styles.description}>{beerState.description}</p>
        <div className={styles.info}>
          <p>
            <strong>ABV:</strong> {beerState.abv}%
          </p>
          <p>
            <strong>Attenuation Level:</strong> {beerState.attenuation_level}
          </p>
          <p>
            <strong>First Brewed:</strong> {beerState.first_brewed}
          </p>
          
        </div>
        <h3>Food Pairing:</h3>
        
      </div>
    </div>
    )
}


export default BeerDetails