import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListItem from '../ListItem/ListItem'
import { AccessibilityContainer, UList } from '../Accessibility/AccessibilityStyle'
import {selectAndroidDev, selectUser, getAndroidDev, selectSliderStatus} from "../../../features/blog/blogSlice" 
import LoadingPage from "../../../Pages/LoadingPage/LoadingPage";

const AndroidDev = () => {

   const AndroidDev = useSelector(selectAndroidDev)
   const user = useSelector(selectUser)
   const dispatch = useDispatch()
   const status = useSelector(selectSliderStatus);


   useEffect(() => {
    if (AndroidDev.length === 0) {
        dispatch(getAndroidDev())
    }else{
        return null
    }
}, [dispatch])
    return (
        <>
        {AndroidDev.length === 0 ? (
            <LoadingPage />
        ):(
            <AccessibilityContainer>
            <UList>
                {AndroidDev.map(item => (
                    <ListItem key={item.id} title={item.title} image={item.bg} user={user[0]?.name}/>
                ))}
            </UList>
        </AccessibilityContainer>
        )}
      
    </>
    )
}

export default AndroidDev
