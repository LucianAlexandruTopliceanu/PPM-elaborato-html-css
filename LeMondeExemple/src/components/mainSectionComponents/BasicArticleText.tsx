import React  from "react";
const BasicArticleText: React.FC = () => {
    return (
        <div className="basicArticleText" role="article">
            <a href="">
                <p>
                    <img alt="news image" src="https://placehold.co/18x18"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ullamcorper est vitae imperdiet. Vivamus.
                </p>
            </a>
        </div>
    );
}
export default BasicArticleText;