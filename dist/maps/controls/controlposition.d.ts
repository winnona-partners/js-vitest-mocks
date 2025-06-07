/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export declare const ControlPosition: {
    readonly TOP_LEFT: 1;
    readonly TOP_CENTER: 2;
    readonly TOP: 2;
    readonly TOP_RIGHT: 3;
    readonly LEFT_CENTER: 4;
    readonly LEFT_TOP: 5;
    readonly LEFT: 5;
    readonly LEFT_BOTTOM: 6;
    readonly RIGHT_TOP: 7;
    readonly RIGHT: 7;
    readonly RIGHT_CENTER: 8;
    readonly RIGHT_BOTTOM: 9;
    readonly BOTTOM_LEFT: 10;
    readonly BOTTOM_CENTER: 11;
    readonly BOTTOM: 11;
    readonly BOTTOM_RIGHT: 12;
    readonly CENTER: 13;
    readonly BLOCK_START_INLINE_START: 14;
    readonly BLOCK_START_INLINE_CENTER: 15;
    readonly BLOCK_START_INLINE_END: 16;
    readonly INLINE_START_BLOCK_CENTER: 17;
    readonly INLINE_START_BLOCK_START: 18;
    readonly INLINE_START_BLOCK_END: 19;
    readonly INLINE_END_BLOCK_START: 20;
    readonly INLINE_END_BLOCK_CENTER: 21;
    readonly INLINE_END_BLOCK_END: 22;
    readonly BLOCK_END_INLINE_START: 23;
    readonly BLOCK_END_INLINE_CENTER: 24;
    readonly BLOCK_END_INLINE_END: 25;
};
export type ControlPosition = (typeof ControlPosition)[keyof typeof ControlPosition];
