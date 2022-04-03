import React, {useState} from 'react'
import axios from 'axios'
import './Form.css'

function Form() {
    const [postData, setPostData] = useState({ creator: '', title: '', message: ''});

    const addPost =()=>{
        axios.post('http://localhost:5000/posts', postData);
    }
  return (
    <div className='form'>
        <div>
        <label>Creator</label>
        <input  name="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} ></input>
        </div>
        <div>
        <label>Title</label>
        <input  name="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></input></div>
      <div>
          <label>Message </label> <textarea  name="message"  value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea> </div>
        <button onClick={()=>{addPost()}}>Add Post</button>
    </div>
  )
}

export default Form