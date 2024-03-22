export default function Searchform(){
    return(
        <form>
            <label htmlFor="search">Søk etter bøker:</label>
            <input type="text" id="search" placeholder="James Bond"></input>
            <input type="submit" value="Søk"></input>    
        </form>
    )
}