import useBeer from "@/(store)/store"
import styles from "./BeerDetails.module.css"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { Beer } from "@/types/beer.types"
const BeerDetails: FC <Beer>= () => {
    const {currentBeer } = useBeer()
    
    return (
<div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image width={150} height={300} src={currentBeer.image_url} alt={currentBeer.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{currentBeer.name}</h2>
        <p className={styles.tagline}>{currentBeer.tagline}</p>
        <p className={styles.description}>{currentBeer.description}</p>
        <div className={styles.info}>
          <p>
            <strong>ABV:</strong> {currentBeer.abv}%
          </p>
          <p>
            <strong>Attenuation Level:</strong> {currentBeer.attenuation_level}
          </p>
          <p>
            <strong>First Brewed:</strong> {currentBeer.first_brewed}
          </p>
          
        </div>
        <h3>Food Pairing:</h3>
        
      </div>
    </div>
    )
}


export default BeerDetails