import Animated from 'react-native-reanimated';
import { useCallback, useRef } from 'react';
import { useWindowDimensions } from 'react-native';

import Page from './Page';

import { onBoardingData } from '~/data/onboarding';

export default function OnBoarding() {
  const { width } = useWindowDimensions();
  const scrollViewRef = useRef<Animated.ScrollView>(null);

  const goToNextPage = useCallback(
    (index: number) => {
      if (index < onBoardingData.length - 1) {
        scrollViewRef.current?.scrollTo({
          x: width * (index + 1),
          animated: true
        });
      }
    },
    [width]
  );

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      style={{ flex: 1 }}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    >
      {onBoardingData.map((page, index) => (
        <Page
          key={index}
          {...page}
          buttonTitle={
            index < onBoardingData.length - 1 ? 'Next' : `Let's start!`
          }
          onNext={() => goToNextPage(index)}
        />
      ))}
    </Animated.ScrollView>
  );
}
