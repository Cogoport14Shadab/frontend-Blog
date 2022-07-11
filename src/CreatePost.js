
import Navbar from './Navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom';



function CreatePost() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState(null)
    const [user, setUser] = useState([])
    let navigate = useNavigate();
    // const [user_Id, setUserId]=useState("")
    const getData = () => {
        const url = "http://127.0.0.1:3000/user"
        axios.get(url)
            .then((res) => {
                    setUser(res.data)
            })
            .catch((e) => {
                console.log("erro", e);
            });
    }
    useEffect(()=>{
        getData()
    },[])
    
   
    const submit = (event) => {
        event.preventDefault();
        const url = "http://127.0.0.1:3000/blogs";
        var e = document.getElementById("user");
        var userId = e.value;
        
        console.log("userId", userId);
        const data = {
          title : title,
          image: image,
          content: content,
          user_id: userId,
          
        }
        axios.post(url, data)
          .then((res) => {
              setContent("")
              setTitle("")
              setImage("")
            console.log(res, "res");
            navigate("/")
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
    <form onSubmit={submit} style={{marginTop: "40px"}}>
    <div class="contact-content font1 max-width-1 m-auto">
        <div class="max-width-1 m-auto mx-1">
            <h2>Create Your Own Blog</h2>
            <div class="form-box">
                <label for="cars">Choose a Author:</label>

                <select name="cars" id="user">
                    {
                        user.map((d)=>{
                            return(
                                <>
                                    <option value={d.id}>{d.name}</option>
                                </>
                            )
                        })
                    }
                </select>
                </div>
            <div class="contact-form">
                <div class="form-box">
                    <input type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div class="form-box">
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone = {(base64)=>setImage(base64)}
                    />

                   
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

export default CreatePost;
