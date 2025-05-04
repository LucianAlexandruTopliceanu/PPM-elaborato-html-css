import React  from "react";

const BasicArticle : React.FC<{}> = () => {
    return(
        <div className="basicArticle" role="article">
            <a href="">
                <picture>
                    <img alt="news image" src="https://placehold.co/1300x1000"/>
                    <div className="media-credit">Lorem ipsum</div>
                </picture>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ullamcorper est vitae imperdiet. Vivamus.
                </h1>
            </a>
        </div>
    );
}

export default BasicArticle