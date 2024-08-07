import Animated, {
  useSharedValue,
  useAnimatedScrollHandler
} from 'react-native-reanimated';
import { useCallback, useEffect, useRef } from 'react';
import { useWindowDimensions, View, BackHandler } from 'react-native';

import Page from './Page';
import { onBoardingData } from '~/data/onboarding';
import Paginator from './Paginator';
import { rH, rW } from '~/styles/responsive';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/navigators/RootStack';

const OnBoarding = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { width } = useWindowDimensions();
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const scrollX = useSharedValue(0);

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

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    }
  });

  useEffect(() => {
    const backAction = () => {
      const currentPage = Math.round(scrollX.value / width);
      if (currentPage > 0) {
        goToNextPage(currentPage - 2);
        return true;
      }
      // Allow default back action
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [scrollX, width, goToNextPage]);

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={{ height: 2, marginTop: rH(24), paddingHorizontal: rW(16) }}>
        <Paginator count={onBoardingData.length} scrollX={scrollX} />
      </View>
      <Animated.ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {onBoardingData.map((page, index) => (
          <Page
            key={index}
            {...page}
            {...{ index }}
            {...{ scrollX }}
            buttonTitle={
              index < onBoardingData.length - 1 ? 'Next' : `Let's start!`
            }
            onNext={() =>
              index < onBoardingData.length - 1
                ? goToNextPage(index)
                : navigation.navigate('Welcome')
            }
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default OnBoarding;
