import Link from "next/link"
import { FC, PropsWithChildren } from "react"

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    
    return (
        <>
        <header style={{width: '100%', height: '70px', backgroundColor: 'black', display: 'flex', alignItems: 'center'}}>
        
        </header>
        <main style={{width: '1200px', height: '800px', backgroundColor: 'green', margin: '0 auto', paddingTop: '64px'}}>
            {children}
        </main>
        </>


    )
}

export default Layout