import { Suspense, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiTheme } from "@mui/material/styles";
import Loading from "./components/Loading/loading";
import { AppState } from "./redux/store";
// import { toggleTheme } from "./redux/actions/theme.action";
import { lightTheme, darkTheme } from "./theme/theme";
import RootRoutes from "./routes/RootRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/common/Header";
import { GlobalStyle } from "./components/GlobalStyles";

function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppState) => state);

  // const toggleTheme_ = useCallback(() => {
  //   dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  // }, [theme, dispatch]);

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <MuiTheme theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Header />
          {/* <Routes>
            {RootRoutes.routes.map((route, Index) => (
              <Route path={route.path} element={route.component} key={Index} />
            ))}
          </Routes> */}
          <ToastContainer autoClose={3000} />
        </MuiTheme>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
