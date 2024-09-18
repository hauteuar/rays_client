import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ReportAttendanceTab from "../../components/report/ReportAttendanceTab";
import ReportReflectionSheetTab from "../../components/report/ReportReflectionSheetTab";
import ReportSessionReportTab from "../../components/report/ReportSessionReportTab";
import ReportPurchasedCoursesTab from "../../components/report/ReportPurchasedCoursesTab";
import ReportPaymentsTab from "../../components/report/ReportPaymentsTab";
export function Reports() {
  return (
    <div className="p-5">
      <div className="text-left pl-4">
        <span className="text-2xl font-bold">Reports</span>
      </div>

      <div className="mt-4">
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ 
                outline: "none", 
                boxShadow: "none" 
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48  rounded-lg">
                <span className="text-3xl font-semibold text-blue-500">
                  50/74
                </span>
                <span>Attendance</span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ 
                outline: "none", 
                boxShadow: "none" 
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48  rounded-lg">
                <span className="text-3xl font-semibold text-blue-500">43</span>
                <span>Reflection Sheet</span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ 
                outline: "none", 
                boxShadow: "none" 
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48  rounded-lg">
                <span className="text-3xl font-semibold text-blue-500">3</span>
                <span>Session Report</span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ 
                outline: "none", 
                boxShadow: "none" 
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48 rounded-lg">
                <span className="text-3xl font-semibold text-blue-500">7</span>
                <span>Purchased Courses</span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ 
                outline: "none", 
                boxShadow: "none" 
              }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48  rounded-lg">
                <span className="text-3xl font-semibold text-blue-500">
                  Pending&nbsp;2
                </span>
                <span>Payments</span>
              </div>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ReportAttendanceTab />
            </TabPanel>
            <TabPanel>
              <ReportReflectionSheetTab />
            </TabPanel>
            <TabPanel>
              <ReportSessionReportTab />
            </TabPanel>
            <TabPanel>
              <ReportPurchasedCoursesTab />
            </TabPanel>
            <TabPanel>
              <ReportPaymentsTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default Reports;
