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
export declare class Circle extends MVCObject implements google.maps.Circle {
    constructor(opt?: google.maps.CircleOptions);
    getBounds: import("vitest").Mock<(...args: any[]) => any>;
    getCenter: import("vitest").Mock<(...args: any[]) => any>;
    getDraggable: import("vitest").Mock<(...args: any[]) => any>;
    getEditable: import("vitest").Mock<(...args: any[]) => any>;
    getMap: import("vitest").Mock<(...args: any[]) => any>;
    getRadius: import("vitest").Mock<(...args: any[]) => any>;
    getVisible: import("vitest").Mock<(...args: any[]) => any>;
    setCenter: import("vitest").Mock<(...args: any[]) => any>;
    setDraggable: import("vitest").Mock<(...args: any[]) => any>;
    setEditable: import("vitest").Mock<(...args: any[]) => any>;
    setMap: import("vitest").Mock<(...args: any[]) => any>;
    setOptions: import("vitest").Mock<(...args: any[]) => any>;
    setRadius: import("vitest").Mock<(...args: any[]) => any>;
    setVisible: import("vitest").Mock<(...args: any[]) => any>;
}
