import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from '../ListItem/ListItem'
import { AccessibilityContainer, UList } from '../Accessibility/AccessibilityStyle'
import {selectGadgets, selectUser} from "../../../features/blog/blogSlice" 

const Gadgets = () => {

   const Gadgets = useSelector(selectGadgets)
   const user = useSelector(selectUser)

    return (
        <AccessibilityContainer>
            <UList>
                {Gadgets.map(item => (
                    <ListItem key={item.id} title={item.title} image={item.bg} user={user[0]?.name}/>
                ))}
            </UList>
        </AccessibilityContainer>
    )
}

export default Gadgets
