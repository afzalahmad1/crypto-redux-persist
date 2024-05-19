import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Grid from "../Grid";
import List from '../List'
import './styles.css'

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",

    fontSize: "1.2rem",
    fontFamily: "inter",
    textTransform: "Capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
          <div className="grid-flex">
             {
              coins.map((coin,idx)=>{
                return <Grid coin={coin}  key={idx}/>
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            <tbody className="list-table">
            {
              coins.map((coin,idx)=>{
                return(
                  <List  coin={coin}  key={idx}/>
                  )
                })
              }
              </tbody>
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
