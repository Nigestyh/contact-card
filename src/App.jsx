import { useState } from "react";
import avatar from "./assets/user-icon.png";
import starFilled from "./assets/star-filled.png";

import "./App.css";

function App() {
  const [contact, setContact] = useState({
    firstName: "Nigesty",
    lastName: "Hagos",
    phone: "+44-745-559-7333",
    email: "tsmyrealname@gmail.com",
    isFavourite: false,
  });
  return (
    <main>
      <article>
        <img src={avatar} />
        <button>
          <img src={starFilled} />
        </button>
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </article>
    </main>
  );
}

export default App;
