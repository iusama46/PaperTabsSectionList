import {StyleSheet} from 'react-native';
import {MD3LightTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 250,
  },
  animatedTab: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAnaimeted: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  itemContainer: {
    backgroundColor: MD3LightTheme.colors.background,
    paddingHorizontal: 10,
  },
});

export default styles;
