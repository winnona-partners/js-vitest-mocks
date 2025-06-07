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
import { MVCObject } from "../event/mvcobject";
import { FeatureLayer } from "./featurelayer";
export declare class Map_ extends MVCObject implements google.maps.Map {
    controls: Array<google.maps.MVCArray<HTMLElement>>;
    data: google.maps.Data;
    mapTypes: google.maps.MapTypeRegistry;
    overlayMapTypes: google.maps.MVCArray<google.maps.MapType>;
    getDatasetFeatureLayer: import("vitest").Mock<(datasetId: string) => FeatureLayer>;
    getFeatureLayer: import("vitest").Mock<(featureType: google.maps.FeatureType) => FeatureLayer>;
    getMapCapabilities: import("vitest").Mock<() => {
        isAdvancedMarkersAvailable: boolean;
        isDataDrivenStylingAvailable: boolean;
    }>;
    fitBounds: import("vitest").Mock<(...args: any[]) => any>;
    getBounds: import("vitest").Mock<(...args: any[]) => any>;
    getCenter: import("vitest").Mock<(...args: any[]) => any>;
    getClickableIcons: import("vitest").Mock<(...args: any[]) => any>;
    getDiv: import("vitest").Mock<(...args: any[]) => any>;
    getHeading: import("vitest").Mock<(...args: any[]) => any>;
    getHeadingInteractionEnabled: import("vitest").Mock<(...args: any[]) => any>;
    getMapTypeId: import("vitest").Mock<(...args: any[]) => any>;
    getProjection: import("vitest").Mock<(...args: any[]) => any>;
    getRenderingType: import("vitest").Mock<(...args: any[]) => any>;
    getStreetView: import("vitest").Mock<(...args: any[]) => any>;
    getTilt: import("vitest").Mock<(...args: any[]) => any>;
    getTiltInteractionEnabled: import("vitest").Mock<(...args: any[]) => any>;
    getZoom: import("vitest").Mock<(...args: any[]) => any>;
    moveCamera: import("vitest").Mock<(...args: any[]) => any>;
    panBy: import("vitest").Mock<(...args: any[]) => any>;
    panTo: import("vitest").Mock<(...args: any[]) => any>;
    panToBounds: import("vitest").Mock<(...args: any[]) => any>;
    setCenter: import("vitest").Mock<(...args: any[]) => any>;
    setHeading: import("vitest").Mock<(...args: any[]) => any>;
    setHeadingInteractionEnabled: import("vitest").Mock<(...args: any[]) => any>;
    setMapTypeId: import("vitest").Mock<(...args: any[]) => any>;
    setOptions: import("vitest").Mock<(...args: any[]) => any>;
    setRenderingType: import("vitest").Mock<(...args: any[]) => any>;
    setStreetView: import("vitest").Mock<(...args: any[]) => any>;
    setTilt: import("vitest").Mock<(...args: any[]) => any>;
    setTiltInteractionEnabled: import("vitest").Mock<(...args: any[]) => any>;
    setZoom: import("vitest").Mock<(...args: any[]) => any>;
    setClickableIcons: import("vitest").Mock<(...args: any[]) => any>;
    constructor(mapDiv: Element | null, opts?: google.maps.MapOptions);
}
