import { Avatar, Box, Card, CardHeader, Flex, Heading} from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
export function LaneContainerAthleteCard({name, key}) {
    return (
<Card 
      borderRadius="full"    // Fully rounded corners
      border="1px"
      borderColor="gray.200"
      bg="#d3f5d9"        // Light green background
      p={0}                  // Padding
      maxW="fit-content"     // Fit width to content
      maxH="fit-content"     // Fit height to content
      key={key}
      >
  <CardHeader p={2} m={0}>
    <Flex spacing='0'>
      <Flex flex='1' gap='1' alignItems='center' flexWrap='wrap'>
        <Avatar size="sm" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='xs' m={0}>{name}</Heading>

        </Box>
      </Flex>
  
    </Flex>
  </CardHeader>
  
</Card>
    )
}

export default LaneContainerAthleteCard;
