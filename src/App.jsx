import { Container, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Form from "./component/Form";
import ListGroup from "./component/ListGroup";
import Navbar from "./component/Navbar";
import Quote from "./component/Quote";

const App = () => {
  const [color, setColor] = useState(false);

  const theme = createTheme({
    typography: {
      h5: {
        fontFamily: '"Anta", sans-serif',
        fontWeight: "400",
        fontStyle: "normal",
      },
      h4: {
        fontFamily: '"Kode Mono", monospace',
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: "-1.5px",
        wordSpacing: "-8px",
      },
      h6: {
        fontFamily: '"Kanit", sans-serif',
        fontWeight: "400",
        fontStyle: "italic",
      },
    },
    palette: {
      primary: {
        main: color ? "#78909c" : "#81c784",
      },
      secondary: {
        main: color ? "#757575" : "#607d8b",
      },
      info: {
        main: color ? "#03a9f4" : "#64ffda",
      },
      error: {
        main: color ? "#b71c1c" : "#ec407a",
      },
      warning: {
        main: color ? "#c0ca33" : "#c6ff00",
      },
      success: {
        main: color ? "#00bcd4" : "#00c853",
      },
    },
  });
  const handleTheme = () => {
    if (color) {
      setColor(false);
    } else {
      setColor(true);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: color ? "#757575" : "#fff" }}>
        <Navbar handleTheme={handleTheme} color={color} />

        <Container
          sx={{
            //   background:"url(https://img.freepik.com/premium-photo/customer-showing-rating-with-happy-icon-sky-background-customer-satisfaction-survey-concept-copy-space_52701-142.jpg?size=626&ext=jpg&ga=GA1.1.1223899148.1698901132&semt=sph)" ,
            //  backgroundSize: "cover",backgroundPosition:'center',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingBlock: "25px",
          }}
        >
          <Quote />
          <br />
          <Form color={color} />
        </Container>
        <ListGroup color={color} />
      </div>
    </ThemeProvider>
  );
};

export default App;
