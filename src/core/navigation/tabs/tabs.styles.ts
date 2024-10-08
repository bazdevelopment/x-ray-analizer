import { StyleSheet } from 'react-native';

import { DEVICE_TYPE } from '@/core/device-type';
import { colors } from '@/ui';

export const getBottomTabBarStyle = (isDark: boolean) =>
  StyleSheet.create({
    tabBarContainer: {
      paddingTop: 25,
      borderRadius: 40,
      backgroundColor: isDark ? colors.black : colors.muzli,
      height: DEVICE_TYPE.IOS ? 75 : 65,
      width: '90%',
      position: 'absolute',
      left: '5%',
      bottom: 20,
      ...(isDark && {
        borderColor: colors.charcoal[500],
        borderTopColor: colors.charcoal[500],
        borderTopWidth: 1.5,
        borderWidth: 1.5,
      }),
    },
    tabBarLabel: {
      color: 'red',
      display: 'none',
    },
  });
