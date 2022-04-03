import { CharMap, PadMap } from './map';

export class DiscordButtonWidthUtil {
  protected defaultCharWidth = 7;
  constructor(
    protected readonly charMap: CharMap,
    protected readonly padMap: PadMap
  ) {}

  getStringWidth(str: string) {
    return str
      .split('')
      .reduce(
        (totalWidth, char) =>
          totalWidth + (this.charMap[char] ?? this.defaultCharWidth),
        0
      );
  }

  padStringToWidth(str: string, width: number) {
    const currentWidth = this.getStringWidth(str);
    if (currentWidth >= width) {
      return str;
    }
    let result = str;
    let remainingWidth = width - currentWidth;
    for (const [char, charWidth] of this.padMap) {
      if (remainingWidth < 0.5) {
        break;
      }
      const repeat = Math.floor(remainingWidth / charWidth);
      if (repeat === 0) {
        continue;
      }
      remainingWidth -= charWidth * repeat;
      result = result.padEnd(result.length + repeat, char);
    }
    return result;
  }
}
