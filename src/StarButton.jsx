import starFilled from "./assets/star-filled.png";
import starEmpty from "./assets/star-empty.png";

function StarButton({ isFavourite, toggle }) {
  const starIcon = isFavourite ? starEmpty : starFilled;

  return (
    <button
      onClick={toggle}
      className="favourite-button"
      aria-label={isFavourite ? "Add to favourites" : "Remove from favourites"}
      aria-pressed={isFavourite}
    >
      <img
        src={starIcon}
        className="star"
        alt={isFavourite ? "empty star icon" : "filled star icon"}
      />
    </button>
  );
}
export default StarButton;
