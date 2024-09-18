
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IconButton } from '@chakra-ui/react';
import { FaShareAlt } from 'react-icons/fa';
// eslint-disable-next-line react/prop-types
export function ReportSessionReportTabTableRow({courseName, courseDuration, batting, bowling, fielding, fitness}) {
    //const navigate = useNavigate();
    console.log("tablerow courseName: ", courseName)
    /*const handleClick = () => {
        navigate("/reports/reportsAttendanceDetails", {state: {
            courseName: courseName,
            completedSessions: completedSessions,
            present: present,
            absent: absent
        }});
    }
  */
    const [isSessionReportDetailsModalOpen, setIsSessionReportDetailsModalOpen] = useState(false);

    const handleSessionReportDetailsModalClick = () => {
      setIsSessionReportDetailsModalOpen(true);
    };
  
    const handleCloseSessionReportDetailsModal = () => {
      setIsSessionReportDetailsModalOpen(false);
    };


    const data = [
      {date: "13-02-2024",
        batting: "20 min",
        bowling: "20 min",
        fielding: "20 min",
        fitness: "20 min",
      },
      {date: "10-02-2024",
        batting: "20 min",
        bowling: "30 min",
        fielding: "30 min",
        fitness: "30 min",
      },{date: "08-02-2024",
        batting: "30 min",
        bowling: "30 min",
        fielding: "Not Assigned",
        fitness: "30 min",
      },{date: "06-02-2024",
        batting: "20 min",
        bowling: "30 min",
        fielding: "30 min",
        fitness: "30 min",
      },{date: "02-04-2024",
        batting: "20 min",
        bowling: "20 min",
        fielding: "20 min",
        fitness: "20 min",
      },{date: "10-02-2024",
        batting: "20 min",
        bowling: "10 min",
        fielding: "10 min",
        fitness: "Not Assigned",
      },{date: "08-02-2024",
        batting: "20 min",
        bowling: "10 min",
        fielding: "10 min",
        fitness: "10 min",
      },{date: "06-02-2024",
        batting: "15 min",
        bowling: "Not Assigned",
        fielding: "15 min",
        fitness: "15 min",
      },{date: "04-02-2024",
        batting: "Not Assigned",
        bowling: "Not Assigned",
        fielding: "20 min",
        fitness: "20 min",
      },{date: "10-02-2024",
        batting: "20 min",
        bowling: "20 min",
        fielding: "20 min",
        fitness: "20 min",
      },{date: "08-02-2024",
        batting: "15 min",
        bowling: "15 min",
        fielding: "Not Assigned",
        fitness: "15 min",
      },{date: "06-02-2024",
        batting: "20 min",
        bowling: "20 min",
        fielding: "20 min",
        fitness: "20 min",
      },{date: "10-02-2024",
        batting: "20 min",
        bowling: "20 min",
        fielding: "20 min",
        fitness: "20 min",
      },{date: "08-02-2024",
        batting: "15 min",
        bowling: "15 min",
        fielding: "Not Assigned",
        fitness: "15 min",
      },{date: "06-02-2024",
        batting: "20 min",
        bowling: "20 min",
        fielding: "20 min",
        fitness: "20 min",
      }
    ]

    return (
    
<>
<Tr
      onClick={handleSessionReportDetailsModalClick}
      className="cursor-pointer"
      sx={{
        _hover: {
          bg: "gray.100", // Adjust color as needed
        },
      }}
    >
      <Td className="text-left">{courseName}</Td>
      <Td className="text-left">{courseDuration}</Td>
      <Td className="text-left">{batting}</Td>
      <Td className="text-left">{bowling}</Td>
      <Td className="text-left">{fielding}</Td>
      <Td className="text-left">{fitness}</Td>

    </Tr>

    <Modal
        isOpen={isSessionReportDetailsModalOpen}
        onClose={handleCloseSessionReportDetailsModal}
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-black" style={{ fontWeight: 700 }}>
            {courseName}
          </ModalHeader>
          <ModalCloseButton
            border="2px"
            borderColor="gray.300"
            borderRadius="full"
            background="gray.200"
            color="black"
            _hover={{ background: "gray.300" }}
            _focus={{ boxShadow: "none" }}
          />
          <hr className="w-full bg-gray-300 h-[1px]" />
          <div className="mt-4 flex flex-row justify-end items-center gap-2 p-2">
          <Select
          icon={<MdArrowDropDown />}
          placeholder="All Year"
          
          size="md"
          width="2xs"
        >
          <option value="coach1">Monthly</option>
          <option value="coach2">Quarterly</option>
          <option value="coach2">Yearly</option>
        </Select>

        <Select
          icon={<MdArrowDropDown />}
          placeholder="2024"
          
          width="2xs"
          mr={2}
        />

<IconButton
      aria-label="Share"
      icon={<FaShareAlt />}
      variant="outline"
      borderColor="blue.500"
      color="blue.500"
      _hover={{ bg: 'blue.50', borderColor: 'blue.600', color: 'blue.600' }}
      _active={{ bg: 'blue.100', borderColor: 'blue.700' }}
    />
          </div>
          <span className="text-left ml-6 mb-4">Completed sessions - <b>26 days</b></span>
          <hr className="w-full bg-gray-300 h-[1px]" />
          <TableContainer className="mt-4">
            <Table>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Batting</Th>
                  <Th>Bowling</Th>
                  <Th>Fielding</Th>
                  <Th>Fitness</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.date}</Td>
                    <Td className={`${data.batting === "Not Assigned" ? "text-red-700 font-semibold" : ""}`}>{data.batting}</Td>
                    <Td className={`${data.bowling === "Not Assigned" ? "text-red-700 font-semibold" : ""}`}>{data.bowling}</Td>
                    <Td className={`${data.fielding === "Not Assigned" ? "text-red-700 font-semibold" : ""}`}>{data.fielding}</Td>
                    <Td className={`${data.fitness === "Not Assigned" ? "text-red-700 font-semibold" : ""}`}>{data.fitness}</Td>
                  </Tr>
                 
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <ModalBody></ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
</>
 
  );
}

export default ReportSessionReportTabTableRow;