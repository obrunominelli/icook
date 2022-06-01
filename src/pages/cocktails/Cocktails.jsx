import React, { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import { fetchCocktails } from '../../services/api';
import { Block, Container, Wrapper } from '../../styles';

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      const recommendedCocktails = await fetchCocktails('');
      setCocktails(recommendedCocktails);
    }
    getCocktails();

  }, []);
  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Block>
            {cocktails.map((cocktail, index) =>
              index < 24 && <AppCard
                key={ cocktail.idDrink }
                recipeId={ cocktail.idDrink }
                recipeTitle={ cocktail.strDrink }
                recipeThumb={ cocktail.strDrinkThumb }
                recipeType='cocktails'
              />
            )}
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default Cocktails;
