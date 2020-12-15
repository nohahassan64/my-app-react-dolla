import React from 'react'
import { Button } from '../ButtonStyle'
import { InfoContainer , InfoWrapper , InfoRow , InfoColumn1 , TextWrapper , TopLine , Heading , Subtitle , BtnWrap , InfoColumn2 , ImgWrap ,Img} from './InfoStyle'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darktText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark
}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darktText={darktText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact="true"
                                 offset={-20}
                                primary={primary}
                                dark={dark}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </InfoColumn1>
                    <InfoColumn2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </InfoColumn2>
                </InfoRow>
            </InfoWrapper>
            
        </InfoContainer>
    )
}

export default InfoSection
