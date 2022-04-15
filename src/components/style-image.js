import styled, { keyframes } from 'styled-components';

const muter = keyframes`  
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const trigger = Math.floor(Math.random() * 2)

let duration

if (trigger === 1) {
    duration = 1.5
} else {
    duration = 15
}

const Imej = styled.img`
    animation: ${muter} infinite ${duration}s reverse linear
`

export default Imej
