import { useEffect, useState } from "react"
import ReactLoading from 'react-loading'

export default function PreLoader() {
    const [data, setData] = useState([])
    const [complete, setComplete] = useState(undefined)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => res.json())
        .then((json) => {
            setData(json)
            setComplete(true)
        })
    }, [])

    return (
        <div className='pre-loader-container'>
            <ReactLoading type={"bars"} color={"orange"} width={100} />
        </div>
    )
}
