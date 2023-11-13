import user from './../../assets/imags/images/user.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-sky-100 rounded-md">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src={user} className="w-[320px] h-[300px] max-w-sm rounded-lg md:w-[500px] md:h-[550px] lg:w-[816px] lg:h-[700px]" />
                <div>
                    <h1 className="text-3xl font-medium md:text-5xl md:font-bold">One Step <br /> Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span></h1>
                    <p className="md:py-6 text-sm md:text-base">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                    <div className='text-left'>
                    <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;