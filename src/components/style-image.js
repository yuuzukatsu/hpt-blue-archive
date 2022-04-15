import styled, { keyframes } from 'styled-components';

const muter = keyframes`  
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Imej = styled.img`
    animation: ${muter} infinite ${props => props.chance === 1 ? 1.5 : 15}s reverse linear
`

export default Imej
