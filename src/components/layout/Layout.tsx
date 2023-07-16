import useBeer from "@/(store)/store"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    const router = useRouter()
    const {selectedBeers, deleteBeers} = useBeer()
    const lengthSelected = selectedBeers.length
    const handleDeleteSelected = () => {
        deleteBeers();
      };
    return (
        <>
        
        <header style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '70px', padding: '4px 32px', backgroundColor: 'black', display: 'flex', alignItems: 'center'}}>
        {router.pathname === '/beer' ? 
        <Link href={'/'} style={{backgroundColor: 'yellow', padding: '10px', borderRadius: '8px'}}>
            Home
        </Link> : 
        <Link href={'/beer'} style={{backgroundColor: 'green', padding: '10px', borderRadius: '8px'}}>
        Back
    </Link>
    }
    {lengthSelected === 0 ? '' :  <button onClick={handleDeleteSelected} style={{marginLeft: 'auto', backgroundColor: 'red', color: 'black'}} type="button">{`Delete ${lengthSelected} element`}</button>}
        </header>
        <main style={{width: '1200px', minHeight: '850px', color: 'white', backgroundColor: '#000', margin: '0 auto', padding: '64px 16px 32px 16px',  borderRadius: '40px', opacity: '0.9'}}>
            {children}
        </main>
        
        </>


    )
}

export default Layout