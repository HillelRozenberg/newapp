
import React from 'react'
import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';

let myUser = undefined;
if (localStorage.getItem("user")) {
  myUser = JSON.parse(localStorage.getItem("user"));
  console.log(myUser.id);
}
const Comments = () => {
    const [comments, setComments] = useState([])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${myUser.id}/comments`)
            .then(response => response.json())
            .then(comments => setComments(comments))
    }, [])
  
    return <div>
        <h1>comments:</h1>
        {
            comments.map((item, idx) =>
                
                    <h1 key={idx} >
                    name: {item.name} body: {item.body} 
                   </h1>
                )
        }
    </div>

}
{/* <Outlet /> */}
export default Comments;