import * as React from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import { type ISvgProps } from '@/types/svg-types';

export const Settings = (props: ISvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      viewBox="0 0 28 28"
      fill={props.withLinearGradient ? '#7CD0FC' : props.color}
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M17.206 7.467c0-.886-.753-1.606-1.679-1.606-.925 0-1.678.72-1.678 1.606 0 .885.753 1.605 1.678 1.605.926 0 1.68-.72 1.68-1.605Zm1.684 0c0 1.773-1.508 3.216-3.363 3.216-1.854 0-3.362-1.443-3.362-3.216 0-1.774 1.508-3.217 3.362-3.217 1.855 0 3.363 1.443 3.363 3.217Zm0 17.672h1.604l.16-.002c.276-.006.531-.012.723.154.303.264.873 1.199.873 1.308 0 .048-.015.151-.061.151H8.81c-.046 0-.061-.103-.061-.15 0-.11.587-1.028.873-1.309.155-.151.43-.151.722-.151H12.165l-.003-9.6c0-.044.11-.058.16-.058.114 0 1.092.545 1.368.835.173.182.166.424.16.685-.002.053-.004.106-.004.16l.003 7.977h3.357V14.677c0-.444-.377-.806-.842-.806h-5.808c-.054 0-.108.001-.16.003-.276.006-.531.011-.723-.155-.303-.263-.873-1.198-.873-1.307 0-.048.015-.152.061-.152h7.503c1.393 0 2.526 1.084 2.526 2.417v10.462Z"
        clipRule="evenodd"
        stroke={props.withLinearGradient ? 'url(#a)' : props.color}
        strokeWidth={0.25}
      />

      <Path
        fillRule="evenodd"
        d="M17.206 7.467c0-.886-.753-1.606-1.679-1.606-.925 0-1.678.72-1.678 1.606 0 .885.753 1.605 1.678 1.605.926 0 1.68-.72 1.68-1.605Zm1.684 0c0 1.773-1.508 3.216-3.363 3.216-1.854 0-3.362-1.443-3.362-3.216 0-1.774 1.508-3.217 3.362-3.217 1.855 0 3.363 1.443 3.363 3.217Zm0 17.672h1.604l.16-.002c.276-.006.531-.012.723.154.303.264.873 1.199.873 1.308 0 .048-.015.151-.061.151H8.81c-.046 0-.061-.103-.061-.15 0-.11.587-1.028.873-1.309.155-.151.43-.151.722-.151H12.165l-.003-9.6c0-.044.11-.058.16-.058.114 0 1.092.545 1.368.835.173.182.166.424.16.685-.002.053-.004.106-.004.16l.003 7.977h3.357V14.677c0-.444-.377-.806-.842-.806h-5.808c-.054 0-.108.001-.16.003-.276.006-.531.011-.723-.155-.303-.263-.873-1.198-.873-1.307 0-.048.015-.152.061-.152h7.503c1.393 0 2.526 1.084 2.526 2.417v10.462Z"
        clipRule="evenodd"
        stroke={props.withLinearGradient ? 'url(#b)' : props.color}
        strokeWidth={0.25}
      />

      {props.withLinearGradient && (
        <Defs>
          <LinearGradient
            id="a"
            x1={4.875}
            x2={25.685}
            y1={3.25}
            y2={12.576}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7CD0FC" />
            <Stop offset={1} stopColor="#A935F8" />
          </LinearGradient>
          <LinearGradient
            id="b"
            x1={10.292}
            x2={17.404}
            y1={15.708}
            y2={18.651}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7CD0FC" />
            <Stop offset={1} stopColor="#A935F8" />
          </LinearGradient>
        </Defs>
      )}
    </Svg>
  );
};

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.25"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-settings"
>
  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
  <circle cx="12" cy="12" r="3" />
</svg>; */
}
