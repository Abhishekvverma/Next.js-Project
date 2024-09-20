// // src/pages/_app.tsx
// import '../styles/App.css'; // Adjust the path as needed

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function MyApp({ Component, pageProps }: any) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;



// /pages/_app.tsx

import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";
import type { Session } from 'next-auth';
import "../styles/App.css";

// Define the theme for Material UI
const theme = createTheme({
  palette: {
    primary: { main: "#3f51b5" },
    secondary: { main: "#f50057" },
  },
});

// Extend AppProps with session
interface MyAppProps extends AppProps {
  pageProps: {
    session?: Session;
  };
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
