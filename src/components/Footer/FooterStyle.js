import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
    background: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1000px;

    @media screen and (max-width: 820px) {
    padding-top: 32px;
}

`;
export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
    flex-direction: column;
}
`;
export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 160px;
    margin: 16px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 820px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}

`;
export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    color: #fff;

    &:hover {
    color: #01bf71;
    transition: all .5s ease-in-out
}
`;
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;
export const SocialMediaWrap = styled.div`
     max-width: 1000px;
    width: 90%;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 820px) {
    flex-direction: column;
}

`;
export const SocialLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: start;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 16px;
`;
export const WebsiteRights = styled.small`
    margin-bottom: 16px;
    color: #fff;
`;
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;