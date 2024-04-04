
export default function Bookcard({books}){
    //Kilde open window: https://www.w3schools.com/jsref/met_win_open.asp
    return(
        <>
        <section>
            {books.map((book, index) => (
                <article key={index} className="bookcard">
                   {book.cover_i && book.cover_i > 0 ? (<img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Forsidebilde" />) :(<p>Ikke tilgjengelig forsidebilde</p>)} 
                   <h2>{book.title}</h2> 
                   <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ukjent'}</p>
                   <p>Først publisert: {book.first_publish_year ? book.first_publish_year : 'Ukjent'} </p>
                   <p>Rating: {book.ratings_average ? book.ratings_average : 'Ikke tilgjengelig'}</p>
                    <button onClick={() => {book.isbn && book.isbn.length > 0 ? window.open(`https://www.amazon.com/s?k=${book.isbn[0]}`): '#'}}>Kjøp på Amazone</button>
                </article>   
            ))}
        </section>    
        </>
    )
}