import React, {forwardRef} from 'react';
import {
  FlexAlignType,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {ExtendStyleProps} from './CoreType';

interface WViewProps extends ViewProps, ExtendStyleProps {
  children?: React.ReactNode;
  row?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  center?: boolean;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?: FlexAlignType;
  alignSelf?: FlexAlignType;
  style?: StyleProp<ViewStyle>;
}

const WView = forwardRef((props: WViewProps, ref: React.LegacyRef<View>) => {
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
    pDin,
    mHoz,
    mVer,
    color,
    h,
    w,
    minW,
    minH,
    maxH,
    maxW,
    borderR,
    borderW,
    borderC,
    justifyContent,
    alignItems,
    selfCenter,
    absolute,
    aTop,
    aBottom,
    aRight,
    aLeft,
    alignSelf,
    ...more
  } = props;
  // const { ab } = props;
  return (
    <View
      style={[
        {
          ...(mTop && {marginTop: mTop}),
          ...(fill && styles.fill),
          ...(row && styles.row),
          ...(alignCenter && styles.alignCenter),
          ...(justifyCenter && styles.justifyCenter),
          ...(center && styles.center),
          ...(mTop && {marginTop: mTop}),
          ...(mBottom && {marginBottom: mBottom}),
          ...(mLeft && {marginLeft: mLeft}),
          ...(mRight && {marginRight: mRight}),
          ...(mHoz && {marginHorizontal: mHoz}),
          ...(mVer && {marginVertical: mVer}),
          ...(pTop && {paddingTop: pTop}),
          ...(pBottom && {paddingBottom: pBottom}),
          ...(pLeft && {paddingLeft: pLeft}),
          ...(pRight && {paddingRight: pRight}),
          ...(pHoz && {paddingHorizontal: pHoz}),
          ...(pVer && {paddingVertical: pVer}),
          ...(pDin && {padding: pDin}),
          ...(color && {backgroundColor: color}),
          ...(h && {height: h}),
          ...(w && {width: w}),
          ...(minH && {minHeight: minH}),
          ...(minW && {minWidth: minW}),
          ...(maxH && {maxHeight: maxH}),
          ...(maxW && {maxWidth: maxW}),
          ...(borderR && {borderRadius: borderR}),
          ...(borderW && {borderWidth: borderW}),
          ...(borderC && {borderColor: borderC}),
          ...(justifyContent && {justifyContent: justifyContent}),
          ...(alignItems && {alignItems: alignItems}),
          ...(alignSelf && {alignSelf}),
          ...(selfCenter && styles.selfCenter),
          ...(absolute && {
            ...styles.absolute,
            top: aTop,
            bottom: aBottom,
            right: aRight,
            left: aLeft,
          }),
        },
        style && style,
      ]}
      {...more}
      ref={ref}>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fill: {
    flex: 1,
    backgroundColor: 'white',
  },
  alignCenter: {alignItems: 'center'},
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {alignSelf: 'center'},
  absolute: {
    position: 'absolute',
  },
});

export default WView;
