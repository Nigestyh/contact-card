import { useState } from "react";
import avatar from "./assets/user-icon.png";
import "./App.css";
import StarButton from "./StarButton";

function App() {
  const [contact, setContact] = useState({
    firstName: "Nigesty",
    lastName: "Hagos",
    phone: "+44-745-559-7333",
    email: "tsmyrealname@gmail.com",
    isFavourite: false,
  });

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
          <StarButton
            isFavourite={contact.isFavourite}
            toggle={toggleFavourite}
          />
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
