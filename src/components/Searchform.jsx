import { useState } from "react"
export default function Searchform({setQuery}){
    const [search, setSearch] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }
    return(
        <form className="search" onSubmit={handleSubmit}>
            <label htmlFor="search">Søk etter bøker:</label>
            <input className="search-input" type="text" id="search" placeholder="James Bond" onChange={handleChange}></input>
            <input className="button" type="submit" value="Søk"></input>    
        </form>
    )
}