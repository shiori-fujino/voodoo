import { Routes, Route, useLocation } from "react-router-dom";
import { ChakraProvider, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Home from "./pages/Home";
import theme from "./theme";
import ModelProfileModal from "./components/ModelProfileModal";

function App() {
  const location = useLocation();
  const state = location.state as { background?: Location };

  return (
    <ChakraProvider theme={theme}>
      {/* Main tabs */}
      <Tabs variant="enclosed" index={1}>
        <TabList>
          <Tab>About Us</Tab>
          <Tab>Roster</Tab>
          <Tab>Service & Rate</Tab>
          <Tab>Contact Us</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>About content here...</TabPanel>
          <TabPanel>
            {/* Home page renders here */}
            <Routes location={state?.background || location}>
              <Route path="/" element={<Home />} />
            </Routes>
          </TabPanel>
          <TabPanel>Service content here...</TabPanel>
          <TabPanel>Contact content here...</TabPanel>
        </TabPanels>
      </Tabs>

      {/* Modal route */}
      <Routes>
        <Route path="/model/:id" element={<ModelProfileModal />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
