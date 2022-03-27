import styled from 'styled-components';
export const StyledActorsItem = styled.div<{selected: boolean;
}>`
    margin-bottom: 1rem;
    background-color: ${props => props.selected ? 'grey' : 'none'}
`; 
export const StyledItemImg = styled.img`
    width: 400px;
    height: 250px
`;
export const StyledActorBlock = styled.div`
    display: flex;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`