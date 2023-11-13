import { TfiMoney,  } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import PropTypes from 'prop-types';

const Job = ({ job }) => {
     const { logo, job_title, company_name, remote_or_onsite, location, salary, job_type} = job;
    return (
        <div className="card card-compact bg-base-200 shadow-xl">
            <figure><img className="mt-3" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="my-3 text-2xl">{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold  bg-[#d9dde3] rounded mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold bg-[#d9dde3] rounded mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="my-4 flex gap-3">
                    <h2 className="flex"><GrLocation className="text-2xl mr-1" ></GrLocation>{location}</h2>
                    <h2 className="flex"><TfiMoney className="text-2xl mr-1"></TfiMoney>{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
                </div>
            </div>
        </div>
    );
};

Job.propTypes ={
    job: PropTypes.object.isRequired,
   

}


export default Job;