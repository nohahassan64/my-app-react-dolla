import React , { useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonStyle'
import { HeroContainer , HeroBg , VideoBg , HeroContent , HeroHead , HeroDesc , HeroBtnWrapper , ArrowForward , ArrowRight} from './HeroStyle'

const HeroSection = () => {
    const [hover , setHover ] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted type="video/mp4" src={Video}/>
            </HeroBg>
            <HeroContent>
                <HeroHead>Virtual Banking Made Easy</HeroHead>
                <HeroDesc>Sing up for a new accoun today and receive $250 in credit towards your next payment.</HeroDesc>
                <HeroBtnWrapper>
                    <Button to="sing-up"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-20}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
