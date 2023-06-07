
const Class = ({ course }) => {
    const { name, price, set, instructor, image, _id, disp, available_set } = course
    // console.log(available_set, set)
    return (
        <div className="card card-side bg-base-100 shadow-xl m-4 p-8">
            <img className="p-8 w-[900px]" src={image} alt="Shoes" />
            {/* <figure><img src={image} alt="Shoes" /></figure> */}
            <div className="card-body p-4">
                <h3 className="md:text-right font-semibold">Available seats: {available_set}</h3>
                <h2 className="card-title font-bold">Course Name: {name}</h2>
                <h4>Instructor Name: {instructor}</h4>
                <p>Coures Fee: ${price}</p>
                <p>Total Set: {set}</p>
                <p>Discripatioh: {disp}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-active btn-ghost">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Class;