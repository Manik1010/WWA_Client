// import { Link } from "react-router-dom";

const Course = ({course}) => {
    const { name, price, set, instructor, image, _id } = course
    return (
        <div className="card w-96 bg-base-100 shadow-xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor: {instructor}</p>
                <p>Abiavel Set: {set}</p>
                <p>Couse Fee: ${price}</p>
                <div className="card-actions">
                {/* <Link to={`/singalToy/:${_id}`}>
                    <button className="btn btn-outline btn-secondary">View</button>
                </Link> */}
            </div>
            </div>
        </div>
    );
};

export default Course;