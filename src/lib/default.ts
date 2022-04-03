import { Align, DiscordButtonWidthUtil } from './discord-button-util';
import { CHAR_MAP, PAD_MAP } from './constants';

const defaultUtil = new DiscordButtonWidthUtil(CHAR_MAP, PAD_MAP);

export function getStringWidth(str: string) {
  return defaultUtil.getStringWidth(str);
}

export function padStringToWidth(
  str: string,
  width: number,
  align = Align.LEFT
) {
  return defaultUtil.padStringToWidth(str, width, align);
}
