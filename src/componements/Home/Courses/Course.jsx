
// const Course = ({ course }) => {
//   const { name, price, set, instructor, image, _id, available_set } = course;

//   return (
//     <div
//       data-aos="fade-down"
//       data-aos-easing="linear"
//       data-aos-duration="1500"
//     >
//       <figure className="px-10 pt-10">
//         <img src={image} alt="Shoes" className="rounded-xl" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{name}</h2>
//         <p>Instructor: {instructor}</p>
//         <p>Available Set: {available_set}</p>
//         <p>Set: {set}</p>
//         <p>Course Fee: ${price}</p>

//       </div>
//     </div>
//   );
// };

// export default Course;


const Course = ({ course }) => {
  const { name, price, set, instructor, image, _id, available_set } = course;

  return (
    <div
      // className={cardClass}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="relative"
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
        <div className="absolute top-4 right-4 bg-white text-black p-2 rounded-md">Available Set: {available_set}</div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructor: {instructor}</p>
        {/* <p>Available Set: {available_set}</p> */}
        <p>Set: {set}</p>
        <p>Course Fee: ${price}</p>
      </div>
    </div>
  );
};

export default Course;

