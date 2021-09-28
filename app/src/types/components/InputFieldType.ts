import {TextInputProps, ViewStyle} from 'react-native';

type FieldType = {
  label?: string;
  wrapperStyle?: ViewStyle;
  currentRef?: any;
  error?: string | null | undefined;
};

export type InputFieldType = FieldType & TextInputProps;
