import React, {useRef, useState} from 'react';
import {
  View,
  Animated,
  SectionList as NativeSectionList,
  SafeAreaView,
  Image,
} from 'react-native';

import {Button, MD3LightTheme} from 'react-native-paper';

import {List} from 'react-native-paper';

const AnimatedSectionList = Animated.createAnimatedComponent(NativeSectionList);

import TabBar from './TabBar';

import styles from './styles';

const PaperTabsSectionList = ({sections, photo}) => {
  const [currentIndex, setCurrentIdex] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const blockUpdateIndexRef = useRef(false);
  const sectionListRef = useRef();

  const [layoutHeight, setLayoutHeight] = useState(0);
  const Max_Height = layoutHeight + 1;

  const coverTranslateY = scrollY.interpolate({
    inputRange: [-4, 0, 10],
    outputRange: [-2, 0, 3],
  });

  const coverScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });

  const tabBarOpacity = scrollY.interpolate({
    inputRange: [layoutHeight, Max_Height],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const renderTab = () => (
    <TabBar currentIndex={currentIndex}>
      {sections.map((item, index) => (
        <Button
          textColor={
            currentIndex === index
              ? MD3LightTheme.colors.primary
              : MD3LightTheme.colors.onSurfaceVariant
          }
          style={{
            borderRadius: 1,
            ...(currentIndex === index && {
              borderColor: MD3LightTheme.colors.primary,
              borderBottomWidth: 2,
            }),
          }}
          onPress={() => {
            setCurrentIdex(index);
            blockUpdateIndexRef.current = true;
            const sectionList = sectionListRef.current;
            if (sectionList && sectionList.scrollToLocation) {
              sectionList.scrollToLocation({
                animated: true,
                itemIndex: 0,
                viewOffset: 0,
                sectionIndex: index,
              });
            }
          }}>
          {item.title}
        </Button>
      ))}
    </TabBar>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <AnimatedSectionList
        ref={ref => (sectionListRef.current = ref)}
        scrollEventThrottle={16}
        stickySectionHeadersEnabled={false}
        sections={sections}
        renderSectionHeader={({section: {title}}) => (
          <List.Subheader
            style={{backgroundColor: MD3LightTheme.colors.background}}>
            {title}
          </List.Subheader>
        )}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        onMomentumScrollEnd={() => (blockUpdateIndexRef.current = false)}
        showsVerticalScrollIndicator={true}
        onViewableItemsChanged={({viewableItems}) => {
          if (!blockUpdateIndexRef.current && viewableItems[0]) {
            const {index} = viewableItems[0].section;
            if (currentIndex !== index) {
              setCurrentIdex(index);
            }
          }
        }}
        viewabilityConfig={{
          minimumViewTime: 10,
          itemVisiblePercentThreshold: 10,
        }}
        ListHeaderComponent={
          <>
            <Animated.View
              style={[
                {
                  maxHeight: 200,
                },
                {
                  transform: [
                    {
                      translateY: coverTranslateY,
                    },
                  ],
                },
              ]}>
              <Animated.View
                style={[
                  {
                    transform: [
                      {
                        scale: coverScale,
                      },
                    ],
                  },
                ]}>
                <Image
                  source={{
                    uri: photo,
                  }}
                  style={styles.image}
                />
              </Animated.View>
            </Animated.View>

            <View onLayout={ev => setLayoutHeight(ev.nativeEvent.layout.y)}>
              {renderTab()}
            </View>
          </>
        }
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <List.Item
              title={item.title}
              description={item.description}
              onPress={() => alert(item.title)}
              left={props =>
                item.photos && item.photos ? (
                  <List.Image
                    variant="video"
                    style={[props.style]}
                    source={{uri: item.photos}}
                  />
                ) : null
              }
            />
          </View>
        )}
      />
      <View style={styles.containerAnaimeted}>
        <Animated.View
          style={[
            styles.animatedTab,
            {
              opacity: tabBarOpacity,
            },
          ]}>
          {renderTab()}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default PaperTabsSectionList;
