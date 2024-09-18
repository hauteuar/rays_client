import { Select, Textarea } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
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
} from "@chakra-ui/react";

import { Avatar, Box, Card, CardHeader, Flex } from "@chakra-ui/react";

import UploadsTableRow from "./UploadsTableRow";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import UploadsTableFileUploadComponent from "./UploadsTableFileUploadComponent";

export function UploadsTable() {
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);

  const handleFileUploadClick = () => {
    setIsFileUploadModalOpen(true);
  };

  const handleCloseFileUploadModal = () => {
    setIsFileUploadModalOpen(false);
  };

  const files = [
    {
      receiver: "Michael Jessica",
      receiverRole: "Coach",
      title: "Video Title",
      sentDate: "14 Jan 2024",
      readDate: "20 Jan 2024",
      status: "Read",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
    {
      receiver: "Fundamentals of Cricket",
      receiverRole: "Student",
      title: "Video Title",
      sentDate: "06 Dec 2023",
      readDate: "-",
      status: "Pending",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
    {
      receiver: "Emily Smith",
      receiverRole: "Coach",
      title: "Video Title",
      sentDate: "20 Nov 2024",
      readDate: "-",
      status: "Pending",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
    {
      receiver: "Fundamentals of Cricket",
      receiverRole: "Coach",
      title: "Video Title",
      sentDate: "10 Nov 2023",
      readDate: "13 Nov 2023",
      status: "Read",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
    {
      receiver: "Ava Williams",
      receiverRole: "Admin",
      title: "Video Title",
      sentDate: "06 Dec 2023",
      readDate: "-",
      status: "Pending",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
    {
      receiver: "Ethan Anderson",
      receiverRole: "Coach",
      title: "Video Title",
      sentDate: "20 Nov 2023",
      readDate: "-",
      status: "Pending",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
    {
      receiver: "Wilson",
      receiverRole: "Admin",
      title: "Video Title",
      sentDate: "10 Nov 2023",
      readDate: "13 Nov 2023",
      status: "Read",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
    {
      receiver: "Fundamentals of Cricket",
      receiverRole: "Coach",
      title: "Video Title",
      sentDate: "10 Nov 2023",
      readDate: "13 Nov 2023",
      status: "Read",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
    {
      receiver: "Ava Williams",
      receiverRole: "Admin",
      title: "Video Title",
      sentDate: "06 Dec 2023",
      readDate: "-",
      status: "Pending",
      thumbnail: "/src/assets/ray-sports-thumbnail.jpg",
    },
  ];
  return (
    <>
      <div className="bg-white w-full h-full">
        <div className="w-full flex pr-4 items-center justify-between">
          <div className="w-[60%] flex justify-start items-center gap-4">
            <Select
              icon={<MdArrowDropDown />}
              placeholder="All Coach"
              className="mx-5"
            >
              <option value="coach1">Coach Name 1</option>
              <option value="coach2">Coach Name 2</option>
              <option value="coach2">Coach Name 3</option>
            </Select>

            <Select
              icon={<MdArrowDropDown />}
              placeholder="All Year"
              className="mx-5"
            >
              <option value="coach1">Monthly</option>
              <option value="coach2">Quarterly</option>
              <option value="coach2">Yearly</option>
            </Select>

            <Select
              icon={<MdArrowDropDown />}
              placeholder="2024"
              className="mx-5"
            />
            <span className="whitespace-nowrap ml-4">
              Total&nbsp;uploads&nbsp;-&nbsp;35
            </span>
          </div>
          <Button
            leftIcon={<FiUpload />}
            colorScheme="blue"
            variant="solid"
            size="large"
            p={2}
            onClick={handleFileUploadClick}
          >
            Upload file
          </Button>
        </div>
        <div className="mt-4 ml-5">
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>File</Th>
                  <Th>Receiver</Th>
                  <Th>Sent date</Th>
                  <Th>Read date</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {files.map((file, index) => (
                  <UploadsTableRow
                    key={index}
                    receiver={file.receiver}
                    receiverRole={file.receiverRole}
                    title={file.title}
                    sentDate={file.sentDate}
                    readDate={file.readDate}
                    status={file.status}
                    thumbnail={file.thumbnail}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <Modal
        isOpen={isFileUploadModalOpen}
        onClose={handleCloseFileUploadModal}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-black" style={{ fontWeight: 700 }}>
            Upload
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
          <div className="w-full p-3 flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2 w-full">
              <span className="text-black font-semibold text-lg">
                Select file
              </span>
              <UploadsTableFileUploadComponent />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <span className="text-black font-semibold text-lg">
                Select Receiver
              </span>
              <Select
                placeholder="Select an option"
                h="42px" // Adjust height to match typical button height
                w="full"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <span className="text-black font-semibold text-lg">Comment</span>
              <Textarea
                placeholder="Type your message..."
                w="full" // Takes up the full width of the parent container
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md" // Adds rounded borders
              />
            </div>
          </div>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Flex
              direction="row"
              justify="center"
              align="center"
              w="full"
              gap={1} // Adjust gap between buttons as needed
            >
              <Button
                variant="outline" // Makes the button have an outline style
                borderColor="blue.500" // Sets the border color to blue
                color="blue.500" // Sets the text color to blue
                mr={3}
                onClick={handleCloseFileUploadModal} // Add your cancel handler here if different from close
                size="lg"
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleCloseFileUploadModal}
                size="lg"
              >
                Send
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UploadsTable;
