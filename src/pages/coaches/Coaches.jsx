import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Select } from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';
import Searchbar from '../../components/searchbar/Searchbar';
import CoachesContainer from '../../components/coaches/CoachesContainer';
import CoachDetails from '../../components/coaches/CoachDetails';

// Coaches Component
export function Coaches() {
  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCoach, setSelectedCoach] = useState(null);

  // Function to fetch coaches from the API
  const fetchCoaches = async () => {
    try {
      const token = localStorage.getItem('booking-token'); // Get token from local storage

      if (!token) {
        throw new Error("Authorization token is missing");
      }

      const response = await axios.post(
        'https://hwzthat.com/api/get_coaches_list',
        { organization_id: 5 }, // Replace this with your organization_id
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCoaches(response.data); // Assuming response.data contains the list of coaches
      setLoading(false);
    } catch (err) {
      console.error('Error fetching coaches:', err);
      setError('Error fetching coaches. Please try again.');
      setLoading(false);
    }
  };

  // Fetch the coaches on component mount
  useEffect(() => {
    fetchCoaches();
  }, []);

  // Function to select a coach
  const handleSelectCoach = (coach) => {
    setSelectedCoach(coach);
  };

  return (
    <div>
      <div className="w-full">
        <span className="font-bold text-2xl flex flex-start m-5">Coaches</span>
      </div>
      <div className="flex flex-start w-fit items-end content-center -mt-3">
        <Select icon={<MdArrowDropDown />} placeholder="All" className="mx-5" />
        <Searchbar marginLeft={6} />
      </div>
      <div className="flex">
        {loading ? (
          <p>Loading coaches...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <CoachesContainer coaches={coaches} onSelectCoach={handleSelectCoach} />
        )}
        {selectedCoach && <CoachDetails coach={selectedCoach} />}
      </div>
    </div>
  );
}

export default Coaches;