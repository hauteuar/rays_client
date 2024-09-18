import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
  } from "@chakra-ui/react";
  
  function VerticalTabs() {
    return (
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Tabs orientation="vertical" variant="line">
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
  
          <TabPanels>
            <TabPanel>
              <p>Content for Tab 1</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 2</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  }
  
  export default VerticalTabs;