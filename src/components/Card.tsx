import React from "react";
type RGB = `${number}, ${number}, ${number}`;

type CardProps = {
  bgcolorPrimary: RGB;
  bgcolorSecondary: RGB;
  imageUrl: string;
  title: string;

  listItems: string[];
  price: number;
  blendMode?:
    | "screen"
    | "multiply"
    | "difference"
    | "lighten"
    | "darken"
    | "overlay"
    | "saturation";
};

function capitalizeString(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

const Card = (props: CardProps) => {
  const {
    bgcolorPrimary,
    bgcolorSecondary,
    imageUrl,
    title,

    blendMode,
    listItems,
    price,
  } = props;

  return (
    <div className="card">
      <div className="card__side--front">
        <div
          className="card__hero"
          style={{
            backgroundImage: `linear-gradient(rgba(${bgcolorPrimary}), rgba(${bgcolorSecondary})), url(${imageUrl})`,
            backgroundBlendMode: blendMode ? `${blendMode}` : "overlay",
          }}
        ></div>

        <h3
          className="card__heading"
          // className="heading-tetriary "
        >
          <span
            className="card__heading-span"
            style={{
              backgroundImage: `linear-gradient(to top left, rgba(${bgcolorSecondary}, 0.9), rgba(${bgcolorSecondary}, 0.8))`,
            }}
          >
            {title}
          </span>
        </h3>
        <ul className="card__list">
          {listItems.map((item) => {
            return <li>{capitalizeString(item)}</li>;
          })}
        </ul>
      </div>
      <div
        className="card__side--back"
        style={{
          backgroundImage: `linear-gradient(to top left, rgba(${bgcolorSecondary}, 0.9), rgba(${bgcolorPrimary}, 0.8 ))`,
        }}
      >
        <div className="card__back-container">
          <p>
            only <span>{price}$</span>
          </p>
          <a href="#" className="btn btn--white">
            book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
