import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 0 20px 0;
  border: 1px solid #94858e;
  padding: 20px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #94858e;
  border-radius: 4px;
  font-size: 18px;
`;

export const FormButton = styled.button`
  width: 150px;
  font-size: 17px;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #0056b3;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1f4b72;
  }
`;