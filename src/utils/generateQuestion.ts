import { Country } from '@gql/queries/getCountries.generated';
import { useGetCountryDetailsQuery } from '@gql/queries/getCountryDetails.generated';
import { QUESTIONS, Question } from '@src/constants/questions';

const pickRandom = (array: Array<any>) =>
  array[Math.floor(Math.random() * array.length)];

export const getRandomQuestion = (): Question => {
  return pickRandom(QUESTIONS);
};

export const getRandomCountry = (countries: Country[]): string => {
  return pickRandom(countries).code;
};

export const useCreateQuestion = (country: string) => {
  const { generate } = getRandomQuestion();

  const { data, loading, error } = useGetCountryDetailsQuery({
    variables: { countryCode: country },
  });

  if (loading || error) {
    return { question: undefined, loading, error };
  }

  const params = data?.country;
  const question = generate(params);

  return { question, error, loading };
};
