import { useState } from "react";
import avatar from "./assets/user-icon.png";
import starFilled from "./assets/star-filled.png";
import starEmpty from "./assets/star-empty.png";
import "./App.css";

function App() {
  const [contact, setContact] = useState({
    firstName: "Nigesty",
    lastName: "Hagos",
    phone: "+44-745-559-7333",
    email: "tsmyrealname@gmail.com",
    isFavourite: false,
  });

  const starIcon = contact.isFavourite ? starEmpty : starFilled;

  function toggleFavourite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavourite: !prevContact.isFavourite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src={avatar} className="user-icon" />
        <div>
          <button
            onClick={toggleFavourite}
            className="favourite-button"
            aria-label={
              contact.isFavourite
                ? "Add to favourites"
                : "Remove from favourites"
            }
            aria-pressed={contact.isFavourite}
          >
            <img
              src={starIcon}
              className="star"
              alt={contact.isFavourite ? "empty star icon" : "filled star icon"}
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
