import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Router from "./routing/Router";

const theme = createTheme({
  typography: {
    
  },
});

function App() {
  return (
    <div className="main-bg">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
