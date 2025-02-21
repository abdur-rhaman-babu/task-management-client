import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";


const useTask = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const {data: tasks=[], refetch} = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/task?email=${user.email}`)
            return res.data;
        }
    })
    return [tasks, refetch]
};

export default useTask;