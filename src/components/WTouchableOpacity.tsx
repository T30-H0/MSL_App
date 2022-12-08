import React, { forwardRef } from 'react'
import {
  FlexAlignType,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import { ExtendStyleProps } from './CoreType'

interface WTouchableProps extends TouchableOpacityProps, ExtendStyleProps {
  children?: React.ReactNode
  row?: boolean
  alignCenter?: boolean
  justifyCenter?: boolean
  center?: boolean
  style?: StyleProp<ViewStyle>
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined
  alignItems?: FlexAlignType
  alignSelf?: FlexAlignType
  hit?: number
}

const WTouchableOpacity = forwardRef(
  (props: WTouchableProps, ref: React.LegacyRef<TouchableOpacity>) => {
    const {
      fill,
      children,
      row,
      alignCenter,
      justifyCenter,
      center,
      style,
      mTop,
      mBottom,
      mLeft,
      mRight,
      pTop,
      pBottom,
      pLeft,
      pRight,
      pHoz,
      pVer,
      mHoz,
      mVer,
      color,
      h,
      w,
      minW,
      minH,
      maxW,
      maxH,
      borderR,
      borderW,
      borderC,
      justifyContent,
      alignItems,
      selfCenter,
      alignSelf,
      onPress,
      disabled,
      activeOpacity,
      hit,
      ...more
    } = props
    return (
      <TouchableOpacity
        style={[
          {
            ...(fill && styles.fill),
            ...(row && styles.row),
            ...(alignCenter && styles.alignCenter),
            ...(justifyCenter && styles.justifyCenter),
            ...(center && styles.center),
            ...(mTop && { marginTop: mTop }),
            ...(mBottom && { marginBottom: mBottom }),
            ...(mLeft && { marginLeft: mLeft }),
            ...(mRight && { marginRight: mRight }),
            ...(pTop && { paddingTop: pTop }),
            ...(pBottom && { paddingBottom: pBottom }),
            ...(pLeft && { paddingLeft: pLeft }),
            ...(pRight && { paddingRight: pRight }),
            ...(pHoz && { paddingHorizontal: pHoz }),
            ...(pVer && { paddingVertical: pVer }),
            ...(mHoz && { marginHorizontal: mHoz }),
            ...(mVer && { marginVertical: mVer }),
            ...(color && { backgroundColor: color }),
            ...(h && { height: h }),
            ...(w && { width: w }),
            ...(minH && { minHeight: minH }),
            ...(minW && { minWidth: minW }),
            ...(maxH && { maxHeight: maxH }),
            ...(maxW && { maxWidth: maxW }),
            ...(borderR && { borderRadius: borderR }),
            ...(borderW && { borderWidth: borderW }),
            ...(borderC && { borderColor: borderC }),
            ...(justifyContent && { justifyContent: justifyContent }),
            ...(alignItems && { alignItems: alignItems }),
            ...(alignSelf && { alignSelf }),
            ...(selfCenter && styles.selfCenter),
          },
          style && style,
        ]}
        hitSlop={{
          top: hit || 10,
          bottom: hit || 10,
          left: hit || 10,
          right: hit || 10,
        }}
        onPress={onPress && onPress}
        disabled={disabled}
        activeOpacity={activeOpacity || 0.6}
        {...more}
        ref={ref}
      >
        {children}
      </TouchableOpacity>
    )
  },
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fill: {
    flex: 1,
  },
  alignCenter: { alignItems: 'center' },
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: { alignSelf: 'center' },
})

export default WTouchableOpacity
