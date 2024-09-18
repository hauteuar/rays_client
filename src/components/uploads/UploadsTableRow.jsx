import { useState } from "react";
import {
  Tr,
  Td,
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

// eslint-disable-next-line react/prop-types
export function UploadsTableRow({title, receiver, receiverRole, sentDate, readDate, status, index, thumbnail,}) {
  const [isUploadDetailModalOpen, setIsUploadDetailModalOpen] = useState(false);

  const handleRowClick = () => {
    setIsUploadDetailModalOpen(true);
  };

  const handleCloseUploadDetailModal = () => {
    setIsUploadDetailModalOpen(false);
  };




  return (
    <>
      <Tr key={index} onClick={handleRowClick} className="cursor-pointer">
        <Td>
          <div className="flex justify-start items-center gap-2">
            <img src={thumbnail} />
            <span>{title}</span>
          </div>
        </Td>
        <Td>
          <Card
            p={0} // Padding
            maxW="fit-content" // Fit width to content
            maxH="fit-content" // Fit height to content
            variant="unstyled"
          >
            <CardHeader m={0}>
              <Flex spacing="0">
                <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                  <Avatar
                    size="sm"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />

                  <Box>
                    <div className="flex flex-col justify-start items-start">
                      <span className="text-sm">{receiver}</span>
                      <span className="text-xs text-gray-500">
                        {receiverRole}
                      </span>
                    </div>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
          </Card>
        </Td>

        <Td>{sentDate}</Td>
        <Td>{readDate}</Td>
        <Td>
          <div
            className={`rounded-full flex justify-center items-center p-2 ${
              status === "Read"
                ? "border-2 border-green-500 p-2"
                : "border-2 border-yellow-500 p-2"
            }`}
          >
            <span
              className={`${
                status === "Read" ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {status}
            </span>
          </div>
        </Td>
      </Tr>
      <Modal isOpen={isUploadDetailModalOpen} onClose={handleCloseUploadDetailModal} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Video Title Name</ModalHeader>
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
          <ModalBody>
            <div className="p-4 flex gap-2">
              <img
                src="/src/assets/UploadsDetailsImage.jpg"
                className="rounded-xl mt-2"
              />
              <div className="flex flex-wrap w-full">
                <div className="w-full sm:w-1/2 p-2 mt-2">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-lg">Receiver</span>
                    <div>
                      <Card
                        p={0} // Padding
                        maxW="fit-content" // Fit width to content
                        maxH="fit-content" // Fit height to content
                        variant="unstyled"
                      >
                        <CardHeader m={0}>
                          <Flex spacing="0">
                            <Flex
                              flex="1"
                              gap="2"
                              alignItems="center"
                              flexWrap="wrap"
                            >
                              <Avatar
                                size="md"
                                name="Segun Adebayo"
                                src="https://bit.ly/sage-adebayo"
                              />

                              <Box>
                                <div className="flex flex-col justify-start items-start">
                                  <span className="text-base font-semibold">
                                    {receiver}
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    {receiverRole}
                                  </span>
                                </div>
                              </Box>
                            </Flex>
                          </Flex>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-2 mt-2">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-lg">Sent date</span>
                    <span className="text-lg font-semibold">{sentDate}</span>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-2 mt-2">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-lg">Read date</span>
                    <span className="text-lg font-semibold">{readDate}</span>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-2 mt-2">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-lg">Status</span>
                    <div
                      className={`rounded-full flex justify-center items-center p-2 w-full ${
                        status === "Read"
                          ? "border-2 border-green-500 p-2"
                          : "border-2 border-yellow-500 p-2"
                      }`}
                    >
                      <span
                        className={`${
                          status === "Read"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-lg">Comment</span>
              <span className="text-lg font-semibold">&quot;Hey Coach! I&apos;ve uploaded a video of my batting practice session.
                I&apos;ve been working on my footwork and stroke play, trying to implement the tips you gave me during 
                our last session. Please take a look and let me know what I&apos;m doing well and what I need 
                to improve on.&quot;
              </span>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseUploadDetailModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UploadsTableRow;
