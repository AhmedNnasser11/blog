import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccessibility, selectAccessibility } from '../../features/blog/blogSlice'
import MultiSlider from '../MultiSlider/MultiSlider'

const Accessibility = () => {

    const dispatch = useDispatch()
    const Accessibility = useSelector(selectAccessibility)

    useEffect(() => {
        dispatch(getAccessibility())
    }, [dispatch])

    return (
        <>
            <MultiSlider data={Accessibility} />
        </>
    )
}

export default Accessibility
