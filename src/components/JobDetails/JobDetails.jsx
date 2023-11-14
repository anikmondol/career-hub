import { useLoaderData, useParams } from "react-router-dom";

import user from './../../assets/imags/images/bg2.png'
import user1 from './../../assets/imags/images/bg1.png'

import { TfiMoney, } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { MdLocalPhone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";




const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)

    const handleApplyJob = () => {
        saveJobApplication(id);
        toast('You have applied successfully')
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-md text-center text-3xl ">
                <img className="-pt-20" src={user} alt="" />
                <h2 className="text-3xl font-medium">Job Details</h2>
                <img className="-pt-20 ml-[800px]" src={user1} alt="" />
            </div>
            <div className="grid gap-4 md:grid-cols-4 mx-auto my-8">
                <div className=" md:col-span-3 mx-2 md:mx-3">
                    <h2 className="my-4"><span className="text-2xl font-medium">Job Description</span>: {job.job_description}</h2>
                    <h2 className="my-4"><span className="text-2xl font-medium">Job Responsibility</span>: {job.job_responsibility}</h2>
                    <h2 className="my-4"><span className="text-2xl font-medium">Educational Requirements</span>: {job.educational_requirements}</h2>
                    <h2 className="my-4"><span className="text-2xl font-medium">Experiences</span>: {job.experiences}</h2>
                </div>
                <div className="my-4 ">
                    <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-4 rounded-md mb-7">
                    <h2 className="py-2"><span className="text-2xl font-medium">Job Details</span></h2>
                    <hr className="text-1xl" />
                    <div>


                        <h2 className="flex items-center py-2"><TfiMoney className="text-1xl mr-1"></TfiMoney><span className="text-1xl font-medium">Salary</span>: {job.salary}</h2>
                        <h2 className="flex items-center py-2"><CgNotes className="text-1xl mr-1"></CgNotes><span className="text-1xl font-medium">Job Title</span>: {job.job_title}</h2>
                    </div>
                    <h2 className="py-2"><span className="text-2xl font-medium">Contact Information</span></h2>
                    <hr />
                    <div>

                        <h2 className="flex items-center py-2"><MdLocalPhone className="text-1xl mr-1"></MdLocalPhone><span className="text-1xl font-medium">Phone</span>: {job.contact_information.phone}</h2>
                        <h2 className="flex items-center py-2"><MdAlternateEmail className="text-1xl mr-1"></MdAlternateEmail><span className="text-1xl font-medium">Email</span>: {job.contact_information.email}</h2>
                        <h2 className="flex items-center py-2"><GrLocation className="text-1xl mr-1"></GrLocation><span className="text-1xl font-medium">Address</span>: {job.contact_information.address}</h2>

                    </div>
                    </div>
                    <div>
                        <button onClick={handleApplyJob} className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded">Apply Now</button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;