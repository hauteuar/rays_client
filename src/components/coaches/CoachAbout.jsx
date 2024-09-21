export function CoachAbout({ about }) {
    return (
      <div className="ml-7 w-[80%] flex flex-col justify-start items-start">
        <span className="text-sm font-light">About me</span>
        <span className="text-base font-semibold text-left">{about}</span>
      </div>
    );
  }
  
  export default CoachAbout;
  