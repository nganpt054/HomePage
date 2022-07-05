function Navigation({title,name}){
    return(
        
        <>
        <div className="navigation">
            <div className="navigation__title">
            {title}
            </div>
            <div className="navigation__nav">
                <h1>Home </h1>
                <h1>Pages </h1>
                <h2>{name} </h2>
            </div>
        </div>
        </>
        
    )
}
export default Navigation;