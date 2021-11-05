import React from 'react'
import { CustomLink, HeadTitle, Image, ImageWrapper, MultiSliderItemContainer } from './MultiSliderItemStyle'

const MultiSliderItem = ({title, image}) => {
    return (
        <MultiSliderItemContainer>
            <HeadTitle>
                <CustomLink>
               {title}
                </CustomLink>
            </HeadTitle>
            <ImageWrapper>
                <Image src={image} />
            </ImageWrapper>
        </MultiSliderItemContainer>
    )
}

export default MultiSliderItem
