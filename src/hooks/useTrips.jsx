import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrips = () => {
  const axiosPublic = useAxiosPublic()
  const { data: trips = [] } = useQuery({
    queryKey: ['trips'],
    queryFn: async () => {
      const res = await axiosPublic.get("http://localhost:5000/trips");
      return res.data;
    }
  })
  return [trips];
};

export default useTrips;