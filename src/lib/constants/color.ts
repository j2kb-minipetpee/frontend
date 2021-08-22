export enum ColorMap {
  EMERALD100 = '#61c2a2',
  EMERALD50 = '#D8EEE7',
  GREY100 = '#B6BCC6',
  Grey50 = '#ECF0F9',
  WHITE100 = '#ffffff',
  BLACK100 = 'black',
}

export type Color = keyof typeof ColorMap;
