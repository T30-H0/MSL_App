import React from 'react';
import { ColorValue, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../../themes';
import { ExtendStyleProps } from './CoreType';
import Touchable from './Touchable';
import WText from './WText';

interface IButtonProps extends ExtendStyleProps {
  outline?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  textStyle?: StyleProp<ViewStyle>;
  label?: any;
  labelType?: any;
  onPress: () => void;
  shadow?: boolean;
  color?: ColorValue;
  borderColor?: ColorValue;
}

const Button = React.forwardRef((props: IButtonProps) => {
  const {
    outline,
    style,
    disabled,
    textStyle,
    label,
    labelType,
    onPress,
    shadow,
    color,
    borderColor,
  } = props;

  return (
    <Touchable
      style={[
        styles.container,
        style,
        color ? { backgroundColor: color } : {},
        shadow ? styles.shadow : {},
        outline && styles.outline,
        disabled && styles.disabled,
        borderColor ? { borderColor: borderColor } : {},
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <WText
        type={labelType || 'bold14'}
        color={outline ? Colors.primary : Colors.default}
        style={textStyle}
      >
        {label}
      </WText>
    </Touchable>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 48,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.default,
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
  },
  disabled: {
    backgroundColor: Colors.mainDefault,
  },
});

export default Button;
