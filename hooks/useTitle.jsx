import { useEffect } from "react";

 const useTitle = title =>{

    useEffect( () =>{
        // document.title = title;
        document.title = `WWA | ${title}`;
    } , [title])
 };

 export default useTitle;