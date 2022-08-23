import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>Coach</Logo>
                <Nav>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </Nav>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    padding: 1rem;
    height: 5rem;
    background-color: var(--white);
    position: fixed;
    top: 0;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
`

const Logo = styled.h1`
    font-family: 'Fredoka One', cursive;
`

const Nav = styled.div`
    display: flex;
    gap: 2rem;
`

const Link = styled.a`
    font-size: 1.2rem;
    font-weight: 600;
`

export default Navbar