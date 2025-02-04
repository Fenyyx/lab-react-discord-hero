import "./App.css"
import React from "react";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import discordBackground from "./assets/discord-background.png";

function App() {
return (
    <div style={{ backgroundImage: `url(${discordBackground})` }}
    >
      <nav>
        <img src={discordLogo} alt="Discord Logo"/>
        <img src={menuIcon} alt="Menu Icon"/>
      </nav>

      <div>
        <h1>
          IMAGINE A PLACE...
        </h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together.
        </p>
        <div>
          <button>
            Download for Mac
          </button>
          <button>
            Open Discord in your browser
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
