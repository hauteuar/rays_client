import { Tr, Td } from "@chakra-ui/react";
import { Avatar, Box, Card, CardHeader, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function TaskTotalAssignmentTabTableRow({ id, coach, title, assignedOn, status }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/task/taskDetails", {
      state: {id, coach, title, assignedOn, status },
    });
  };

  return (
    <Tr className="hover:bg-gray-200 cursor-pointer" onClick={handleClick}>
      <Td>
        <Card variant="unstyled">
          <CardHeader>
            <Flex spacing="2">
              <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                <Avatar size="sm" name={coach} />
                <Box>
                  <Heading size="xs">{coach}</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>
      </Td>
      <Td>{title}</Td>
      <Td>{assignedOn}</Td>
      <Td>
        <div className={`rounded-full flex justify-center items-center p-2 ${status === "Read" ? "border-2 border-green-500" : "border-2 border-yellow-500"}`}>
          <span className={`${status === "Read" ? "text-green-500" : "text-yellow-500"}`}>
            {status}
          </span>
        </div>
      </Td>
    </Tr>
  );
}

export default TaskTotalAssignmentTabTableRow;
