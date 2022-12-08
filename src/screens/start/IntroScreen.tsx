import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Touchable from '../../components/Touchable'
import WText from '../../components/WText'
import WTouchableOpacity from '../../components/WTouchableOpacity'
import WView from '../../components/WView'
import { INTRO_LIST } from '../../test_data/data'
import { Colors, Images } from '../../themes'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../themes/Constants'

const IntroScreen = () => {
  const [slideNum, setSlideNum] = useState(0)

  const onNext = () => {
    //navigate screen here
  }

  const onScrollEnd = (e: any) => {
    const { x } = e.nativeEvent.contentOffset
    const { width } = e.nativeEvent.layoutMeasurement
    const pageNum = Math.floor(x / width)
    setSlideNum(pageNum)
  }

  return (
    <WView fill color={`${Colors.secondary}10`}>
      <WView>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={onScrollEnd}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 1 }}
        >
          {INTRO_LIST?.map((item, index) => {
            return (
              <WView w={SCREEN_WIDTH} mTop={SCREEN_WIDTH * 0.4}>
                <Image source={item?.avatar} style={styles.image} />
                <WText type="regular16" center mHoz={20} mTop={20}>
                  {item?.content}
                </WText>
              </WView>
            )
          })}
        </ScrollView>
        <WView center mTop={50}>
          {slideNum === 2 ? (
            <WTouchableOpacity onPress={onNext}>
              <Image
                source={Images.icRightArrowWithCircle}
                style={styles.btnNext}
              />
            </WTouchableOpacity>
          ) : (
            <WView row>
              {INTRO_LIST.map((_elm, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      backgroundColor:
                        slideNum === index
                          ? Colors.primary
                          : Colors.neuTralGrey,
                    },
                  ]}
                />
              ))}
            </WView>
          )}
        </WView>
      </WView>
    </WView>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.3,
    resizeMode: 'contain',
  },
  dot: {
    marginTop: 5,
    marginHorizontal: 8,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginBottom: SCREEN_WIDTH > 360 ? 30 : 15,
  },
  btnNext: { tintColor: Colors.primary },
})
