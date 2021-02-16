import { DocumentNode } from 'graphql';
import {
  capitalFragment,
  codeFragment,
  continentFragment,
  currencyFragment,
  flagFragment,
  languageFragment,
} from '@gql/fragments';
import { CountryDetails } from '@gql/queries/getCountryDetails.generated';

export type Question = {
  fragment: DocumentNode;
  generate: (x: CountryDetails) => string;
};

export const QUESTIONS: Question[] = [
  {
    fragment: flagFragment,
    generate: ({ name }: CountryDetails): string =>
      `What flag does the ${name} have?`,
  },
  {
    fragment: capitalFragment,
    generate: ({ name }: CountryDetails): string =>
      `What is the capital of ${name}?`,
  },
  {
    fragment: languageFragment,
    generate: ({ name }: CountryDetails): string =>
      `What is the main language of ${name}?`,
  },
  {
    fragment: flagFragment,
    generate: ({ emoji }: CountryDetails): string =>
      `${emoji} - Who's flag it is?`,
  },
  {
    fragment: capitalFragment,
    generate: ({ capital }: CountryDetails): string =>
      `In which country ${capital} is located?`,
  },
  {
    fragment: continentFragment,
    generate: ({ name }: CountryDetails): string =>
      `Where is ${name} is located?`,
  },
  {
    fragment: codeFragment,
    generate: ({ code }: CountryDetails): string => `Code ${code} stands for:`,
  },
  {
    fragment: currencyFragment,
    generate: ({ name }: CountryDetails): string =>
      `What is the currency of ${name}`,
  },
];
