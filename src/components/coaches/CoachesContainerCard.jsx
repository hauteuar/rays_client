import { Avatar, Box, Card, CardHeader, Flex, Heading } from '@chakra-ui/react';

export function CoachesContainerCard({ coach, onSelect }) {
  return (
    <Card maxW="md" w="sm" borderRadius="0" border="1px" borderColor="gray.200" onClick={onSelect}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={`${coach.first_name} ${coach.last_name}`} src={coach.detail?.image || 'https://bit.ly/sage-adebayo'} />
            <Box>
              <Heading size="sm">{`${coach.first_name} ${coach.last_name}`}</Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
    </Card>
  );
}

export default CoachesContainerCard;