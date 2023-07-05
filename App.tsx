import {SafeAreaView} from 'react-native';
import React from 'react';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {faker} from '@faker-js/faker';

import PaperTabsSectionList from './src';
import mockdata from './src/mockData';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PaperProvider theme={DefaultTheme}>
        <PaperTabsSectionList
          sections={mockdata}
          photo={faker.image.urlLoremFlickr({category: 'food'})}
        />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
