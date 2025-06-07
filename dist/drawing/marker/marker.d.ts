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
import { MVCObject } from "../../maps/event/mvcobject";
export declare class Marker extends MVCObject implements google.maps.Marker {
    static readonly MAX_ZINDEX: number;
    constructor(opts?: google.maps.MarkerOptions | null);
    getAnimation: import("vitest").Mock<(...args: any[]) => any>;
    getClickable: import("vitest").Mock<(...args: any[]) => any>;
    getCursor: import("vitest").Mock<(...args: any[]) => any>;
    getDraggable: import("vitest").Mock<(...args: any[]) => any>;
    getIcon: import("vitest").Mock<(...args: any[]) => any>;
    getLabel: import("vitest").Mock<(...args: any[]) => any>;
    getMap: import("vitest").Mock<(...args: any[]) => any>;
    getOpacity: import("vitest").Mock<(...args: any[]) => any>;
    getPosition: import("vitest").Mock<(...args: any[]) => any>;
    getShape: import("vitest").Mock<(...args: any[]) => any>;
    getTitle: import("vitest").Mock<(...args: any[]) => any>;
    getVisible: import("vitest").Mock<(...args: any[]) => any>;
    getZIndex: import("vitest").Mock<(...args: any[]) => any>;
    setAnimation: import("vitest").Mock<(...args: any[]) => any>;
    setClickable: import("vitest").Mock<(...args: any[]) => any>;
    setCursor: import("vitest").Mock<(...args: any[]) => any>;
    setDraggable: import("vitest").Mock<(...args: any[]) => any>;
    setIcon: import("vitest").Mock<(...args: any[]) => any>;
    setLabel: import("vitest").Mock<(...args: any[]) => any>;
    setMap: import("vitest").Mock<(...args: any[]) => any>;
    setOpacity: import("vitest").Mock<(...args: any[]) => any>;
    setOptions: import("vitest").Mock<(...args: any[]) => any>;
    setPosition: import("vitest").Mock<(...args: any[]) => any>;
    setShape: import("vitest").Mock<(...args: any[]) => any>;
    setTitle: import("vitest").Mock<(...args: any[]) => any>;
    setVisible: import("vitest").Mock<(...args: any[]) => any>;
    setZIndex: import("vitest").Mock<(...args: any[]) => any>;
    addListener: import("vitest").Mock<(...args: any[]) => any>;
}
