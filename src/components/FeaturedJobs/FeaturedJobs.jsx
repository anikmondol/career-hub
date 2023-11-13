import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="my-10">
            <h2 className="text-5xl text-center">Featured Jobs:{jobs.length}</h2>
            <p className="text-center text-sm md:text-base">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;