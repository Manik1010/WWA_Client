import { useEffect } from "react";
import { useState } from "react";

const Tabel = ({bookingItem}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://wwa-server-manik1010.vercel.app/courses?id=${bookingItem}`)
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