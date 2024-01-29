// App.js
import React from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginTop: "10x", marginBottom: "80px" }}>
          First React App!
        </h1>
        <ButtonComponent text="Clicca Qui" />
        <ImageComponent
          src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Create-Your-First-React.js-App.jpg"
          alt="Descrizione immagine"
        />
      </header>
    </div>
  );
}

export default App;
