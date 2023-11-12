import user from './../../assets/imags/images/user.png'

const Home = () => {
    return (
        <div className="hero min-h-screen bg-sky-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={user} className="w-[250px] h-[250px] max-w-sm rounded-lg md:w-[800px] md:h-[700px]" />
                <div>
                    <h1 className="text-3xl font-medium md:text-5xl md:font-bold">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>
                    <p className="md:py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div className='text-center'>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;