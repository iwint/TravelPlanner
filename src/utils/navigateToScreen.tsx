import {StackScreenProps} from '@react-navigation/stack';

export const navigateTo = (
  props: StackScreenProps<any> & {},
  screen: string,
  params?: any,
) => {
  props.navigation.navigate(screen, {...params});
};
