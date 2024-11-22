import { type BottomSheetModal } from '@gorhom/bottom-sheet';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Linking, Platform } from 'react-native';

import { colors, Modal } from '@/ui';
import { SettingsWheelIcon } from '@/ui/assets/icons';
import { NoInternetIllustration } from '@/ui/assets/illustrations';

import EdgeCaseTemplate from '../edge-case-template';

export const NoInternetConnectionModal = React.forwardRef<BottomSheetModal>(
  ({}, ref) => {
    const height = 300;
    const snapPoints = React.useMemo(() => [height], [height]);
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: isDark ? colors.neutral[800] : colors.white,
        }}
        enableOverDrag={false}
        enablePanDownToClose={false}
        canBeDismissed={false}
      >
        <EdgeCaseTemplate
          additionalClassName="mt-[-20]"
          image={
            <NoInternetIllustration
              width={100}
              height={100}
              fill={colors.danger[500]}
            />
          }
          title="You're offline!"
          message="Turn on mobile data or connect to a Wi-Fi. Or just take a break and go for a walk!"
          primaryAction={{
            label: 'Settings',
            onPress: () => {
              if (Platform.OS === 'ios') {
                Linking.openURL('App-Prefs:root=WIFI');
              } else {
                Linking.openSettings();
              }
            },
            icon: (
              <SettingsWheelIcon width={20} height={20} color={colors.white} />
            ),
          }}
        />
      </Modal>
    );
  },
);