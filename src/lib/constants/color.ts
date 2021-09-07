export enum ColorMap {
  EMERALD100 = '#61c2a2',
  EMERALD50 = '#D8EEE7',
  GREY100 = '#70757C',
  GREY70 = '#B6BCC5',
  WHITE100 = '#ffffff',
  BLACK100 = 'black',
  WHITE80 = '#F9F9F9',
}

export type Color = keyof typeof ColorMap;
