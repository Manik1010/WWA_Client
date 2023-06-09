import { useEffect } from "react";
import { useState } from "react";

const Tabel = ({bookingItem}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/courses?id=${bookingItem}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                // console.log(bookingItem)
            })
    }, [bookingItem])
    // console.log(data)
    
    
    return (
        <div>
            <h1>{bookingItem}</h1>
        </div>
    );
};

export default Tabel;