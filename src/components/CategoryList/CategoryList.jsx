import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="my-10">
            <h2 className="text-5xl text-center">Job Category List</h2>
            <p className="text-center text-sm md:text-base my-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-5">
                {
                    categories.map((category, idex) => <Category key={idex} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;