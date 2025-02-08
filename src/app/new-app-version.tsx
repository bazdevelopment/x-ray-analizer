import { useColorScheme } from 'nativewind';
import React from 'react';
import { View } from 'react-native';

import Icon from '@/components/icon';
import { SnakeLine, SnakeLineRotated } from '@/components/snake-line';
import { translate } from '@/core';
import { Button, colors, Text } from '@/ui';
import { MobileIcon } from '@/ui/assets/icons/mobile-icon';

const NewAppVersion = () => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <View className="flex-1 items-center justify-between bg-primary-900 dark:bg-blackEerie">
      <SnakeLine
        color={isDark ? colors.charcoal[600] : colors.primary[600]}
        className="absolute right-[150] top-[70]"
      />
      <SnakeLine
        color={isDark ? colors.charcoal[600] : colors.primary[600]}
        className="absolute right-[50] top-[60]"
      />
      <SnakeLineRotated
        color={isDark ? colors.charcoal[600] : colors.primary[600]}
        className="absolute left-[100] top-0"
      />
      <SnakeLineRotated
        color={isDark ? colors.charcoal[600] : colors.primary[600]}
        className="absolute left-[170] top-[-120]"
      />
      <SnakeLineRotated
        color={isDark ? colors.charcoal[600] : colors.primary[600]}
        className="absolute right-[50] top-[-20]"
      />
      <SnakeLineRotated
        color={isDark ? colors.charcoal[600] : colors.primary[600]}
        className="absolute right-[-10] top-0"
      />
      <View className="top-[-10%] mt-10 flex-1 items-center justify-center">
        <Icon icon={<MobileIcon />} />
        <Text className="mt-14 px-6 text-center font-bold-nunito text-[32px] text-white">
          {translate('rootLayout.screens.newAppVersionScreen.heading')}
        </Text>
        <Text className="mt-8 px-10 text-center text-lg text-white">
          {translate('rootLayout.screens.newAppVersionScreen.subheading')}
        </Text>
      </View>

      <Button
        label={translate('rootLayout.screens.newAppVersionScreen.action')}
        variant="default"
        className="bottom-14 mt-6 h-[56px] w-[90%] rounded-xl border-2 border-primary-900 bg-white pl-5 active:bg-primary-700 dark:bg-primary-900"
        textClassName="text-lg text-center text-primary-900 dark:text-white"
        iconPosition="left"
        onPress={() =>
          console.log('add here the link for stores for both platforms')
        }
      />
    </View>
  );
};

export default NewAppVersion;
