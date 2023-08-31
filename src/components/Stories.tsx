import React from "react";
import UserStory from "./UserStory";
import nat8 from "../assets/img/nat-8.jpg";
import nat9 from "../assets/img/nat-9.jpg";
import bgvideo from "../assets/img/video.mp4";
import bgvideoWebm from "../assets/img/video.webm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Stories = () => {
  return (
    <section className="section-stories ">
      <div className="bgvideo">
        <video
          className="bgvideo__content"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src={bgvideo} type="video/mp4" />
          <source src={bgvideoWebm} type="video/webm" />
        </video>
      </div>

      <div className="u-center-text">
        <h2 className="heading-secondary u-margin-bottom-huge">
          we make people happy for realzies
        </h2>
      </div>
      <div className="row">
        <UserStory
          imgUrl={nat8}
          name="mary anne"
          title="i love marvel movies"
        />
      </div>
      <div className="row">
        <UserStory imgUrl={nat9} name="baby sneed" title="i eat boogers" />
      </div>
      <div className="u-center-text">
        <a href="#" className="btn-secondary">
          Read all stories <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
};

export default Stories;
