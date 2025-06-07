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
export declare class LatLng implements google.maps.LatLng {
    constructor(a: google.maps.LatLngLiteral | number, b?: boolean | number, c?: boolean);
    equals: import("vitest").Mock<(...args: any[]) => any>;
    lat: import("vitest").Mock<(...args: any[]) => any>;
    lng: import("vitest").Mock<(...args: any[]) => any>;
    toString: import("vitest").Mock<(...args: any[]) => any>;
    toUrlValue: import("vitest").Mock<(...args: any[]) => any>;
    toJSON: import("vitest").Mock<(...args: any[]) => any>;
}
export declare class LatLngBounds implements google.maps.LatLngBounds {
    constructor(sw?: google.maps.LatLng | google.maps.LatLngLiteral, ne?: google.maps.LatLng | google.maps.LatLngLiteral);
    contains: import("vitest").Mock<(...args: any[]) => any>;
    equals: import("vitest").Mock<(...args: any[]) => any>;
    extend: import("vitest").Mock<(...args: any[]) => any>;
    getCenter: import("vitest").Mock<(...args: any[]) => any>;
    getNorthEast: import("vitest").Mock<(...args: any[]) => any>;
    getSouthWest: import("vitest").Mock<(...args: any[]) => any>;
    intersects: import("vitest").Mock<(...args: any[]) => any>;
    isEmpty: import("vitest").Mock<(...args: any[]) => any>;
    toJSON: import("vitest").Mock<(...args: any[]) => any>;
    toSpan: import("vitest").Mock<(...args: any[]) => any>;
    toString: import("vitest").Mock<(...args: any[]) => any>;
    toUrlValue: import("vitest").Mock<(...args: any[]) => any>;
    union: import("vitest").Mock<(...args: any[]) => any>;
}
