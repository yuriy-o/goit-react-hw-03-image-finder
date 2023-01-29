/* 
Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми.
Створює DOM - елемент наступної структури.
*/

import { Formik } from 'formik';

const {
  Header,
  SearchForm,
  SubmitButton,
  Input,
  SubmitLabel,
} = require('./Searchbar.styled');

export const Searchbar = () => {
  return (
    <Header>
      <Formik>
        <SearchForm>
          <SubmitButton type="submit">
            <SubmitLabel>Search</SubmitLabel>
          </SubmitButton>

          <Input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};
