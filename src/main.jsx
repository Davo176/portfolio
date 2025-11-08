import "cal-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

import Home from "./home";
import { Dashboard } from "./dashboard";
import { NightingaleContentAdmin, LoginFirst } from "./nightingale/content-admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/nightingale/content-admin",
                element: <LoginFirst />,
            },
            {
                path: "/example",
                element: (
                    <div>
                        <code>
                            {`
                    
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <main>
      <h1>My Favourite Animals</h1>
      <section>
        <marquee behavior="alternate"><h2>Elephants</h2></marquee>
        <img src="elephant.webp" width="400px" />
        <p>
          Elephants are large mammals of the family Elephantidae and the order
          Proboscidea. Three species are currently recognised: the African bush
          elephant, the african forest elephant, and the Asian elephant.
        </p>
        <a href="https://en.wikipedia.org/wiki/Elephant"
          >Click here to learn more</a
        >
      </section>
      <section>
        <marquee behavior="alternate"><h2>Panda</h2></marquee>
        <img src="panda.jpg" width="400px" />
        <p>
          A panda is a large bear native to south central China. It is easily
          reconised by it's large, distinctive black patches around the eyes,
          over the ears, and across its round body.
        </p>
        <a href="https://en.wikipedia.org/wiki/Giant_panda"
          >Click here to learn more</a
        >
      </section>
      <section>
        <marquee behavior="alternate"><h2>Dog</h2></marquee>
        <img src="dog.jpg" />
        <p>
          The dog or domestic dog is a domesticated descendant of the wolf. Also known as the domestic dog, it is derived from the extinct wolf, and the modern dog is the most widely abundant terrestrial carnivore.'
        </p>
        <a href="https://en.wikipedia.org/wiki/Dog">Click here to learn more</a>
      </section>
    </main>
    <script type="module" src="script.js"></script>
  </body>
</html>`}
                        </code>
                    </div>
                ),
            },
            {
                path: "password-style",
                element: (
                    <><code><div>CSS</div>
                        {`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  width: 100%;
  font-family: Arial, sans-serif;
}

main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#submit-button {
  padding: 20px 40px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: 3px solid #000;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#submit-button:hover {
  background-color: #45a049;
}

#submit-button:active {
  transform: scale(0.98);
}

#input-field {
  padding: 10px 5px;
  font-size: 18px;
  border: 3px solid #000;
  border-radius: 8px;
}`}
                    </code><div>html</div>
                    <code>
                        {`<!--
  Hit RUN to see this project in action!
  
  This project will auto-refresh as you edit the HTML, CSS and JS. See README.md for more info (including how to disable auto-refresh and install packages).
-->

<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <main>
      
      <div style="display: flex; flex-direction: column; gap: 20px">
        <input id="input-field" type="text" />
        <button id="submit-button">Submit</button>
        <div id="output-field"></div>
      </div>
      
    </main>

    <script type="module" src="script.js"></script>
  </body>
</html>
`}
                    </code><div>js</div><code>{`let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", printInputField);

function printInputField() {
  let input = document.getElementById("input-field");
  let users_password = input.value;
  let outputField = document.getElementById("output-field");
  let rule1 = checkRules(users_password);
  if (rule1 !== true) {
    outputField.innerText = rule1;
  } else {
    outputField.innerText = "Password is valid";
  }
}

function checkRules(users_password) {
  return true;
}
`}</code></>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>,
);
