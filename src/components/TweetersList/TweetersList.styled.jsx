import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardsList = styled.ul`
  list-style: none;

  display: flex;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
  }
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const CardListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 50px;
`;

export const EmptyFilterMessage = styled.h4`
  text-align: center;
  font-size: 30px;
  line-height: 45px;
  font-weight: 600;
  color: #5CD3A8;
`;

export const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 50px;
  border-radius: 15px;
  
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #ebd8ff;
  text-decoration: none;

  background-color: #5736a3;
  box-shadow:-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  &:hover,
  &:focus {
    color: #5736a3;
    background-color:#5CD3A8;
    }
  }
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 50px;
  border-radius: 15px;
  border: none;
  outline: none;

  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #ebd8ff;

  background-color: #5736a3;
  box-shadow:-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  &:hover,
  &:focus {
    color: #5736a3;
    background-color:#5CD3A8;
    }
  }
`;

export const DropdownLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 180px;
  height: 50px;
  border-radius: 15px;
  outline: none;

  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  color: #ebd8ff;

  background-color: #5736a3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const StyledSelect = styled.select`
  padding-left: 5px;
  border-radius: 8px;

  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: #5736a3;

  background-color: #ebd8ff;
  outline: none;

  &:hover,
  &:focus {
    color:#5CD3A8;
    }
  }
`;