import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as DogLogo } from '../../assets/dog-russel-logo.svg'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const NavigationLogoContainer = styled(Link)`
  height: 100%;
  width: 75px;
  display: flex;
`

export const NavigationLogo = styled(DogLogo)`
  width: 75px;
  height: 75px;
`

export const NavigationList = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavigationLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`
