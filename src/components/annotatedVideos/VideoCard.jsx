import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";

export function VideoCard({ video }) {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(`/videos/${video.id}`); // Navigate to video details page
  };

  return (
    <Card maxW="sm" boxShadow="xl" onClick={handlePlayClick}>
      <CardBody p={0}>
        <Image
          className="w-full"
          src={video.thumbnail_url || "/src/assets/videoThumbnail.jpg"}
          alt="Video Thumbnail"
          borderRadius="md"
          m={0}
        />
        <Stack mt="2" spacing="2" align="start">
          <div className="flex justify-between items-center w-full">
            <span className="text-sm">{video.upload_date || "Unknown Date"}</span>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsThreeDotsVertical />}
                variant="unstyled"
                bg="transparent"
              />
              <MenuList minW="140px">
                <MenuItem fontSize="x-small" onClick={handlePlayClick}>Play</MenuItem>
                <MenuItem fontSize="x-small">Share</MenuItem>
                <MenuItem fontSize="x-small">Edit Title</MenuItem>
                <MenuItem fontSize="x-small">Delete</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </Stack>
      </CardBody>

      <CardFooter p={0}>
        <div className="text-sm font-bold">
          <Text>{video.coach_name || "Coach name"}</Text>
        </div>
      </CardFooter>
    </Card>
  );
}

export default VideoCard;
