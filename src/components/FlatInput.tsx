import React, { forwardRef, useState } from 'react';
import {
  Image,
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { Colors, Fonts } from '../../themes';
import Icons from '../../themes/Icons';
import { ExtendStyleProps } from './CoreType';
import Divider from './Divider';
import Touchable from './Touchable';
import WText, { normalize } from './WText';

const DEFAULT_SIZE = 64;
const ICON_SIZE = 20,
  ICON_COLOR = '#808184';

interface FlatInputProps extends TextInputProps, ExtendStyleProps {
  enable?: boolean;
  defaultValue?: any;
  label?: any;
  icon?: any;
  iconRight?: any;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  placeholder?: any;
  placeholderTextColor?: any;
  autoCapitalize?: any;
  style?: StyleProp<ViewStyle>;
  textInputWrap?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  isShowEyeIcon?: boolean;
  underline?: boolean;
  errorMessage?: any;
  KeyBoardType?: KeyboardTypeOptions;
  returnKeyType?: TextInputProps['returnKeyType'];
  containerStyle?: StyleProp<ViewStyle>;
  iconWrapStyle?: StyleProp<ViewStyle>;
  iconStyle?: any;
  multiline?: boolean;
  value?: any;
  autoCompleteType?: any;
  clearButtonMode?: any;
  onFocus?: () => void;
  onBlur?: (e?: any) => void;
  touched?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  errorStyle?: StyleProp<ViewStyle>;
}

const FlatInput = forwardRef((props: FlatInputProps, ref: FlatInputRef) => {
  const {
    enable,
    defaultValue,
    label,
    icon,
    onChangeText,
    onSubmitEditing,
    placeholder,
    placeholderTextColor = Colors.placeholderText,
    autoCapitalize,
    style,
    textInputWrap,
    textInputStyle,
    labelStyle,
    secureTextEntry,
    isShowEyeIcon = true,
    underline,
    errorMessage,
    KeyBoardType,
    returnKeyType,
    containerStyle,
    iconWrapStyle,
    multiline,
    value,
    autoCompleteType,
    clearButtonMode,
    onFocus,
    onBlur,
    touched,
    required,
    autoFocus,
    errorStyle,
    iconStyle,
    iconRight,
  } = props;
  const [_value, setValue] = useState(defaultValue);
  const [isSecure, setSecureVisible] = useState(secureTextEntry);
  // const [isFocus, setFocus] = useState(false);
  const _onChangText = (text: string) => {
    setValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const _onSubmitEditing = () => {
    onSubmitEditing && onSubmitEditing();
  };

  const onChangeSecureState = () => {
    setSecureVisible(!isSecure);
  };

  const _onFocus = () => {
    if (typeof onFocus === 'function') {
      onFocus();
    }
    // setFocus(true);
  };

  return (
    <View style={style && style}>
      <View style={[styles.container, errorMessage && touched && styles.error, containerStyle]}>
        {label && (
          <View style={styles.row}>
            <WText
              type={_value ? 'regular12' : 'semiBold12'}
              color={_value ? Colors.mainGrey : Colors.blackText}
              style={[styles.label, labelStyle]}
            >
              {label}
            </WText>
            {required && (
              <WText mBottom={2} type="bold12" color={Colors.crimson}>
                {'*'}
              </WText>
            )}
          </View>
        )}

        <View style={[styles.textInputWrap, textInputWrap]}>
          {icon && (
            <View style={[styles.iconWrapLeft, iconWrapStyle]}>
              <Image
                source={icon}
                style={[{ width: ICON_SIZE, height: ICON_SIZE, tintColor: ICON_COLOR }, iconStyle]}
              />
            </View>
          )}

          <TextInput
            clearButtonMode={clearButtonMode}
            ref={ref}
            editable={enable}
            autoCapitalize={autoCapitalize || 'none'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            autoFocus={autoFocus || false}
            blurOnSubmit={false}
            autoCompleteType={autoCompleteType || 'off'}
            secureTextEntry={isSecure}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={KeyBoardType || 'default'}
            returnKeyType={returnKeyType || 'done'}
            style={[
              styles.textInput,
              textInputStyle,
              secureTextEntry && { color: Colors.darkText },
            ]}
            value={value || _value}
            onFocus={_onFocus}
            onBlur={onBlur}
            onChangeText={_onChangText}
            onSubmitEditing={_onSubmitEditing}
            multiline={multiline || false}
          />

          {iconRight && (
            <View style={[styles.iconWrapLeft, iconWrapStyle]}>
              <Image
                source={iconRight}
                style={[{ width: ICON_SIZE, height: ICON_SIZE, tintColor: ICON_COLOR }, iconStyle]}
              />
            </View>
          )}
          {secureTextEntry && isShowEyeIcon && (
            <Touchable
              onPress={onChangeSecureState}
              style={styles.iconWrap}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image
                source={isSecure ? Icons.icEyeClose : Icons.icEyeOpen}
                style={styles.icSecure}
              />
            </Touchable>
          )}
        </View>
        {underline && <Divider />}
      </View>
      {touched && errorMessage && (
        <WText style={[styles.txtError, errorStyle]} type="regular12">
          {errorMessage}
        </WText>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: DEFAULT_SIZE,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.borderInput,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  label: {
    marginBottom: 4,
  },
  textInputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    height: '100%',
    flex: 1,
    fontSize: normalize(Fonts.size.S14),
    color: Colors.blackText,
    fontFamily: Fonts.type.regular,
    padding: 0,
  },
  txtError: {
    marginTop: 5,
    marginLeft: 15,
    color: Colors.systemError,
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapLeft: {
    //
  },
  error: { borderWidth: 1, borderColor: Colors.error },
  icSecure: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: ICON_COLOR,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FlatInput;
