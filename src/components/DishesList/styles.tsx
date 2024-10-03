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

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(318px, 0.1fr));
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, minmax(318px, 0.1fr));
  }
`;
