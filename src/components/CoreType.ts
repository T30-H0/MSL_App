import { ColorValue } from 'react-native';

export interface ExtendStyleProps {
  fill?: boolean;
  style?: any;
  mTop?: number | string;
  mBottom?: number | string;
  mLeft?: number | string;
  mRight?: number | string;
  pTop?: number | string;
  pBottom?: number | string;
  pLeft?: number | string;
  pRight?: number | string;
  pHoz?: number | string;
  pVer?: number | string;
  pDin?: number | string;
  mHoz?: number | string;
  mVer?: number | string;
  color?: ColorValue;
  h?: number | string;
  w?: number | string;
  minW?: number | string;
  minH?: number | string;
  maxW?: number | string;
  maxH?: number | string;
  borderR?: number;
  borderW?: number;
  borderC?: string;
  selfCenter?: boolean;
  absolute?: boolean;
  aTop?: number | string;
  aBottom?: number | string;
  aLeft?: number | string;
  aRight?: number | string;
  tabLabel?: string;
}
