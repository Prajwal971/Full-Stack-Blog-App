import React, { useEffect, useState } from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation()

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchdata()
  }, [postId])


  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow() } </p>
          </div>
          {currentUser.username === post.username && <div className="edit">
            <Link to='/write?edit=2'>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>}
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!

        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single