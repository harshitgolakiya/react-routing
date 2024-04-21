// import React, { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
  const data = useLoaderData()
  // const [data, Setdata] = React.useState([null])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/harshitgolakiya")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     Setdata(data)
  //   })
  // },[])
  return (
    <div className="text-center m-4 p-4 bg-gray-600 text-white">
      <p>Github</p>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt="" />
      <p>{data.location}</p>
    </div>
  )
}
export default Github

const githubLoader = async()=>{
  const res = await fetch("https://api.github.com/users/harshitgolakiya")
  return res.json()
}

export {githubLoader}
  