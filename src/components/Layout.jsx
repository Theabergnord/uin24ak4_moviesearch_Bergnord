import { Link } from "react-router-dom"
export default function Layout({children}){
    return(
        <>
        <header>
            <nav className="navbar">
                <Link to="/"><h1>Online Bibliotek</h1></Link>
                <ul className="homelinks">
                    <Link to="/">Hjem</Link>
                </ul>
            </nav>
        </header>
        <main className="content">
        {children}
        </main>
        <footer>UIN Arbeidskrav 4</footer>
        </>
    )
}