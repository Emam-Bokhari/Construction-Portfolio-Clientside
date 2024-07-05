import { useEffect, useState } from "react";

const useProject=()=>{
    const [projects,setProjects]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    const fetchProjectData=async()=>{
        try{
            setLoading(true)
            const response=await fetch(`http://localhost:3000/api/v1/show-all-projects`)
            if(!response.ok){
                const errorMessage=`Fetching project data is failed!${response.status}`
                throw new Error(errorMessage)
            }
            const data=await response.json()
            setProjects(data)
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        setLoading(true)
        fetchProjectData()
    },[])
    return{
        projects,
        loading,
        error
    }
};
export default useProject;