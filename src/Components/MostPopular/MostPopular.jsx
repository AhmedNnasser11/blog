import React, { useState } from "react";
import { HeadTitle, MostPopularContainer } from "./MostPopularStyle";
import { Box, Tab } from "@mui/material";
import { CustomContainer } from "./MostPopularStyle";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Accessibility from "./Accessibility/Accessibility";
import AndroidDev from "./AndroidDev/AndroidDev"
import Gadgets from "./Gadgets/Gadgets"

const MostPopular = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MostPopularContainer>
      <CustomContainer maxWidth="xl">
        <HeadTitle>Most Popular</HeadTitle>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box>
              <TabList
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Accessibility" value="1" />
                <Tab label="Android & Dev" value="2" />
                <Tab label="Gadgets" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
                <Accessibility />
            </TabPanel>
            <TabPanel value="2">
              <AndroidDev />
            </TabPanel>
            <TabPanel value="3">
              <Gadgets />
            </TabPanel>
          </TabContext>
        </Box>
      </CustomContainer>
    </MostPopularContainer>
  );
};

export default MostPopular;
