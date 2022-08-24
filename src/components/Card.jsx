import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

import styled from 'styled-components'

import image from '../assets/user.jpg';

const Card = ({ user }) => {
  return (
    <Container>
      <Header>
        <Image src={image} width="80" height="80" />
        <Content>
          <Name>{user.name}</Name>
          <LinearProgress variant="determinate" value={user.votes} />
          <Percentage>{ user.votes / 100 }%</Percentage>
          <Votes>{user.votes} Votes</Votes>
          <Button>Vote <HowToVoteIcon /></Button>
        </Content>
      </Header>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid rgba(231, 231, 231, 0.2);
  border-radius: 0.3rem;
  padding: 1.2rem;
  color: var(--white);
  margin-bottom: 1.5rem;
`

const Header = styled.div`
  display: flex;
  gap: 1.5rem;
`

const Image = styled.img`
  border-radius: 50%;
  border: 2px solid var(--white);
  padding: 0.1rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
`

const Percentage = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: .2rem;
`

const Votes = styled.p`
  opacity: 0.6;
  font-weight: 600;
  font-size: 1.05rem;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  margin-top: .5rem;
  padding: 0.4rem 1rem;
  font-weight: 500;
  font-size: .9rem;
  border-radius: .3rem;
  color: var(--primary);
  border: 1px solid var(--primary);  
  background-color: transparent;
  transition: all .5s ease;

  &:hover {
    color: #A7CAED;
    border: 1px solid #A7CAED;
  }
`

export default Card;