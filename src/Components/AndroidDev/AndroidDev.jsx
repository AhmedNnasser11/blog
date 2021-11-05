import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAndroidDev, selectAndroidDev } from '../../features/blog/blogSlice'
import MultiSlider from '../MultiSlider/MultiSlider'

const AndroidDev = () => {

    const dispatch = useDispatch()
    const AndroidDev = useSelector(selectAndroidDev)

    useEffect(() => {
        dispatch(getAndroidDev())
    }, [dispatch])

    return (
        <>
             <MultiSlider data={AndroidDev} />
        </>
    )
}

export default AndroidDev
