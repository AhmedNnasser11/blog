import React from 'react'
import { CustomLink } from './DropDownStyle'
import { Item } from './DropDownStyle'

const DropDown = ({title, navigate}) => {
    return (
            <Item>
                <CustomLink to={navigate}>
                    {title}
                </CustomLink>
            </Item>
    )
}

export default DropDown
