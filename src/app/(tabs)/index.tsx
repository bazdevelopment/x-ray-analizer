/* eslint-disable max-lines-per-function */
import { useScrollToTop } from '@react-navigation/native';
import { router } from 'expo-router';
import { checkForAppUpdate } from 'firebase/remote-config';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { useStickyHeaderScrollProps } from 'react-native-sticky-parallax-header';

import {
  useRecentInterpretations,
  useUpdateInterpretationFields,
} from '@/api/interpretation/interpretation.hooks';
import { useFetchUserNotifications } from '@/api/push-notifications/push-notifications.hooks';
import { useScanCategories } from '@/api/scan-categories/scan-categories.hooks';
import { useUser } from '@/api/user/user.hooks';
import CardWrapper from '@/components/card-wrapper';
import EdgeCaseTemplate from '@/components/edge-case-template';
import FreeTierStatus from '@/components/free-tier-status';
import { Foreground } from '@/components/home-foreground';
import { HomeHeaderBar } from '@/components/home-header-bar';
import ParallaxScrollView from '@/components/parallax-scrollview';
import PullToRefresh from '@/components/pull-to-refresh';
import ReportSkeleton from '@/components/report-card-skeleton';
import ScanCategoriesStories from '@/components/scan-category-stories';
import ScanReportCard from '@/components/scan-report-card';
import { translate, useSelectedLanguage } from '@/core';
import {
  type IInterpretationResult,
  type IInterpretationResultRecords,
} from '@/types/interpretation-report';
import { ActivityIndicator, colors, type ScrollView, Text, View } from '@/ui';
import { UploadIcon } from '@/ui/assets/icons';
import { NoReports } from '@/ui/assets/illustrations';

const PARALLAX_HEIGHT = 310;
const HEADER_BAR_HEIGHT = 180;
const SNAP_START_THRESHOLD = 70;
const SNAP_STOP_THRESHOLD = 330;

export default function Home() {
  const { language } = useSelectedLanguage();

  const {
    data: recentInterpretations,
    refetch: refetchRecentReports,
    isPending: areRecentReportsLoading,
  } = useRecentInterpretations({
    limit: 5,
    language,
  })();

  const { data: userInfo, refetch: refetchUserInfo } = useUser(language);

  const { refetch: refetchUserNotifications } = useFetchUserNotifications({
    userId: userInfo?.userId,
    language,
  })();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onFullSync = () => {
    refetchRecentReports();
    refetchUserInfo();
    refetchUserNotifications();
  };

  const { data, isPending: areScanCategoriesLoading } =
    useScanCategories(language);

  const {
    mutate: onUpdateInterpretationFields,
    isPending: isUpdateTitlePending,
  } = useUpdateInterpretationFields()();

  checkForAppUpdate();

  const {
    onMomentumScrollEnd,
    onScroll,
    onScrollEndDrag,
    scrollHeight,
    scrollValue,
    scrollViewRef,
  } = useStickyHeaderScrollProps<ScrollView>({
    parallaxHeight: PARALLAX_HEIGHT,
    snapStartThreshold: SNAP_START_THRESHOLD,
    snapStopThreshold: SNAP_STOP_THRESHOLD,
    snapToEdge: true,
  });

  useScrollToTop(scrollViewRef);

  return (
    <PullToRefresh
      onRefresh={onFullSync}
      refreshingComponent={
        <View
          style={{
            paddingBottom: 20,
            paddingTop: 10,
          }}
        >
          <ActivityIndicator
            size="small"
            color={isDark ? colors.white : colors.black}
          />
        </View>
      }
    >
      <ParallaxScrollView
        headerHeight={HEADER_BAR_HEIGHT}
        ForegroundComponent={<Foreground />}
        HeaderBarComponent={<HomeHeaderBar />}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScroll={onScroll}
        onScrollEndDrag={onScrollEndDrag}
        scrollHeight={scrollHeight}
        scrollValue={scrollValue}
        scrollViewRef={scrollViewRef}
      >
        <View className="mt-14">
          <FreeTierStatus
            className="dark:bg-blackBeauty mx-4 mt-10 rounded-xl bg-white p-4"
            scansLeft={10}
            onUpgrade={() => console.log('on upgrade')}
          />

          <Text className="mx-6 mb-3 mt-6 font-semibold-nunito">
            {translate('home.scanCategories.heading')}
          </Text>

          <ScanCategoriesStories
            categories={data?.categories}
            isLoading={areScanCategoriesLoading}
            className="ml-4"
          />
          <Text className="mx-6 mb-4 mt-8 font-semibold-nunito">
            {translate('home.recentReports.heading')}
          </Text>

          <ReportsList
            areRecentReportsLoading={areRecentReportsLoading}
            recentInterpretations={recentInterpretations}
            onUpdateInterpretationFields={onUpdateInterpretationFields}
            isUpdateTitlePending={isUpdateTitlePending}
            className="mx-6"
          />
        </View>
      </ParallaxScrollView>
    </PullToRefresh>
  );
}

const ReportsList = ({
  areRecentReportsLoading,
  recentInterpretations,
  onUpdateInterpretationFields,
  isUpdateTitlePending,
  className,
}: {
  areRecentReportsLoading: boolean;
  recentInterpretations: IInterpretationResultRecords;
  onUpdateInterpretationFields: ({
    documentId,
    fieldsToUpdate,
    language,
  }: {
    documentId: string;
    fieldsToUpdate: object;
    language: string;
  }) => void;
  isUpdateTitlePending: boolean;
  className: string;
}) => {
  const { language } = useSelectedLanguage();
  return (
    <View className={`flex-1 ${className}`}>
      {areRecentReportsLoading ? (
        <ReportSkeleton />
      ) : !recentInterpretations?.records?.length ? (
        <EdgeCaseTemplate
          additionalClassName="mt-8 ml-[-10]"
          image={<NoReports width={100} height={100} />}
          message="No recent reports yet!"
          primaryAction={{
            label: 'Upload now',
            icon: <UploadIcon />,
            variant: 'default',
            onPress: () => console.log('ceva'),
          }}
        />
      ) : (
        <View className="gap-4">
          {recentInterpretations?.records?.map(
            (record: IInterpretationResult) => (
              <CardWrapper
                chevronColor={colors.primary[900]}
                key={record.id}
                className="dark:bg-blackBeauty rounded-xl bg-white p-4"
                onPress={() =>
                  router.push({
                    pathname: '/scan-interpretation/[id]',
                    params: { id: record.docId },
                  })
                }
              >
                <ScanReportCard
                  language={language}
                  {...record}
                  isUpdateTitlePending={isUpdateTitlePending}
                  onEditTitle={(title, documentId) =>
                    onUpdateInterpretationFields({
                      documentId,
                      fieldsToUpdate: { title },
                      language,
                    })
                  }
                />
              </CardWrapper>
            ),
          )}
        </View>
      )}
    </View>
  );
};
