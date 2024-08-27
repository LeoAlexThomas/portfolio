import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { theme } from "@/theme";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPX9zS4XSJarOV7tAK7CWZJywVqVdWnlY",
  authDomain: "portfolio-e9ae5.firebaseapp.com",
  projectId: "portfolio-e9ae5",
  storageBucket: "portfolio-e9ae5.appspot.com",
  messagingSenderId: "819356773966",
  appId: "1:819356773966:web:751558a6c3cffc8a8d1d1f",
};

export default function App({ Component, pageProps }: AppProps) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
