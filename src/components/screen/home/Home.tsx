"use client"

import useBeer from "@/(store)/store"
import GalleryList from "@/components/gallery/GalleryList"
import { Beer } from "@/types/beer.types"
import Link from "next/link"
import { FC, PropsWithChildren, useEffect, useState } from "react"

const styles = {
    container: {
      margin: '0 auto',
      marginTop: '128px',
      width: '300px',
      textAlign: 'center',
      background: 'linear-gradient(#000eff, #aecb19)',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '20px',
    },
    link: {
      display: 'inline-block',
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    
  };

const HomePage: FC = () => {

return (
<>

<div style={styles.container}>
<h1 style={styles.heading}>Beer</h1>
<Link href={'/beer'} style={styles.link}>
    Get Start
</Link>
</div>
</>
    )
}

export default HomePage