import { useState } from 'react';
import { Button, Input, Text, Flex, Box } from '@chakra-ui/react';

export function UploadsTableFileUploadComponent() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" bg="white" gap={4} className="w-full">
      <Box
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        p={2}
        minW="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={1}
      >
        <Text noOfLines={1} color="gray.700" fontWeight="medium">
          {fileName || 'No file selected'}
        </Text>
      </Box>

      <Input
        type="file"
        onChange={handleFileChange}
        display="none"
        id="file-upload"
      />
      <Button
        as="label"
        htmlFor="file-upload"
        colorScheme="blue"
        cursor="pointer"
        size="lg"
      >
        Choose file
      </Button>
    </Flex>
  );
}

export default UploadsTableFileUploadComponent;
