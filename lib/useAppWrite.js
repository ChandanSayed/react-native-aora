import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppWrite = fn => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setUserData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();
      setUserData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return {
    isLoading,
    data,
    refetch
  };
};

export default useAppWrite;
