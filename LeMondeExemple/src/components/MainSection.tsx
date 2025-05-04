import React from 'react';
import MainArticle from "./mainSectionComponents/MainArticle";
import BasicArticle from "./mainSectionComponents/BasicArticle";
import BasicArticleWide from "./mainSectionComponents/BasicArticleWide";
import BasicArticleText from "./mainSectionComponents/BasicArticleText";

const MainSection : React.FC = () =>{
    return (
        <main className="mainSection" role="main">

            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="row separator">
                            <div className="col-lg-8"><MainArticle/></div>
                            <div className="col-lg-4">
                                <div className="row separator"><BasicArticle/></div>
                                <div className="row"><BasicArticle/></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6"><BasicArticleWide/></div>
                        <div className="col-lg-6"><BasicArticleWide/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6"><BasicArticleWide/></div>
                        <div className="col-lg-6"><BasicArticleWide/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6"><BasicArticleText/></div>
                        <div className="col-lg-6"><BasicArticleText/></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6"><BasicArticleText/></div>
                        <div className="col-lg-6"><BasicArticleText/></div>
                    </div>
                </div>
                <div className="col-lg-4"><BasicArticle/></div>
            </div>
        </main>
    );
};
export default MainSection