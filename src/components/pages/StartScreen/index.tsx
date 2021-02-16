import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useGetCountriesQuery } from '@gql/queries/getCountries.generated';

import WithBackground from '@templates/WithBackground';
import Header from '@atoms/Header';
import CustomButton from '@atoms/CustomButton';
import { LEVELS } from '@src/constants/index';

const StartScreen: React.FC = (): JSX.Element => {
  const { error, loading } = useGetCountriesQuery();
  const navigation = useNavigation();

  return (
    <WithBackground backgroundImage={require('@src/assets/img/world.jpg')}>
      {!loading && !error && (
        <>
          <Header title="Test your Geo Knowledge" />
          <View>
            {LEVELS.map((level) => (
              <CustomButton
                label={level}
                clickHandler={() => navigation.navigate('QuestionScreen')}
                key={level}
              />
            ))}
          </View>
        </>
      )}

      {loading && <Header title="Loading..." />}

      {error && (
        <Header title="Something went wrong. Please try again later." />
      )}

      <CustomButton label="Rules" clickHandler={() => {}} secondary />
    </WithBackground>
  );
};

export default StartScreen;
