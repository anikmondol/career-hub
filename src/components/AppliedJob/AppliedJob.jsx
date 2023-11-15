import { TfiMoney, } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import PropTypes from 'prop-types'



const AppliedJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, salary } = job;
    return (
        <div>
            <div className="hero bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={logo} className="max-w-sm rounded-lg shadow-2xl bg-sky-100 m-3 p-4  md:m-[50px] md:p-[100px] " />
                    <div>
                        <h1 className="text-2xl font-bold">{job_title}</h1>
                        <p className="py-6">{company_name}</p>
                        <div className="flex gap-3">
                            <button className="text-fuchsia-200 btn bg-gradient-to-r from-cyan-500 to-blue-500">{job_type}</button>
                            <button className="text-fuchsia-200 btn bg-gradient-to-r from-cyan-500 to-blue-500">{remote_or_onsite}</button>
                        </div>
                        <div>
                            <div className="my-4 flex gap-3">
                                <h2 className="flex"><GrLocation className="text-1xl mr-1 items-center md:text-2xl" ></GrLocation>{job.contact_information.address}</h2>
                                <h2 className="flex"><TfiMoney className="text-1xl items-center md:text-2xl mr-1"></TfiMoney>{salary}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AppliedJob.propTypes ={
    job: PropTypes.object.isRequired

}


export default AppliedJob;