import useBeer from "@/(store)/store";
import Layout from "@/components/layout/Layout"
import BeerDetails from "@/components/screen/details/BeerDetails";
import { FC } from "react"


const BeerDetailsPage: FC = () => {
    
    return (
        <Layout>
            <BeerDetails />
        </Layout>
    )
}

export default BeerDetailsPage