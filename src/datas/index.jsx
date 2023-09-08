import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiUrl, userSuffix } from '../config';

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
    const resUser = await fetch(`${apiUrl}/${id}${userSuffix}`);
    const jsonDataUser = await resUser.json();
    setDataUser(jsonDataUser.data || jsonDataUser);
  };

  const fetchAverage = async () => {
    const resAverage = await fetch(`${apiUrl}/${id}/average-sessions`);
    const jsonDataAverage = await resAverage.json();
    setDataAverage(jsonDataAverage.data || jsonDataAverage);
  };

  const fetchPerformance = async () => {
    const resPerformance = await fetch(`${apiUrl}/${id}/performance`);
    const jsonDataPerformance = await resPerformance.json();
    setDataPerformance(jsonDataPerformance.data.data
      ? jsonDataPerformance.data : jsonDataPerformance);
  };

  const fetchActivity = async () => {
    const resActivity = await fetch(`${apiUrl}/${id}/activity`);
    const jsonDataActivity = await resActivity.json();
    setDataActivity(jsonDataActivity.data || jsonDataActivity);
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
