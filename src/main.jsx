import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-mahfuj.us.auth0.com"
    clientId="3jMGEbxuOdhbXCv8Uc3S9mise0DUiH6K"
    authorizationParams={{
      redirect_uri: "https://nestoria-frontend.vercel.app",
    }}
    audience="http://localhost:3000"
    scope="openid profile email"
  >
    <MantineProvider>
      <App />
    </MantineProvider>
  </Auth0Provider>
);
