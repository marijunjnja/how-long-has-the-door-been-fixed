import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const App = props => {
  const whenFixed = moment('2019-11-14T15:00:00')
  const now = moment()

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `
  const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: mediumpurple;
  `
  const DateLine = styled.h2`
  font-size: 2em;
    color: mediumspringgreen;
    text-align: center;
  `
  const Line = styled.h3`
    text-align: center;
    color: palevioletred;
    font-size: 1em;
  `

  return (
    <Wrapper>
      <Title>When was the door fixed</Title>
      <DateLine>{whenFixed.format("dddd, MMMM Do YYYY, h:mm:ss a")}</DateLine>
      <Line>{now.diff(whenFixed)} milliseconds</Line>
      <Line>{now.diff(whenFixed, 'seconds', true)} seconds</Line>
      <Line>{now.diff(whenFixed, 'minutes', true)} minutes</Line>
      <Line>{now.diff(whenFixed, 'hours', true)} hours</Line>
      <Line>{now.diff(whenFixed, 'days', true)} days</Line>
      <Line>{now.diff(whenFixed, 'weeks', true)} weeks</Line>
      <Line>{now.diff(whenFixed, 'months', true)} months</Line>
      <Line>{now.diff(whenFixed, 'years', true)} years</Line>
    </Wrapper>
  )
}

export default App
