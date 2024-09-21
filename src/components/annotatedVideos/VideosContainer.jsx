import VideoCard from "./VideoCard";

export function VideosContainer({ videos }) {
  return (
    <div className="flex flex-wrap gap-2">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
}

export default VideosContainer;
