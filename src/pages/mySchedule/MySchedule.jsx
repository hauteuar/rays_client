import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
//import { CalendarIcon } from "@heroicons/react/24/solid";
import DayScheduler from "../../components/dayScheduler/DayScheduler";
export function MySchedule() {
  return (
    <div className="p-8 w-full">
      <div className="w-full">

          <Tabs variant="soft-rounded" colorScheme="green" className="w-full">
            <TabList>
              <Tab>Daily</Tab>
              <Tab>Monthly</Tab>
              <Tab>Yearly</Tab>
            </TabList>
            <TabPanels className="w-full">
              <TabPanel className="w-full">
                <div className="w-full">
                  <DayScheduler />
                </div>
              </TabPanel>
              <TabPanel>
                <p>Monthly</p>
              </TabPanel>
              <TabPanel>
                <p>Yearly</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          
          
      </div>
    </div>
  );
}

export default MySchedule;
