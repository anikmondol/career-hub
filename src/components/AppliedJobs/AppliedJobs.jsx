import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

import user from './../../assets/imags/images/bg2.png'
import user1 from './../../assets/imags/images/bg1.png'



const AppliedJobs = () => {
    const jobs = useLoaderData();


    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([])


    const handleApplyJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobApplied = jobs.filter (job => storedJobIds.includes(job.id))

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find (job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs, storedJobIds, jobsApplied)
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            
        }
    },[jobs])
    return (
        <div>
           <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-md text-center text-3xl ">
                <img className="-pt-20" src={user} alt="" />
                <h2 className="text-3xl font-medium">Applied Jobs</h2>
                <img className="-pt-20 ml-[800px]" src={user1} alt="" />
            </div> 
            <details className="dropdown">
                <summary className="m-1 btn ">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={ () => handleApplyJobsFilter('all')}><a>All</a></li>
                    <li onClick={ () => handleApplyJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={ () => handleApplyJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
           <div className="grid md:grid-cols-1 gap-6">
            {
                displayJobs.map(job => <AppliedJob key={job.id} job={job} handleApplyJobsFilter={handleApplyJobsFilter}></AppliedJob>)
            }
           </div>
        </div>
    );
};

export default AppliedJobs;