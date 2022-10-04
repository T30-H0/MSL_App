import React from 'react'
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import { Colors, Fonts } from '../themes'
import { ExtendStyleProps } from './CoreType'

interface WTextProps extends TextProps, ExtendStyleProps {
  type?:
    | 'normal'
    | 'regular8'
    | 'regular10'
    | 'regular12'
    | 'regular14'
    | 'regular15'
    | 'regular16'
    | 'semiBold12s'
    | 'medium12s'
    | 'semiBold10'
    | 'medium10'
    | 'semiBold12'
    | 'medium12'
    | 'semiBold13'
    | 'medium13'
    | 'semiBold14'
    | 'medium14'
    | 'semiBold15'
    | 'semiBold16'
    | 'medium16'
    | 'medium20'
    | 'semiBold18'
    | 'semiBold20'
    | 'semiBold24'
    | 'bold12'
    | 'bold14'
    | 'bold16'
    | 'bold18'
    | 'bold20'
    | 'bold24'
    | 'bold10'
  center?: boolean
  underLine?: boolean
  letterSpacing?: number
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
  fill?: boolean
  lineHeight?: number
  w?: number | string
  h?: number | string
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right'
}

const WText = React.forwardRef(
  (props: WTextProps, ref: React.LegacyRef<Text>) => {
    const {
      type,
      color,
      center,
      underLine,
      style,
      mTop,
      mBottom,
      mLeft,
      mRight,
      mHoz,
      mVer,
      pTop,
      pBottom,
      pLeft,
      pRight,
      pHoz,
      pVer,
      fill,
      children,
      onPress,
      textAlign,
      w,
      h,
      minH,
      minW,
      maxH,
      maxW,
      lineHeight = 24,
      letterSpacing = 0.02,
      ...more
    } = props
    return (
      <Text
        style={[
          styles.normal,
          type && styles[type],
          color && { color },
          center && styles.center,
          underLine && styles.txtUnderline,
          mTop && { marginTop: mTop },
          mBottom && { marginBottom: mBottom },
          mLeft && { marginLeft: mLeft },
          mRight && { marginRight: mRight },
          mHoz && { marginHorizontal: mHoz },
          mVer && { marginVertical: mVer },
          pTop && { paddingTop: pTop },
          pBottom && { paddingBottom: pBottom },
          pLeft && { paddingLeft: pLeft },
          pRight && { paddingRight: pRight },
          pHoz && { paddingHorizontal: pHoz },
          pVer && { paddingVertical: pVer },
          fill && styles.fill,
          textAlign && { textAlign: textAlign },
          lineHeight && { lineHeight: lineHeight },
          w && { width: w },
          h && { height: h },
          minH && { minHeight: minH },
          minW && { minWidth: minW },
          maxH && { maxHeight: maxH },
          maxW && { maxWidth: maxW },
          letterSpacing && { letterSpacing: letterSpacing },
          style && style,
        ]}
        {...more}
        ref={ref}
        onPress={onPress}
      >
        {children}
      </Text>
    )
  },
)

export const styles: any = StyleSheet.create({
  fill: {
    flex: 1,
  },
  center: {
    textAlign: 'center',
  },
  txtUnderline: {
    textDecorationLine: 'underline',
  },
  normal: {
    color: Colors.blackText,
    fontFamily: Fonts.type.regular,
    letterSpacing: 0.02,
  },
  regular8: {
    fontSize: 8,
    fontFamily: Fonts.type.regular,
  },
  regular10: {
    fontSize: 10,
    fontFamily: Fonts.type.regular,
  },
  regular12: {
    fontSize: normalize(Fonts.size.S12),
    fontFamily: Fonts.type.regular,
  },
  regular14: {
    fontSize: normalize(Fonts.size.S14),
    fontFamily: Fonts.type.regular,
  },
  regular15: {
    fontSize: normalize(Fonts.size.S15),
    fontFamily: Fonts.type.regular,
  },
  regular16: {
    fontSize: normalize(Fonts.size.S16),
    fontFamily: Fonts.type.regular,
  },
  semiBold12s: {
    fontSize: normalize(Fonts.size.S12),
    fontFamily: Fonts.type.semiBold,
  },
  medium12s: {
    fontSize: normalize(Fonts.size.S12),
    fontFamily: Fonts.type.medium,
  },
  semiBold10: {
    fontSize: normalize(Fonts.size.S10),
    fontFamily: Fonts.type.semiBold,
  },
  medium10: {
    fontSize: normalize(Fonts.size.S10),
    fontFamily: Fonts.type.medium,
  },
  semiBold12: {
    fontSize: normalize(Fonts.size.S12),
    fontFamily: Fonts.type.semiBold,
  },
  medium12: {
    fontSize: normalize(Fonts.size.S12),
    fontFamily: Fonts.type.medium,
  },
  semiBold13: {
    fontSize: normalize(Fonts.size.S13),
    fontFamily: Fonts.type.semiBold,
  },
  medium13: {
    fontSize: normalize(Fonts.size.S13),
    fontFamily: Fonts.type.medium,
  },
  semiBold14: {
    fontSize: normalize(Fonts.size.S14),
    fontFamily: Fonts.type.semiBold,
  },
  medium14: {
    fontSize: normalize(Fonts.size.S14),
    fontFamily: Fonts.type.medium,
  },
  semiBold16: {
    fontSize: normalize(Fonts.size.S16),
    fontFamily: Fonts.type.semiBold,
  },
  semiBold15: {
    fontSize: normalize(Fonts.size.S15),
    fontFamily: Fonts.type.semiBold,
  },
  medium16: {
    fontSize: normalize(Fonts.size.S16),
    fontFamily: Fonts.type.medium,
  },
  medium20: {
    fontSize: normalize(Fonts.size.S20),
    fontFamily: Fonts.type.medium,
  },
  semiBold18: {
    fontSize: normalize(Fonts.size.S18),
    fontFamily: Fonts.type.semiBold,
  },
  semiBold20: {
    fontSize: normalize(Fonts.size.S20),
    fontFamily: Fonts.type.semiBold,
  },
  semiBold24: {
    fontSize: normalize(Fonts.size.S24),
    fontFamily: Fonts.type.semiBold,
  },
  bold10: {
    fontSize: normalize(Fonts.size.S10),
    fontFamily: Fonts.type.bold,
  },
  bold12: {
    fontSize: normalize(Fonts.size.S12),
    fontFamily: Fonts.type.bold,
  },
  bold14: {
    fontSize: normalize(Fonts.size.S14),
    fontFamily: Fonts.type.bold,
  },
  bold16: {
    fontSize: normalize(Fonts.size.S16),
    fontFamily: Fonts.type.bold,
  },
  bold18: {
    fontSize: normalize(Fonts.size.S18),
    fontFamily: Fonts.type.bold,
  },
  bold20: {
    fontSize: normalize(Fonts.size.S20),
    fontFamily: Fonts.type.bold,
  },
  bold24: {
    fontSize: normalize(Fonts.size.S24),
    fontFamily: Fonts.type.bold,
  },
})

export default WText

export function normalize(size: number) {
  // const scale = Constants.SCREEN_WIDTH / Constants.BASE_WIDTH;
  // const newSize = scale * size;
  // if (Platform.OS === 'ios') {
  //   return Math.round(PixelRatio.roundToNearestPixel(newSize));
  // } else {
  //   return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  // }
  return size
}
