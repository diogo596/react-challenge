function NavBar () {

    return(
    <>
        <div className="logo">
            <img src="data:image/png;base64,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" alt="logo du site" />
            <h1>Clothes destock</h1>
        </div>
        
        <div className="filter">
            <button>size</button>
            <button>price</button>
            <button>categorie</button>
            <button>name</button>
        </div>
    </>
);}

export default NavBar;