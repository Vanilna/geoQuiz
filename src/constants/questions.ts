import { Country } from '@gql/queries/getCountryDetails.generated';

export type Question = {
  generate: (x: Country) => string;
};

export const QUESTIONS: Question[] = [
  {
    generate: ({ name }: Country): string => `What flag does the ${name} have?`,
  },
  {
    generate: ({ name }: Country): string => `What is the capital of ${name}?`,
  },
  {
    generate: ({ name }: Country): string =>
      `What is the main language of ${name}?`,
  },
  {
    generate: ({ emoji }: Country): string => `${emoji} - Who's flag it is?`,
  },
  {
    generate: ({ capital }: Country): string =>
      `In which country ${capital} is located?`,
  },
  {
    generate: ({ name }: Country): string => `Where is ${name} is located?`,
  },
  {
    generate: ({ code }: Country): string => `Code ${code} stands for:`,
  },
  {
    generate: ({ name }: Country): string => `What is the currency of ${name}`,
  },
];
