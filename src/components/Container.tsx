import React, { forwardRef } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../themes';
import { ExtendStyleProps } from './CoreType';
import WText from './WText';
import WView from './WView';

interface ContainerProps extends ViewProps, ExtendStyleProps {
  haveTextInput?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  center?: boolean;
  loading?: boolean;
  message?: any;
  subViewStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  disableScrollForContainer?: boolean;
  scrollEnabled?: boolean;
  scrollVertical?: boolean;
  bounces?: boolean;
  keyboardShouldPersistTaps?: any;
  stickyHeaderIndices?: number;
  onScroll?: ({ nativeEvent }: any) => void;
  refreshControl?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
  isStickyHeader?: boolean;
  nestedScrollEnabled?: boolean;
}

const Container = forwardRef((props: ContainerProps) => {
  const {
    haveTextInput,
    style,
    contentStyle,
    center,
    loading,
    message,
    subViewStyle,
    children,
    disableScrollForContainer,
    scrollEnabled,
    scrollVertical,
    bounces = true,
    keyboardShouldPersistTaps,
    onRefresh,
    refreshing = false,
    stickyHeaderIndices,
    isStickyHeader,
    onScroll,
    nestedScrollEnabled = true,
  } = props;
  if (haveTextInput) {
    return (
      <SafeAreaView style={[styles.container, style]}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={scrollVertical}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'always'}
          style={[styles.subView, center && styles.center, subViewStyle && subViewStyle]}
          contentContainerStyle={contentStyle && contentStyle}
          scrollEnabled={!disableScrollForContainer}
          keyboardDismissMode="on-drag"
          enableResetScrollToCoords={false}
          contentInsetAdjustmentBehavior="never"
          extraScrollHeight={50}
          nestedScrollEnabled={nestedScrollEnabled}
          stickyHeaderIndices={[stickyHeaderIndices || 0]}
          onScroll={({ nativeEvent }) => onScroll && onScroll(nativeEvent)}
          scrollEventThrottle={0}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <WView style={styles.absoluteView} />
          </TouchableWithoutFeedback>
          {children}
        </KeyboardAwareScrollView>
        {loading && (
          <WView style={styles.fadeView}>
            <ActivityIndicator animating size="large" color={Colors.default} />
            {message && <WText style={styles.message}>{message}</WText>}
          </WView>
        )}
      </SafeAreaView>
    );
  }
  if (scrollEnabled) {
    return (
      <WView style={[style, styles.container]}>
        <ScrollView
          nestedScrollEnabled={nestedScrollEnabled}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'never'}
          scrollEnabled
          refreshControl={
            <RefreshControl
              tintColor={Colors.primary}
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.primary]}
            />
          }
          bounces={bounces}
          keyboardDismissMode="on-drag"
          style={[styles.container, center && styles.center, subViewStyle && subViewStyle]}
          contentContainerStyle={contentStyle && contentStyle}
          contentInsetAdjustmentBehavior="never"
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={isStickyHeader ? [0] : []}
          onScroll={({ nativeEvent }) => onScroll && onScroll(nativeEvent)}
          scrollEventThrottle={0}
        >
          {children}
        </ScrollView>
        {loading && (
          <WView style={styles.fadeView}>
            <ActivityIndicator animating size="large" color={Colors.default} />
            {message && <WText style={styles.message}>{message}</WText>}
          </WView>
        )}
      </WView>
    );
  }

  return (
    <WView style={[styles.container, style]}>
      {children}
      {loading && (
        <WView style={styles.fadeView}>
          <ActivityIndicator animating size="large" color={Colors.default} />
          {message && <WText style={styles.message}>{message}</WText>}
        </WView>
      )}
    </WView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subView: {
    flex: 1,
  },
  fadeView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  message: {},
});

export default Container;
