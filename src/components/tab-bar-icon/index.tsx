import { View } from 'react-native';

import { Text } from '@/ui';

import GradientText from '../gradient-text';
import { type ITabBarIcon } from './tab-bar-icon.interface';

export const TabBarIcon = ({
  icon,
  focused,
  textClassName,
  title,
}: ITabBarIcon) => {
  return (
    <View className="flex-col items-center gap-1">
      {icon}
      {focused ? (
        <GradientText className={textClassName} colors={['#7CD0FC', '#A935F8']}>
          {title}
        </GradientText>
      ) : (
        <Text className={textClassName}>{title}</Text>
      )}
    </View>
  );
};
