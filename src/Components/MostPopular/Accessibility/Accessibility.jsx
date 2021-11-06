import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from '../ListItem/ListItem'
import { AccessibilityContainer, UList } from './AccessibilityStyle'
import {selectAccessibility, selectUser} from "../../../features/blog/blogSlice" 

const Accessibility = () => {

   const Accessibility = useSelector(selectAccessibility)
   const user = useSelector(selectUser)

    return (
        <AccessibilityContainer>
            <UList>
                {Accessibility.map(item => (
                    <ListItem key={item.id} title={item.title} image={item.bg} user={user[0]?.name}/>
                ))}
            </UList>
        </AccessibilityContainer>
    )
}

export default Accessibility
