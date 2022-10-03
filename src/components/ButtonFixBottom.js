import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Keyboard, Platform, SafeAreaView } from 'react-native';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

const ButtonFixBottom = ({ children, ...props }) => {
  const animated = useRef(
    new Animated.Value(
      Platform.select({
        ios: 0,
        android: 0,
      }),
    ),
  );

  const handleKeyboardWillShow = useCallback((e) => {
    Animated.spring(animated.current, {
      toValue: -e.endCoordinates.height,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleKeyboardWillHide = useCallback(() => {
    Animated.spring(animated.current, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const subscriptions = [
      Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow),
      Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide),
    ];

    return () => {
      subscriptions.forEach((subscription) => subscription.remove());
    };
  }, [handleKeyboardWillHide, handleKeyboardWillShow]);

  return (
    <AnimatedSafeAreaView {...props} style={[{ transform: [{ translateY: animated.current }] }]}>
      {children}
    </AnimatedSafeAreaView>
  );
};

export default ButtonFixBottom;
