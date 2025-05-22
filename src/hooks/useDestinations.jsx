import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDestinations = () => {
  const axiosPublic = useAxiosPublic()
  const { data: destinations = [] } = useQuery({
    queryKey: ['destinations'],
    queryFn: async () => {
      const res = await axiosPublic.get("http://localhost:5000/destinations");
      return res.data;
    }
  })
  return [destinations];
};

export default useDestinations;