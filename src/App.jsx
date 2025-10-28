import { useState } from "react";

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
      <h2>Nigesty Hagos</h2>
      <p>+44-745-559-7333</p>
      <p>itsmyrealname@gmail.com</p>
    </main>
  );
}

export default App;
