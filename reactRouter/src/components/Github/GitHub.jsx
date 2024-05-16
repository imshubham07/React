import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function GitHub() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/imshubham07')
    //     .then(response =>response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        
            <div className='text-center m-4 bg-gray-600 text-white'>
                GitHub followers: {data.followers}
                <img src={data.avatar_url} alt="Github Profile" width={300}/>
            </div>
        
    )
}
export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/imshubham07')
    return response.json()
}