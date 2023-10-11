// styles
import './PreLoader.scss'

// components
import Banner from '../../components/banner/Banner'

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
        <div
            className='pre-loader-container'
            style=
                {{
                    background: `linear-gradient(45deg, rgba(219, 120, 212, 0.8) 0%, rgba(32, 172, 232, 0.8) 88%)`
                }}
        >
            {/* <ReactLoading type={"bars"} color={"orange"} width={100} /> */}
            <div className='pre-loader-banner-container'>
                <Banner />
            </div>
            
        </div>
    )
}
