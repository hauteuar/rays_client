import {
  Tr,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Select,
  IconButton,
  TableContainer,
  Table,
  Thead,
  Th,
  Tbody,
  ModalBody,
  ModalFooter,
  Avatar,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";

function getProgressBarColor(remaining) {
  switch (remaining) {
    case 100:
      return "green"
    case 90:
      return "red";
    case 70:
      return "orange";
    case 50:
      return "yellow";
    default:
      return "green";
  }
}

const data = [
  {sl: "1",
    paymentRequiredDate: "15-6-2023",
    paymentDate: "15-6-2023",
    paymentAmount: "$50",
    paymentStatus: 100
  },
  {sl: "2",
    paymentRequiredDate: "20-9-2023",
    paymentDate: "20-9-2023",
    paymentAmount: "$50",
    paymentStatus: 100
  },
  {sl: "3",
    paymentRequiredDate: "10-1-2024",
    paymentDate: "10-1-2024",
    paymentAmount: "$50",
    paymentStatus: 100
  },
  {sl: "4",
    paymentRequiredDate: "15-3-2024",
    paymentDate: "15-3-2024",
    paymentAmount: "$50",
    paymentStatus: 100
  },
  {sl: "5",
    paymentRequiredDate: "20-6-2024",
    paymentDate: "-",
    paymentAmount: "$50",
    paymentStatus: 90
  },
  {sl: "6",
    paymentRequiredDate: "15-9-2024",
    paymentDate: "-",
    paymentAmount: "$50",
    paymentStatus: ""
  }
]
// eslint-disable-next-line react/prop-types
export function ReportPaymentsTabTableRow({courseName, courseFee, batch, paymentType, paymentDueDate,remaining,
}) {
  //const navigate = useNavigate();
  console.log("tablerow courseName: ", courseName);
  /*const handleClick = () => {
        navigate("/reports/reportsAttendanceDetails", {state: {
            courseName: courseName,
            completedSessions: completedSessions,
            present: present,
            absent: absent
        }});
    }
  */
  const progressBarColor = getProgressBarColor(remaining);

  const [isPaymentsDetailsModalOpen, setIsPaymentsDetailsModalOpen] =
    useState(false);

  const handlePaymentDetailsModalClick = () => {
    setIsPaymentsDetailsModalOpen(true);
  };

  const handleClosePaymentDetailsModal = () => {
    setIsPaymentsDetailsModalOpen(false);
  };
  return (
    <>
      <Tr
        onClick={handlePaymentDetailsModalClick}
        className="cursor-pointer"
        sx={{
          _hover: {
            bg: "gray.100", // Adjust color as needed
          },
        }}
      >
        <Td className="text-left">{courseName}</Td>
        <Td className="text-left">{courseFee}</Td>
        <Td className="text-left">{batch}</Td>
        <Td className="text-left">{paymentType}</Td>
        <Td className="text-left">{paymentDueDate}</Td>
        <Td className="text-left p-0">
          {remaining === 0 ? (
            <div className="flex items-center justify-center rounded-full border-gray-200 border-2 p-2 bg-gray-100">
              <span className="text-center">Fully Paid</span>
            </div>
          ) : (
            <Progress
              value={remaining} // Sets the progress to 90%
              size="sm" // Optional: Adjusts the size of the progress bar
              colorScheme={progressBarColor} // Sets the color to red
              borderRadius="md" // Optional: Adds rounded corners
              className="w-full"
            />
          )}
        </Td>
      </Tr>

      <Modal
        isOpen={isPaymentsDetailsModalOpen}
        onClose={handleClosePaymentDetailsModal}
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-black" style={{ fontWeight: 700 }}>
            <div className="p-4 flex items-center justify-between mr-8">
              <span className="font-bold text-2xl">Payment details</span>

              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">17-6-2024</span>
                <span>Today date</span>
              </div>
            </div>
            <ModalCloseButton
              border="2px"
              borderColor="gray.300"
              borderRadius="full"
              background="gray.200"
              color="black"
              _hover={{ background: "gray.300" }}
              _focus={{ boxShadow: "none" }}
              mt={8}
            />
          </ModalHeader>

          <hr className="w-full bg-gray-300 h-[1px]" />
          <div className="flex gap-6 items-center px-6">
            <div className="flex gap-2 items-center justify-start">
              <Avatar
                size="md"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
                bg="transparent"
                className="bg-transparent"
              />
              <span className="text-lg font-semibold">Alice Smith</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-400 my-10" />
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold">{courseName}</span>
              <span>Course name</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-400 my-10" />
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold">{batch}</span>
              <span>Batch</span>
            </div>
          </div>

          <div className="px-8 flex justify-start">
            <div className="flex gap-6 items-center px-6 bg-blue-100 rounded-lg w-fit">
              <div className="flex flex-col items-start w-40">
                <span className="text-xl font-bold">{courseFee}</span>
                <span>Actual course fee</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-400 my-10" />
              <div className="flex flex-col items-start w-40">
                <span className="text-xl font-bold">{paymentType}</span>
                <span>Payment Type</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-400 my-10" />
              <div className="flex flex-col items-start w-40">
                <span className="text-xl font-bold">$300</span>
                <span>Total course fee</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-400 my-10" />
              <div className="flex flex-col items-start w-40">
                <span className="text-xl font-bold">$100</span>
                <span>Paid</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-400 my-10" />
              <div className="flex flex-col items-start w-40">
                <span className="text-xl font-bold">$50</span>
                <span>Balance</span>
              </div>
            </div>
          </div>


            <b className="ml-8 my-6 text-2xl">Payment Details</b>
      
          <hr className="w-full bg-gray-300 h-[1px]" />
          <TableContainer className="mt-4">
            <Table>
              <Thead>
                <Tr>
                  <Th>SL</Th>
                  <Th>Payment required date</Th>
                  <Th>Payment date</Th>
                  <Th>Payment amount</Th>
                  <Th>Payment status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.sl}</Td>
                    <Td >{data.paymentRequiredDate}</Td>
                    <Td >{data.paymentDate}</Td>
                    <Td >{data.paymentAmount}</Td>
                    <Td >
                    {data.paymentStatus === "" ? (
            ""
          ) : (
            <Progress
              value={data.paymentStatus} // Sets the progress to 90%
              size="sm" // Optional: Adjusts the size of the progress bar
              colorScheme={getProgressBarColor(data.paymentStatus)} // Sets the color to red
              borderRadius="md" // Optional: Adds rounded corners
              className="w-full"
            />
          )}
                    </Td>
                  </Tr>
                 
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <ModalBody></ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ReportPaymentsTabTableRow;
