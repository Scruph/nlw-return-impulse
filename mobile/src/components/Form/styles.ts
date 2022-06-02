import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,

    alignItems: 'center'
  },

  header: {
    marginVertical: 16,
    
    flexDirection: 'row'
  },

  titleContainer: {
    flex: 1,
    paddingRight: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  image: {
    width: 24,
    height: 24,
    marginRight: 8
  },

  titleText: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  },

  input: {
    height: 112,
    padding: 12,
    marginBottom: 8,

    borderRadius: 4,
    borderWidth: 1,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_primary,
    borderColor: theme.colors.stroke,
  },
  
  footer: {
    marginBottom: 16,
    flexDirection: 'row'
  }
});