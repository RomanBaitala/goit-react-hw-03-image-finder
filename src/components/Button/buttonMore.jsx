import { ButtonMoreM, BoxM } from './buttonMore.styled';

export const ButtonMore = ({ onClick }) => {
  return (
    <>
      <BoxM>
        <ButtonMoreM onClick={onClick}>More</ButtonMoreM>
      </BoxM>
    </>
  );
};
