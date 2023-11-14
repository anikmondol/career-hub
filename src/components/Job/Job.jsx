import { TfiMoney, } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job;
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
                    <h2 className="flex"><GrLocation className="text-1xl mr-1 items-center md:text-2xl" ></GrLocation>{location}</h2>
                    <h2 className="flex"><TfiMoney className="text-1xl items-center md:text-2xl mr-1"></TfiMoney>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,


}


export default Job;