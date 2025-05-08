import React from "react";
const ArticleFeatured=()=>{
    return (
        <div className="articleFeatured">
            <a>
                <picture>
                    <img alt="article image" src="https://placehold.co/1300x1000"/>
                </picture>
                <div className="content">
                    <p className="type">Lorem</p>
                    <p className="byline">Lorem ipsum</p>
                    <span className="premium-icon"></span>
                    <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra risus vitae leo aliquam bibendum. </p>
                </div>
                <p className="article-footer">Lorem ipsum</p>
            </a>
        </div>
    );
}
export default ArticleFeatured;