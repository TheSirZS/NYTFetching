import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    flexGrow: 1,
    paddingTop: 16,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  headline: {
    fontSize: 24,
    fontWeight: '700',
  },
  vertical: {
    paddingVertical: 8,
  },
  banner: {
    width,
    height: 300,
    resizeMode: 'cover',
  },
  text: {fontSize: 16, fontWeight: '400'},
  caption: {fontSize: 12, fontWeight: '400'},
});
