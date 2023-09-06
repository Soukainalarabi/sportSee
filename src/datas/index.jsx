import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Api() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({ todayScore: 0 });
  const [dataAverage, setDataAverage] = useState({
    sessions: [],
  });
  const [dataPerformance, setDataPerformance] = useState({
    data: [],
  });
  const [dataActivity, setDataActivity] = useState({
    sessions: [],
  });

  const fetchUser = async () => {
    const resUser = await fetch(`http://localhost:3000/user/${id}`);
    const jsonDataUser = await resUser.json();
    setDataUser(jsonDataUser.data);
  };

  const fetchAverage = async () => {
    const resAverage = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
    const jsonDataAverage = await resAverage.json();
    setDataAverage(jsonDataAverage.data);
  };

  const fetchPerformance = async () => {
    const resPerformance = await fetch(`http://localhost:3000/user/${id}/performance`);
    const jsonDataPerformance = await resPerformance.json();
    setDataPerformance(jsonDataPerformance.data);
  };

  const fetchActivity = async () => {
    const resActivity = await fetch(`http://localhost:3000/user/${id}/activity`);
    const jsonDataActivity = await resActivity.json();
    setDataActivity(jsonDataActivity.data);
  };

  useEffect(() => {
    fetchUser();
    fetchAverage();
    fetchPerformance();
    fetchActivity();
  }, [id]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return {
    isLoading,
    dataUser,
    dataAverage,
    dataPerformance,
    dataActivity,
  };
}
export default Api;
