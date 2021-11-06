import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from '../ListItem/ListItem'
import { AccessibilityContainer, UList } from '../Accessibility/AccessibilityStyle'
import {selectAndroidDev, selectUser} from "../../../features/blog/blogSlice" 

const AndroidDev = () => {

   const AndroidDev = useSelector(selectAndroidDev)
   const user = useSelector(selectUser)

    return (
        <AccessibilityContainer>
            <UList>
                {AndroidDev.map(item => (
                    <ListItem key={item.id} title={item.title} image={item.bg} user={user[0]?.name}/>
                ))}
            </UList>
        </AccessibilityContainer>
    )
}

export default AndroidDev
