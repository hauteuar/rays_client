import CoachesContainerCard from "./CoachesContainerCard";

export function CoachesContainer() {
    return (
        <div className="flex flex-col ml-5 mt-5 h-[70vh] w-[40%] overflow-auto">
            <CoachesContainerCard />
            <CoachesContainerCard />
            <CoachesContainerCard />
            <CoachesContainerCard />
            <CoachesContainerCard />
            <CoachesContainerCard />
            <CoachesContainerCard />
            <CoachesContainerCard />
            <CoachesContainerCard />
        </div>
    )
}

export default CoachesContainer;