import VideosContainer from "../../components/annotatedVideos/VideosContainer";

export function AnnotatedVideos() {
    return (
        <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-start items-center text-2xl font-bold">
                <span>Annotated videos</span>
            </div>

            <div className="flex flex-start text-sm">
                <span>Total Videos&nbsp;</span><span className="font-bold">16</span>
            </div>

            <div>
                <VideosContainer />
            </div>

        </div>
    )
}

export default AnnotatedVideos;