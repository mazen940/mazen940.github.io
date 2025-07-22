import React from "react";
import "./Chef.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we Believe in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              
            </p>
          </div>
          <p className="p__opensans">
             Dolor,
            nobis!expedita distinctio quae numquam a perferendis excepturi, sed
              tempora repellendus placeat aspernatur officia. Omnis molestiae
              labore, facilis consectetur iste pariatur quidem ab, commodi
              tempora fugit unde saepe, impedit earum laudantium quas.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Lou</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
