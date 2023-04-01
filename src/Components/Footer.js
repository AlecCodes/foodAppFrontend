function Footer(props){
    return(
    <div
    className="d-flex flex-column m-4"
    >
        <div
        className="d-flex flex-column">
            <div>Powered by:</div>
            <hr
            className="w-50 align-self-center p-0 m-0"
            />
            <div className="d-flex justify-content-center">
                <div className="footerimg">
                    <img 
                    className="w-100 h-100"
                    src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png"></img>
                </div>
                <div className="footerimg">
                    <img 
                    className="w-100 h-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png"></img>
                </div>
                <div className="footerimg">
                    <img 
                    className="w-100 h-100"
                    src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"></img>
                </div>
                <div className="footerimg">
                    <img 
                    className="w-100 h-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"></img>
                </div>
                <div className="footerimg">
                    <img 
                    className="w-100 h-100"
                    src="https://ivangabriele.gallerycdn.vsassets.io/extensions/ivangabriele/vscode-heroku/1.4.3/1563906575407/Microsoft.VisualStudio.Services.Icons.Default"></img>
                </div>
                <div className="footerimg">
                    <img 
                    className="w-100 h-100"
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/234_Nutritionix_logo-512.png"></img>
                </div>
            </div>
        </div>        
    </div>
    )
}
export default Footer