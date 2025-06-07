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
import { Map_ } from "../../maps/maps/map";
export declare class Rectangle extends MVCObject implements google.maps.Rectangle {
    constructor(opt?: google.maps.RectangleOptions);
    getBounds: import("vitest").Mock<() => any>;
    getDraggable: import("vitest").Mock<() => boolean>;
    getEditable: import("vitest").Mock<() => boolean>;
    getMap: import("vitest").Mock<() => Map_>;
    getVisible: import("vitest").Mock<() => boolean>;
    setBounds: import("vitest").Mock<(bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral) => void>;
    setDraggable: import("vitest").Mock<(draggable: boolean) => void>;
    setEditable: import("vitest").Mock<(editable: boolean) => void>;
    setMap: import("vitest").Mock<(map: google.maps.Map | null) => void>;
    setOptions: import("vitest").Mock<(options: google.maps.RectangleOptions | null) => void>;
    setVisible: import("vitest").Mock<(visible: boolean) => void>;
}
