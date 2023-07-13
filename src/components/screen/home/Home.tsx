import GalleryList from "@/components/gallery/GalleryList"
import { FC, PropsWithChildren } from "react"

const HomePage: FC <PropsWithChildren<unknown>> = ({children}) => {
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