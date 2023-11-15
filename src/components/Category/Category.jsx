import PropTypes from 'prop-types'

const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="card bg-base-200 shadow-xl my-10 rounded-lg">
            <img className="w-[50px] h-[50px] ml-7 pt-1 rounded-md" src={logo} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};


Category.propTypes ={
    category: PropTypes.object.isRequired

}


export default Category;