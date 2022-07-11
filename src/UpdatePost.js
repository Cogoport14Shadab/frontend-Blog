
import Navbar from './Navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


function UpdatePost() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const params = useParams();
    // const [user_Id, setUserId]=useState("")

    const getBlog = (id) => {
        const url = `http://127.0.0.1:3000/blogs/${params.id}`;
        axios.get(url)
          .then((res) => {
            let data = res.data
              setContent(data.content)
              setTitle(data.title)
          })
          .catch((e) => {
            console.log("erro", e);
          });
    }
    useEffect(()=>{
        getBlog();
    },[params.id])
   
    const submit = (event, id) => {
        event.preventDefault();
        const url = `http://127.0.0.1:3000/blogs/${params.id}`;
        const data = {
          title : title,
          content: content
        }
        axios.put(url, data)
          .then((res) => {
              setContent("")
              setTitle("")
          })
          .catch((e) => {
            console.log("erro", e);
          });
      };





  return (
    <div>
      <Navbar />
    <div class="max-width-1 m-auto" style={{marginTop: "40px"}}>
        <hr />
    </div>
    <h1>Update Post</h1>
    <form onSubmit={submit} style={{marginTop: "40px"}}>
    <div class="contact-content font1 max-width-1 m-auto">
        <div class="max-width-1 m-auto mx-1">
            <h2>Create Your Own Blog</h2>
            <div class="contact-form">
                <div class="form-box">
                    <input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
               
                
               
                <div class="form-box">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter Contenent" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>
                
                
                <div class="form-box" style={{marginTop:"50px", marginBottom:"40px"}}>
                    <button class="btn" type='submit'>Submit</button>
                </div>

            </div>
        </div>

    </div>
 
    </form>
    </div>
  );
}

export default UpdatePost;
