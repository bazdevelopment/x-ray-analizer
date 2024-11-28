import dayjs from 'dayjs';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import { router } from 'react-query-kit';

import { colors, Text } from '@/ui';
import { ArrowRight } from '@/ui/assets/icons';

import Icon from '../icon';

/**
 * report overview card
 * used in the schedule screen for each day when there are some report done
 */
const ReportOverviewCard = ({
  report,
  isCurrentDayFocused,
}: {
  report: any;
  isCurrentDayFocused: boolean;
}) => {
  const hasReports = report?.data;

  return (
    <View
      className={`mx-4 flex-row items-center justify-between rounded-lg bg-white ${isCurrentDayFocused && 'border'}`}
    >
      <View className="my-4 flex-1">
        <View className="flex-row justify-between">
          <Text>{dayjs(report.createdAt).format('dddd-DD')}</Text>
          {/* <View className=""> */}
          <Icon
            icon={<ArrowRight width={14} height={14} fill={colors.lightGray} />}
            onPress={() =>
              router.push({
                pathname: 'report-details-screen',
                params: {
                  day: report.day,
                },
              })
            }
          />
          {/* </View> */}
        </View>
        <View className="w-[90%] flex-col">
          {hasReports ? (
            report?.data?.map((item) => (
              <Fragment key={item.id}>
                <Text numberOfLines={2}>{item.interpretation}</Text>
              </Fragment>
            ))
          ) : (
            <Text className="font-bold">No reports yet!</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ReportOverviewCard;