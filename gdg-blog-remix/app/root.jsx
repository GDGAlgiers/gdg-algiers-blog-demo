import { Links, LiveReload, Meta, Outlet } from "@remix-run/react";

import styles from "./styles/app.css";
import logo from "../public/logo.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const meta = () => ({
  charset: "utf-8",
  title: "GDG Blog",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body>
        <Navbar />
        <Outlet />

        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", type: "image/x-icon", href: logo },
];
