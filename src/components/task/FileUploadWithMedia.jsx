import { useDropzone } from 'react-dropzone';
import { Box, Button, Input, Icon, Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import { FiMic, FiCamera, FiFolder } from 'react-icons/fi'; // Icons for microphone, camera, and folder

export function FileUploadWithMedia() {
  const { getRootProps, getInputProps } = useDropzone();
  const audioInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const mediaInputRef = useRef(null);

  const handleAudioCapture = () => {
    audioInputRef.current.click();
  };

  const handleCameraCapture = () => {
    cameraInputRef.current.click();
  };

  const handleMediaUpload = () => {
    mediaInputRef.current.click();
  };

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue.400',
    color: 'blue.400',
    variant: 'outline',
    height: '100px', // Increased height to fit the contents
    width: '120px', // Increased width for more space
    p: 2,
    m: 2,
  };

  return (
    <Box
      p={4}
      border="2px dashed"
      borderColor="gray.300"
      borderRadius="md"
      textAlign="center"
      bg="white"
    >
      <Box {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop files here, or click to browse</p>
      </Box>

      <Flex justifyContent="center" mt={4} gap={4} wrap="wrap">
        <Button {...buttonStyle} onClick={handleAudioCapture}>
          <Icon as={FiMic} boxSize={6} mb={1} />
          Record Audio
        </Button>
        <Input
          type="file"
          accept="audio/*"
          capture="microphone"
          ref={audioInputRef}
          style={{ display: 'none' }}
          onChange={(e) => console.log(e.target.files[0])}
        />

        <Button {...buttonStyle} onClick={handleCameraCapture}>
          <Icon as={FiCamera} boxSize={6} mb={1} />
          Take Photo
        </Button>
        <Input
          type="file"
          accept="image/*"
          capture="camera"
          ref={cameraInputRef}
          style={{ display: 'none' }}
          onChange={(e) => console.log(e.target.files[0])}
        />

        <Button {...buttonStyle} onClick={handleMediaUpload}>
          <Icon as={FiFolder} boxSize={6} mb={1} />
          Upload Media
        </Button>
        <Input
          type="file"
          accept="image/*,video/*,audio/*"
          ref={mediaInputRef}
          style={{ display: 'none' }}
          onChange={(e) => console.log(e.target.files[0])}
        />
      </Flex>
    </Box>
  );
}

export default FileUploadWithMedia;
