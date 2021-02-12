import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  shared: {
    padding: 10,
    marginBottom: 20,
  },
  main: {
    minWidth: '70%',
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  secondary: {
    alignSelf: 'flex-start',
    padding: 0,
    borderBottomColor: '#fff',
    borderBottomWidth: 3,
  },
  label: {
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
