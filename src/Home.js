import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
function Home() {
    const [blogs, setBlogs]  = useState([])
    const getData = () => {
        const url = "http://127.0.0.1:3000/blogs"
        axios.get(url)
            .then((res) => {
                console.log("data", res);
                if (res.data) {
                    console.log(res.data);
                    let l = res.data.length
                    console.log(l);
                    for (let  i = 0; i < l; i++) {
                        // if (res.data[i].image.length > 100)
                        res.data[i].image = JSON.parse(res.data[i].image)
                    }
                    console.log(res.data);
                    setBlogs(res.data)
                }
            })
            .catch((e) => {
                console.log("erro", e);
            });
    }
    
          useEffect(()=>{
            getData();
          },[])
          const editBlo  = (id)=> {
            const navigate = useNavigate()
            navigate(`/updatePost${id}`)
          }
          const deleteBlog = (id) => {
            const url = `http://127.0.0.1:3000/blogs/${id}`
                axios.delete(url)
                    .then((res) => {
                        console.log("data", res);
                        getData();
                    })
                    .catch((e) => {
                        console.log("erro", e);
                    });
            }
          
  return (
      <div>
        <Navbar />
      <div class="max-width-1 m-auto">
        <hr/>
    </div>
    <div class="m-auto content max-width-1 my-2">
        <div class="content-left">
            <h1>The heaven for bloggers</h1>
            <p>iBlog is a website which lets you submit an article which upon approval will be up on our website and you
                can get a good amount of reach from here!</p>
            <p>My Halloween decorations are staying in the box this year. To be honest, they didn’t make it out of the
                box last year either. My Halloween spirit has officially been bludgeoned to death by teenagers who no
                longer care and a persistent October fear of the Northern California wildfires. And speaking of fear,
                isn’t there more than enough of that going around? Maybe all of us can pretend that Halloween isn’t even
                happening this year?</p>
        </div>
        <div class="content-right">
            <img src="../assets/img/home.svg" alt="iBlog"/>
        </div>
    </div>

    <div class="max-width-1 m-auto">
        <hr/>
    </div>
    <div class="home-articles max-width-1 m-auto font2">
        <h2>Featured Articles</h2>
       {
        blogs.length > 0 && blogs.map((blog)=>{
            return(
                <>
                    <div class="home-article">
                        <div class="home-article-img">
                            <img src={blog.image.base64} alt="article" />
                        </div>
                        <div class="home-article-content font1">
                            {/* <a href="/blogpost.html"> */}
                                <h3>{blog.title}</h3>
                            {/* </a> */}
                            <p>{blog.content}</p>

                            {/* <div>Author Name</div> */}
                            <span>07 January | 6 min read</span>
                            {/* <button onClick={editBlog}> */}
                                <a href={`/updateBlog/${blog.id}`}>
                                Edit
                                </a>
                                <button class ="btn" onClick={()=>deleteBlog(blog.id)}>Delete</button>
                                {/* </button> */}
                        </div>
                    </div>
                </>
            )
        })
       }
       {
        blogs.length == 0 && <h1>No Blogs Found</h1>
       }
        
        

    </div>
    </div>
  );
}

export default Home;
