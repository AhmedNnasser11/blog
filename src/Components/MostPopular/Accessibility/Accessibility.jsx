import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListItem from '../ListItem/ListItem'
import { AccessibilityContainer, UList } from './AccessibilityStyle'
import {selectAccessibility, selectUser, getAccessibility, selectSliderStatus} from "../../../features/blog/blogSlice" 
import LoadingPage from "../../../Pages/LoadingPage/LoadingPage";

const Accessibility = () => {

   const Accessibility = useSelector(selectAccessibility)
   const user = useSelector(selectUser)
   const status = useSelector(selectSliderStatus);


   const dispatch = useDispatch()

    useEffect(() => {
        if (Accessibility.length === 0) {
            dispatch(getAccessibility())

        }else{
            return null
        }
    }, [dispatch])


    return (
        <>
        {Accessibility.length === 0 ? (
            <LoadingPage />
        ) : (
            <AccessibilityContainer>
            <UList>
                {Accessibility.map(item => (
                    <ListItem key={item.id} title={item.title} image={item.bg} user={user[0]?.name}/>
                ))}
            </UList>
        </AccessibilityContainer>
        )}
       
        </>
    )
}

export default Accessibility
