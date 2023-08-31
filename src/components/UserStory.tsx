import React from "react";

type UserStoryProps = {
  imgUrl: string;
  name: string;
  title: string;
};

const UserStory = (props: UserStoryProps) => {
  const { imgUrl, name, title } = props;

  return (
    <div className="story">
      <figure className="story__shape ">
        <img src={imgUrl} alt="smeed" />
        <figcaption>{name}</figcaption>
      </figure>
      <div className="story__text">
        <h3 className="heading-tetriary u-margin-bottom-small">{title}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          molestias dolores deleniti, quisquam, ducimus ullam reprehenderit est
          placeat tenetur iusto aperiam maxime beatae aliquam eaque hic culpa.
          Voluptas, facere velit. reprehenderit est placeat tenetur iusto
          aperiam maxime beatae
        </p>
      </div>
    </div>
  );
};

export default UserStory;
