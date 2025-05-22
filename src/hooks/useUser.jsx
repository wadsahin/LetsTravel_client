import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user:loggedUser } = useAuth();

  const { data: user = [] } = useQuery({
    queryKey: ['user2'],
    queryFn: async () => {
      const res = await axiosPublic.get(`http://localhost:5000/user?email=${encodeURIComponent(loggedUser?.email)}`);
      return res.data;
    }
  });
  return [user];
};

export default useUser;