import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data

    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="my-10">
            <div className="my-5">
                <h2 className="text-5xl text-center">Featured Jobs</h2>
                <p className="my-2 text-center text-sm md:text-base">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className="text-center my-16">
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">See All Jobs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;