export function ProfileCard() {
    return (
        <div className="bg-white rounded-lg shadow-sm p-2 my-2 text-center flex flex-col items-center w-fit">
                <img src="/src/assets/athlet-dp.png" alt="Team Member 1" className="rounded-full mb-4"/>
                <h3 className="text-base font-semibold mb-2">John Doe</h3>
                <p className="text-gray-700">Athlete</p>
            </div>
    );
}

export default ProfileCard;