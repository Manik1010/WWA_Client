
const Instructor = ({instructor}) => {
    const { name, studentNumber, email, image, _id, description, address } = instructor
    return (
        <div className="card card-side bg-base-100 shadow-xl m-4 p-8">
            <img className="p-8" src={image} alt="Movie" />
            <div className="card-body p-6">
                <h2 className="card-title font-bold">Instructor Name: {name}</h2>
                <h4>Instructor Email: {email}</h4>
                <p>Instructor Address: {address}</p>
                <p>Total Student: {studentNumber}</p>
                <p>Discripatioh: {description}</p>
            </div>
        </div>
    );
};

export default Instructor;