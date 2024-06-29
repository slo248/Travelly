import Animated, {
  useSharedValue,
  useAnimatedScrollHandler
} from 'react-native-reanimated';
import { useCallback, useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';

import Page from './Page';
import { onBoardingData } from '~/data/onboarding';
import Paginator from './Paginator';
import { rH, rW } from '~/styles/responsive';

import { OnBoardingProps, RootStackParamList } from '~/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ROUTES } from '~/navigation/routes';

const OnBoarding: React.FC<OnBoardingProps> = () => {
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
