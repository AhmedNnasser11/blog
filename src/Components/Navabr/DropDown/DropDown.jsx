import React from 'react'
import { CustomLink } from './DropDownStyle'
import { Item } from './DropDownStyle'

const DropDown = ({title, path, key}) => {
    return (
            <Item key={key}>
                <CustomLink to={path}>
                    {title}
                </CustomLink>
            </Item>
    )
}

export default DropDown
