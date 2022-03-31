import styled from 'styled-components';

export const StyledLogin = styled.div<{isLogIn: boolean | null;
}>`
    display: ${props => props.isLogIn ? 'none' : 'block'}
`; 

export const StyledLogout = styled.div<{isLogOut: boolean | null;
}>`
    display: ${props => props.isLogOut ? 'block' : 'none'}
`; 
