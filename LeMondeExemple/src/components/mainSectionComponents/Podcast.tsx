import React from "react";
const Podcast = () => {
    return (
      <div className="podcast">
          <a href="">
              <picture>
                  <img alt="podcast" src="https://placehold.co/80x80"/>
              </picture>
              <div className="content">
                  <div>
                      <div className="header">
                          <span className="text">Podcast</span>
                          <span className="separator"></span>
                          <span className="date">Lorem ipsum</span>
                      </div>
                  </div>
                  <div className="title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
              </div>
              <div className="btn" role="button">
                  <div className="btn-primary">
                      <img alt="button icon podcast" src="https://placehold.co/12x12"></img>
                      Lorem ipsum
                  </div>
              </div>
          </a>
      </div>
    );
}
export default Podcast;