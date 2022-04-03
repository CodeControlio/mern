import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post/Post'

function Posts() {
  const [Posts, setPosts] = useState([])
  const getPosts = ()=>{
    axios.get('http://localhost:5000/posts').then((res)=>{
      console.log(res.data, "posts")
      setPosts(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(() => {
  getPosts()
  }, [])
  

  return (
    <div style={{display:"flex", flexDirection:"column", padding:"10px"}}>
      {Posts.length > 0 && Posts.map((post, idx)=><>
      <div key={idx} style={{margin:"15px"}}>
        <Post post={post} />
        </div>
         </>
       )}
    </div>
  )
}

export default Posts