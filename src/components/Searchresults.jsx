import Bookcard from "./Bookcard"
export default function Searchresults({books}){
    
    return(
        <>
        <h2>Resultat</h2>
        <Bookcard books={books} />
        </>
    )
}