import { CountryDetails } from '@gql/queries/getCountryDetails.generated';

export type Question = {
  generate: (x: CountryDetails) => string;
};

export const QUESTIONS: Question[] = [
  {
    generate: ({ name }: CountryDetails): string =>
      `What flag does the ${name} have?`,
  },
  {
    generate: ({ name }: CountryDetails): string =>
      `What is the capital of ${name}?`,
  },
  {
    generate: ({ name }: CountryDetails): string =>
      `What is the main language of ${name}?`,
  },
  {
    generate: ({ emoji }: CountryDetails): string =>
      `${emoji} - Who's flag it is?`,
  },
  {
    generate: ({ capital }: CountryDetails): string =>
      `In which country ${capital} is located?`,
  },
  {
    generate: ({ name }: CountryDetails): string =>
      `Where is ${name} is located?`,
  },
  {
    generate: ({ code }: CountryDetails): string => `Code ${code} stands for:`,
  },
  {
    generate: ({ name }: CountryDetails): string =>
      `What is the currency of ${name}`,
  },
];
