export default function Searchform(){
    return(
        <form className="search">
            <label htmlFor="search">Søk etter bøker:</label>
            <input className="search-input" type="text" id="search" placeholder="James Bond"></input>
            <input className="button" type="submit" value="Søk"></input>    
        </form>
    )
}