import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`

export const CategoryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  text-transform: capitalize;
`
