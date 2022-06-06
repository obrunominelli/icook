import React, { useContext } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { Block, Container, Form, Select, Wrapper } from '../../styles';

function ExploreMealsNacionalities() {
  const { meals, mealsNacionalities } = useContext(Context);

  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Form>
            <Select>
              <option value=''>All</option>
              {mealsNacionalities.map((nacionaty, index) =>
                <option
                  key={index}
                  value={nacionaty.strArea}>
                    {nacionaty.strArea}
                </option>
              )}
            </Select>
          </Form>
          <Block>
            {meals.map((meal, index) =>
              index < 24 && <AppCard
                key={ meal.idMeal }
                id={ meal.idMeal }
                title={ meal.strMeal }
                thumb={ meal.strMealThumb }
                type='meals'
              />
            )}
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default ExploreMealsNacionalities;
