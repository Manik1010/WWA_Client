
const Instructor = ({instructor}) => {
    const { name, studentNumber, email, image, _id, description, address } = instructor
    return (
        <div className="card card-side bg-base-100 shadow-xl m-4 p-8"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
        >
            <img className="p-8" src={image} alt="Movie" />
            <div className="card-body p-6">
                <h2 className="card-title font-bold">Instructor Name: {name}</h2>
                <h4> <span className="font-semibold">Instructor Email: </span>  {email}</h4>
                <p> <span className="font-semibold">Instructor Address: </span>  {address}</p>
                <p> <span className="font-semibold">Total Student: </span>  {studentNumber}</p>
                <p><span className="font-semibold">Description: </span> {description}</p>
            </div>
        </div>
    );
};

export default Instructor;