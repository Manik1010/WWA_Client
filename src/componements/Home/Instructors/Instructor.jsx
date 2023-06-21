
const Instructor = ({ instructor }) => {

    const { name, studentNumber, email, image, address } = instructor

    return (
        <div className="card w-96 bg-base-100 shadow-xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-full"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold"> Email: </span> {email}</p>
                <p><span className="font-semibold">Number Of Students: </span>  {studentNumber}</p>
                <p> <span className="font-semibold">Address: </span>  {address}</p>
            </div>
        </div>
    );
};

export default Instructor;

// import React from 'react';
// import ReactImageZoom from 'react-image-zoom';

// const Instructor = ({ instructor }) => {
//     const { name, studentNumber, email, image, address } = instructor;
//     const props = { width: 400, height: 250, zoomWidth: 500, img: "1.jpg" };

//     return (
//         <div className="card w-96 bg-base-100 shadow-xl"
//             data-aos="fade-down"
//             data-aos-easing="linear"
//             data-aos-duration="1500">
//             <figure className="px-10 pt-10">
//                 <ReactImageZoom {...props} />
//                 <img src={image} alt="Shoes" className="rounded-xl" />
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title">{name}</h2>
//                 <p>Email: {email}</p>
//                 <p>Number Of Students: {studentNumber}</p>
//                 <p>Address: {address}</p>
//             </div>
//         </div>
//     );
// };

// export default Instructor;
