import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  primaryButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryButton: {
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.link,
  },
  primaryButtonText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});