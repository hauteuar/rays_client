import { useEffect, useState } from "react";
import axios from "axios";
import VideosContainer from "../../components/annotatedVideos/VideosContainer";

export function AnnotatedVideos() {
  const [videos, setVideos] = useState([]);  // Ensure it's initialized as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    try {
      const token = localStorage.getItem("booking-token");
      const studentId = localStorage.getItem("student-id") || "101";  // Retrieve student ID from localStorage

      const response = await axios.post(
        'https://hwzthat.com/api/get_student_videos_api',
        {
          inputs: {
            student_id: studentId
          }
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Make sure the response contains an array
      const data = response.data || [];
      if (Array.isArray(data)) {
        setVideos(data);
      } else {
        setVideos([]);  // Default to empty array if data isn't an array
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError("Failed to fetch videos. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>{error}</div>;

  // Ensure videos is an array before rendering
  if (!Array.isArray(videos) || videos.length === 0) {
    return <div>No videos available</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex flex-start items-center text-2xl font-bold">
        <span>Annotated videos</span>
      </div>

      <div className="flex flex-start text-sm">
        <span>Total Videos&nbsp;</span>
        <span className="font-bold">{videos.length}</span>
      </div>

      <div>
        <VideosContainer videos={videos} />
      </div>
    </div>
  );
}

export default AnnotatedVideos;
