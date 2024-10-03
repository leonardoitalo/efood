import styled from 'styled-components';

export const DishesListContainer = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(318px, 0.1fr));
  gap: 32px;
  padding: 56px 170px 120px 170px;

  @supports not (grid-template-rows: repeat(3, minmax(340px, 1fr))) {
    grid-template-rows: auto;
  }

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
