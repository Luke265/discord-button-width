import { CharMap, PadMap } from './map';

export const enum Align {
  LEFT = 'start',
  RIGHT = 'end',
  CENTER = 'center',
}

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

  padStringToWidth(str: string, width: number, align = Align.LEFT) {
    const currentWidth = this.getStringWidth(str);
    if (currentWidth >= width) {
      return str;
    }
    const padWidth = width - currentWidth;
    switch (align) {
      case Align.RIGHT:
        return this.pad(padWidth) + str;
      case Align.CENTER:
        const pad = this.pad((width - currentWidth) / 2);
        return pad + str + pad;
    }
    return str + this.pad(padWidth);
  }

  pad(width: number) {
    let result = '';
    let remainingWidth = width;
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
