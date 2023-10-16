

function Cards ({id, title, categorie, image, alt, size, color, price}) {

    return(

        <>
            <div className="cards">
                <img src={image} width={"180px"} height={"200px"} alt={alt}/>
                <div className="description">
                <p>Article: {title}</p> 
                <p>Price: {price}</p> 
                <p>Size: {size}</p> 
                <p>Color: {color}</p>
                </div>
            </div>
        </>
);}

export default Cards;