
import {
  useDisclosure,
} from "@chakra-ui/react";
import RightDrawer from "./RightDrawer";
import { useState } from "react";
import ScheduleItem from "./ScheduleItem";



export function DayScheduler() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [headerColour, setHeaderColour] = useState("white");
  
    const handleOpen = (colour) => {
        return () => {

            setHeaderColour(colour)
            console.log("color: ", colour);
            console.log("headerColour: ", headerColour);
            onOpen();
        }
        
    }
    return (
        <>
        <div className="grid grid-cols grid-rows-18 gap-0 w-full mt-4" style={{gridTemplateColumns: "min-content auto", gridTemplateRows: "repeat(17, 40px)"}}>
            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-1 row-end-2">6&nbsp;am</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-1 row-end-2"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-2 row-end-3">7&nbsp;am</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-2 row-end-3"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-3 row-end-4">8&nbsp;am</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-3 row-end-4"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-4 row-end-5">9&nbsp;am</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-4 row-end-5"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-5 row-end-6">10&nbsp;am</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-5 row-end-6"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-6 row-end-7">11&nbsp;am</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-6 row-end-7"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-7 row-end-8">12&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-7 row-end-8"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-8 row-end-9">1&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-8 row-end-9"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-9 row-end-10">2&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-9 row-end-10"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-10 row-end-11">3&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-10 row-end-11"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-11 row-end-12">4&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-11 row-end-12"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-12 row-end-13">5&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-12 row-end-13"><hr className="min-w-full h-2"/></div>
            
            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-13 row-end-14">6&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-13 row-end-14"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-14 row-end-15">7&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-14 row-end-15"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-15 row-end-16">8&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-15 row-end-16"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-16 row-end-17">9&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-16 row-end-17"><hr className="min-w-full h-2"/></div>

            <div className="col-start-1 col-end-2 mb-0 -mt-3 row-start-17 row-end-18">10&nbsp;pm</div>
            <div className="col-start-2 col-end-3 mb-0 row-start-17 row-end-18"><hr className="min-w-full h-2"/></div>

            <ScheduleItem timeStart="12:00pm" timeEnd="2:00pm" handleOpen={handleOpen} headerBackground="bg-red-400" scheduleItemLabel="Fundamentals of Cricket"/>
           
        </div>
        <RightDrawer isOpen={isOpen} onClose={onClose} headerColour={headerColour}/>
        </>
        
    )
}

export default DayScheduler;