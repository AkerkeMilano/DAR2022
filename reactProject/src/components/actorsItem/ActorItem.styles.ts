import styled from 'styled-components';
export const StyledActorsItem = styled.div`
    margin-bottom: 1rem;
`; 
export const StyledItemImg = styled.img`
    width: 400px;
    height: 250px
`;
export const StyledActorBlock = styled.div`
    display: flex;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    &:hover{
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transition: 0.5s;
    }
`