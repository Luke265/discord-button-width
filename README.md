# About
Make your [discord buttons](https://discord.com/developers/docs/interactions/message-components) almost equal width.

<p align="center">
  <img src="https://github.com/Luke265/discord-button-width/blob/master/images/result.png?raw=true" width="830" />
</p>

# Installation

```
npm i discord-button-width
yarn add discord-button-width
pnpm i discord-button-width
```

# Example usage
```ts
import { MessageActionRowComponentResolvable, MessageButtonOptions } from "discord.js";
import { getStringWidth, padStringToWidth } from "discord-button-width";

const buttons: MessageButtonOptions[] = [
    {
        customId: "1",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Eastern White Pine",
    },
    {
        customId: "2",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Daffodil",
    },
    {
        customId: "3",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Dawn Redwood",
    },
    {
        customId: "4",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Dark Opal Basil",
    },
    {
        customId: "5",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Gerber",
    },
    {
        customId: "6",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Incrediball Hydrangea",
    },
    {
        customId: "7",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Pale Purple Coneflower",
    },
    {
        customId: "8",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Lamb's Ear",
    },
    {
        customId: "9",
        type: "BUTTON",
        style: "PRIMARY",
        label: "Nasturtium",
    },
];
const maxWidth = Math.max(
    ...buttons.map((button) => getStringWidth(button.label!))
);
for (const button of buttons) {
    button.label = padStringToWidth(button.label!, maxWidth);
}
message.reply({
    components: [
        {
            type: "ACTION_ROW",
            components: buttons.slice(0, 3) as MessageActionRowComponentResolvable[],
        },
        {
            type: "ACTION_ROW",
            components: buttons.slice(3, 6) as MessageActionRowComponentResolvable[],
        },
        {
            type: "ACTION_ROW",
            components: buttons.slice(6, 9) as MessageActionRowComponentResolvable[],
        },
    ],
});
```

# Supported characters

Currently this library supports these characters: 
```
abcdefghijklmnopqrstuvwxyząčęėįšųūžABCDEFGHIJKLMNOPQRSTUVWXYZĄČĘĖĮŠŲŪŽ0123456789/*-,._?!#@$%^&=<>\\|/\"';:{}[]()`~\u0020
```

If you want to use other characters you can submit a pull request, or extend character map for yourself:

```ts
import { DiscordButtonWidthUtil, CHAR_MAP, PAD_MAP } from "discord-button-width";

const charMap = Object.assign(CHAR_MAP, {
  "A": 9.5
  // character: character width
});
const dcButton = new DiscordButtonWidthUtil(charMap, PAD_MAP);
dcButton.padStringToWidth("Your text", 60);
```