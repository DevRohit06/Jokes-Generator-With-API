
import React from 'react';
import { useState, useEffect } from 'react';
export default function Output(){
const [joke, setJoke] = useState([])
const fetchJoke = async (type) => {
    return fetch(`http://localhost:3000/${type}`).then((response) => response.json()).then((data) => setJoke(data) && console.log(data))

}
useEffect(() => {
    fetchJoke();
  },[])

    return(
        <>

<div className=" mt-8 w-full p-4 text-center rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
    <h5 className="mb-2 text-3xl font-bold  text-white">{joke.setup}</h5>
    <p className="mb-5 text-3xl  sm:text-lg text-gray-400">{joke.punchline}</p>
    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    <span className=" text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-white">{joke.type}</span>
    </div>
</div>

        </>
    )
}