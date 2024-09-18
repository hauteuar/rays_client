import { Avatar, Box, Card, CardHeader, Flex, Heading} from '@chakra-ui/react'

export function CoachesContainerCard() {
    return (
<Card maxW='md' w='sm' borderRadius='0' border='1px' borderColor='gray.200'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>

        </Box>
      </Flex>
  
    </Flex>
  </CardHeader>
  
</Card>
    )
}

export default CoachesContainerCard;