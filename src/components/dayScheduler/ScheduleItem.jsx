function getHourValue(time) {
  if (typeof time !== "string") {
    console.error("Expected a string but got:", typeof time, time);
    return null; // Return null or handle the error as needed
  }
  return parseInt(time.split(":")[0], 10);
}

function getGridPosition(hour, am) {
  //am is a boolean flag for whether the time is am or not (if not, it's pm)
  const position = am || hour == 12 ? hour - 5 : hour + 7;
  return position;
}
// eslint-disable-next-line react/prop-types
export function ScheduleItem({
  timeStart,
  timeEnd,
  handleOpen,
  headerBackground,
  scheduleItemLabel
}) {
  const hourStart = getHourValue(timeStart); 
  const hourEnd = getHourValue(timeEnd);
  const hourStartAm = timeStart.includes("am");
  const hourEndAm = timeEnd.includes("am");
  const gridStart = getGridPosition(hourStart, hourStartAm);
  const gridEnd = getGridPosition(hourEnd, hourEndAm);
  return (
    <div
      className={`col-start-2 col-end-3 mb-0 row-start-${gridStart} row-end-${gridEnd} ${headerBackground} z-99 border rounded-2xl cursor-pointer h-full`}
      onClick={handleOpen("bg-red-400")}
    >
      <div className="flex justify-center items-center h-full">
        <span className="font-semibold text-white">{scheduleItemLabel}&nbsp;|&nbsp;</span>
        <span className="text-white">{`${timeStart} - ${timeEnd}`}</span>
      </div>
    </div>
  );
}

export default ScheduleItem;
