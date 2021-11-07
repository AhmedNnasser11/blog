import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAndroidDev, selectAndroidDev, selectSliderStatus } from '../../features/blog/blogSlice'
import MultiSlider from '../MultiSlider/MultiSlider'
import LoadingPage from "../../Pages/LoadingPage/LoadingPage";

const AndroidDev = () => {

    const dispatch = useDispatch()
    const AndroidDev = useSelector(selectAndroidDev)
    const status = useSelector(selectSliderStatus);

    useEffect(() => {
        if(AndroidDev.length === 0){
            dispatch(getAndroidDev())
        }else{
            return null
        }
    }, [dispatch])

    return (
        <>
        {status === "loading" ? (
            <LoadingPage />
        ):(
            <MultiSlider data={AndroidDev} />
        )}
        </>
    )
}

export default AndroidDev
