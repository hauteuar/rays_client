import { Select } from '@chakra-ui/react'
import { MdArrowDropDown } from 'react-icons/md';
import Searchbar from '../../components/searchbar/Searchbar';
import CoachesContainer from '../../components/coaches/CoachesContainer';
import CoachDetails from '../../components/coaches/CoachDetails';
export function Coaches() {
    return (
        <div>
            <div className="w-full">
                <span className="font-bold text-2xl flex flex-start m-5">Coaches</span>
            </div>
            <div className="flex flex-start w-fit items-end content-center -mt-3">
            <Select icon={<MdArrowDropDown />} placeholder='All' className="mx-5"/>

            <Searchbar marginLeft={6}/>
            </div>
            <div className="flex">
                <CoachesContainer/>
                <CoachDetails/>
            </div>
        </div>
    )
}

export default Coaches;