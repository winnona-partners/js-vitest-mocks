'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const importLibrary = vi.fn((name) => __awaiter(void 0, void 0, void 0, function* () {
    switch (name) {
        case "core": {
            const { ControlPosition, event, LatLng, LatLngAltitude, LatLngBounds, MapsNetworkError, MapsNetworkErrorEndpoint, MapsRequestError, MapsServerError, MVCArray, MVCObject, Point, Settings, Size, SymbolPath, UnitSystem, } = google.maps;
            return {
                ControlPosition,
                event,
                LatLng,
                LatLngAltitude,
                LatLngBounds,
                MapsNetworkError,
                MapsNetworkErrorEndpoint,
                MapsRequestError,
                MapsServerError,
                MVCArray,
                MVCObject,
                Point,
                Settings,
                Size,
                SymbolPath,
                UnitSystem,
            };
        }
        case "maps": {
            const { BicyclingLayer, Circle, Data, FeatureType, GroundOverlay, ImageMapType, InfoWindow, KmlLayer, KmlLayerStatus, Map, MapTypeControlStyle, MapTypeId, MapTypeRegistry, MaxZoomService, MaxZoomStatus, OverlayView, Polygon, Polyline, Rectangle, RenderingType, StrokePosition, StyledMapType, TrafficLayer, TransitLayer, WebGLOverlayView, } = google.maps;
            return {
                BicyclingLayer,
                Circle,
                Data,
                FeatureType,
                GroundOverlay,
                ImageMapType,
                InfoWindow,
                KmlLayer,
                KmlLayerStatus,
                Map,
                MapTypeControlStyle,
                MapTypeId,
                MapTypeRegistry,
                MaxZoomService,
                MaxZoomStatus,
                OverlayView,
                Polygon,
                Polyline,
                Rectangle,
                RenderingType,
                StrokePosition,
                StyledMapType,
                TrafficLayer,
                TransitLayer,
                WebGLOverlayView,
            };
        }
        case "places":
            return google.maps.places;
        case "geocoding": {
            const { Geocoder, GeocoderLocationType, GeocoderStatus } = google.maps;
            return {
                Geocoder,
                GeocoderLocationType,
                GeocoderStatus,
            };
        }
        case "routes": {
            const { DirectionsRenderer, DirectionsService, DirectionsStatus, DistanceMatrixElementStatus, DistanceMatrixService, DistanceMatrixStatus, TrafficModel, TransitMode, TransitRoutePreference, TravelMode, VehicleType, } = google.maps;
            return {
                DirectionsRenderer,
                DirectionsService,
                DirectionsStatus,
                DistanceMatrixElementStatus,
                DistanceMatrixService,
                DistanceMatrixStatus,
                TrafficModel,
                TransitMode,
                TransitRoutePreference,
                TravelMode,
                VehicleType,
            };
        }
        case "marker": {
            const { Animation, CollisionBehavior, Marker, marker: { AdvancedMarkerClickEvent, AdvancedMarkerElement, PinElement }, } = google.maps;
            return {
                AdvancedMarkerClickEvent,
                AdvancedMarkerElement,
                Animation,
                CollisionBehavior,
                Marker,
                PinElement,
            };
        }
        case "geometry": {
            return google.maps.geometry;
        }
        case "elevation": {
            const { ElevationService, ElevationStatus } = google.maps;
            return {
                ElevationService,
                ElevationStatus,
            };
        }
        case "streetView": {
            const { InfoWindow, OverlayView, StreetViewCoverageLayer, StreetViewPanorama, StreetViewPreference, StreetViewService, StreetViewSource, StreetViewStatus, } = google.maps;
            return {
                InfoWindow,
                OverlayView,
                StreetViewCoverageLayer,
                StreetViewPanorama,
                StreetViewPreference,
                StreetViewService,
                StreetViewSource,
                StreetViewStatus,
            };
        }
        case "journeySharing": {
            return google.maps.journeySharing;
        }
        case "drawing": {
            return google.maps.drawing;
        }
        case "visualization": {
            return google.maps.visualization;
        }
    }
    throw new TypeError(`unknown library name: ${name}`);
}));

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
class LatLng {
    constructor(a, b, c) {
        this.curLat = 0;
        this.curLng = 0;
        this.equals = vi
            .fn()
            .mockImplementation((other) => false);
        this.lat = vi.fn().mockImplementation(() => this.curLat);
        this.lng = vi.fn().mockImplementation(() => this.curLng);
        this.toString = vi.fn().mockImplementation(() => "");
        this.toUrlValue = vi
            .fn()
            .mockImplementation((precision) => "");
        this.toJSON = vi.fn().mockImplementation(() => {
            return { lat: this.lat, lng: this.lng };
        });
        if (typeof a === "object") {
            this.curLat = a.lat;
            this.curLng = a.lng;
        }
        else {
            this.curLat = a;
            this.curLng = b;
        }
    }
}
class LatLngBounds {
    constructor(sw, ne) {
        this.contains = vi
            .fn()
            .mockImplementation((latLng) => false);
        this.equals = vi
            .fn()
            .mockImplementation((other) => false);
        this.extend = vi
            .fn()
            .mockImplementation((point) => this);
        this.getCenter = vi
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getNorthEast = vi
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getSouthWest = vi
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.intersects = vi
            .fn()
            .mockImplementation((other) => false);
        this.isEmpty = vi.fn().mockImplementation(() => false);
        this.toJSON = vi
            .fn()
            .mockImplementation(() => {
            return { east: 0, north: 0, south: 0, west: 0 };
        });
        this.toSpan = vi
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.toString = vi.fn().mockImplementation(() => "");
        this.toUrlValue = vi
            .fn()
            .mockImplementation((precision) => "");
        this.union = vi
            .fn()
            .mockImplementation((other) => this);
    }
}

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
class LatLngAltitude {
    constructor(value, noClampNoWrap) {
        this.lat = 0;
        this.lng = 0;
        this.altitude = 0;
        this.equals = vi
            .fn()
            .mockImplementation((other) => false);
        this.toJSON = vi
            .fn()
            .mockImplementation(() => {
            return { lat: 0, lng: 0, altitude: 0 };
        });
    }
}

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
/* eslint-disable @typescript-eslint/no-explicit-any */
const MOCKS_REGISTRY = new Map();
function get(item) {
    return MOCKS_REGISTRY.get(item.name) || [];
}
function clearAll() {
    MOCKS_REGISTRY.clear();
}
// Signature to require at least one item
function clear(item, ...rest) {
    for (const ctr of [item, ...rest]) {
        MOCKS_REGISTRY.delete(ctr.name);
    }
}
const mockInstances = {
    get,
    clear,
    clearAll,
};
/* Internal */
function __registerMockInstance(ctr, instance) {
    const existing = MOCKS_REGISTRY.get(ctr.name) || [];
    MOCKS_REGISTRY.set(ctr.name, [...existing, instance]);
}

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
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
class PlacesService {
    constructor(attrContainer) {
        this.findPlaceFromPhoneNumber = vi.fn().mockImplementation((request, callback) => { });
        this.findPlaceFromQuery = vi.fn().mockImplementation((request, callback) => { });
        this.getDetails = vi.fn().mockImplementation((request, callback) => { });
        this.nearbySearch = vi.fn().mockImplementation((request, callback) => { });
        this.textSearch = vi.fn().mockImplementation((request, callback) => { });
        __registerMockInstance(this.constructor, this);
    }
}

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
/* eslint-disable @typescript-eslint/no-unused-vars */
class DirectionsService {
    constructor() {
        this.route = vi.fn().mockImplementation((request, callback) => Promise.resolve({
            request,
            routes: [],
            available_travel_modes: [],
            geocoded_waypoints: [],
        }));
        __registerMockInstance(this.constructor, this);
    }
}

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
class Geocoder {
    constructor() {
        this.geocode = vi.fn().mockImplementation((request, callback) => Promise.resolve({
            results: [],
        }));
        __registerMockInstance(this.constructor, this);
    }
}

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
const MapsEventListener = {
    remove: vi.fn(),
};
class event {
}
event.addDomListener = vi.fn(() => MapsEventListener);
event.addDomListenerOnce = vi.fn(() => MapsEventListener);
event.addListener = vi.fn(() => MapsEventListener);
event.addListenerOnce = vi.fn(() => MapsEventListener);
event.clearInstanceListeners = vi.fn(() => null);
event.clearListeners = vi.fn(() => null);
event.hasListeners = vi.fn(() => false);
event.removeListener = vi.fn(() => null);
event.trigger = vi.fn(() => null);

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
/* eslint-disable @typescript-eslint/no-explicit-any */
class MVCObject {
    constructor() {
        this.addListener = vi
            .fn()
            .mockImplementation((eventName, handler) => MapsEventListener);
        this.bindTo = vi
            .fn()
            .mockImplementation((key, target, targetKey, noNotify) => null);
        this.changed = vi.fn().mockImplementation((key) => null);
        this.get = vi.fn().mockImplementation((key) => { });
        this.notify = vi.fn().mockImplementation((key) => null);
        this.set = vi
            .fn()
            .mockImplementation((key, value) => null);
        this.setValues = vi.fn().mockImplementation((values) => null);
        this.unbind = vi.fn().mockImplementation((key) => null);
        this.unbindAll = vi.fn().mockImplementation(() => null);
        const ctor = this.constructor;
        __registerMockInstance(ctor, this);
        if (ctor.mockInstances === undefined) {
            ctor.mockInstances = [];
        }
        if (MVCObject._mockClasses === undefined) {
            MVCObject._mockClasses = [];
        }
        ctor.mockInstances.push(this);
        MVCObject._mockClasses.push(ctor);
    }
}
MVCObject._mockClasses = [];
MVCObject.mockInstances = [];
// if running a test that supports afterEach, then we will cleanup the instances
// automatically at the end of each test.
if (typeof afterEach === "function") {
    afterEach(() => {
        if (MVCObject._mockClasses) {
            for (const ctor of MVCObject._mockClasses) {
                ctor.mockInstances = undefined;
            }
        }
        MVCObject._mockClasses = undefined;
    });
}

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
class Autocomplete extends MVCObject {
    constructor(inputField, opts) {
        super();
        this.getBounds = vi
            .fn()
            .mockImplementation(() => null);
        this.getFields = vi.fn().mockImplementation(() => []);
        this.getPlace = vi
            .fn()
            .mockImplementation(() => ({ name: "" }));
        this.setBounds = vi
            .fn()
            .mockImplementation((bounds) => { });
        this.setComponentRestrictions = vi
            .fn()
            .mockImplementation((restrictions) => { });
        this.setFields = vi
            .fn()
            .mockImplementation((fields) => { });
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => { });
        this.setTypes = vi.fn().mockImplementation((types) => { });
    }
}

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
/* eslint-disable @typescript-eslint/no-unused-vars */
class MaxZoomService {
    constructor() {
        this.getMaxZoomAtLatLng = vi.fn().mockImplementation((latLng, callback) => 
        // @ts-expect-error
        Promise.resolve({
            zoom: 0,
        }));
        __registerMockInstance(this.constructor, this);
    }
}

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
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
class AutocompleteService {
    constructor() {
        this.getPlacePredictions = vi.fn().mockImplementation((request, callback) => Promise.resolve({
            predictions: [],
        }));
        this.getQueryPredictions = vi
            .fn()
            .mockImplementation((request, callback) => { });
        __registerMockInstance(this.constructor, this);
    }
}

/**
 * Copyright 2023 Google LLC. All Rights Reserved.
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
class AutocompleteSessionToken {
    constructor() {
        __registerMockInstance(this.constructor, this);
    }
}

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
/* eslint-disable @typescript-eslint/no-unused-vars */
class DistanceMatrixService {
    constructor() {
        this.getDistanceMatrix = vi.fn().mockImplementation((request, callback) => Promise.resolve({
            destinationAddresses: [],
            originAddresses: [],
            rows: [],
        }));
        __registerMockInstance(this.constructor, this);
    }
}

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
/* eslint-disable @typescript-eslint/no-unused-vars */
class ElevationService {
    constructor() {
        this.getElevationAlongPath = vi.fn().mockImplementation((request, callback) => Promise.resolve({
            results: [],
        }));
        this.getElevationForLocations = vi.fn().mockImplementation((request, callback) => Promise.resolve({
            results: [],
        }));
        __registerMockInstance(this.constructor, this);
    }
}

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
class StreetViewPanorama extends MVCObject {
    constructor() {
        super(...arguments);
        this.focus = vi.fn().mockImplementation(() => { });
        this.controls = [];
        this.getLinks = vi
            .fn()
            .mockImplementation(() => null);
        this.getLocation = vi
            .fn()
            .mockImplementation(() => ({
            description: null,
            latLng: new LatLng(1, 1),
            pano: "pano",
            shortDescription: null,
        }));
        this.getMotionTracking = vi.fn().mockImplementation(() => false);
        this.getPano = vi.fn().mockImplementation(() => "pano");
        this.getPhotographerPov = vi
            .fn()
            .mockImplementation(() => ({ heading: 0, pitch: 0 }));
        this.getPosition = vi
            .fn()
            .mockImplementation(() => new LatLng(1, 1));
        this.getPov = vi
            .fn()
            .mockImplementation(() => ({ heading: 0, pitch: 0 }));
        this.getStatus = vi
            .fn()
            .mockImplementation(() => google.maps.StreetViewStatus.OK);
        this.getVisible = vi.fn().mockImplementation(() => true);
        this.getZoom = vi.fn().mockImplementation(() => 0);
        this.registerPanoProvider = vi
            .fn()
            .mockImplementation((provider, opt_options) => null);
        this.setLinks = vi
            .fn()
            .mockImplementation((inks) => null);
        this.setMotionTracking = vi
            .fn()
            .mockImplementation((motionTracking) => null);
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => null);
        this.setPano = vi.fn().mockImplementation((pano) => null);
        this.setPosition = vi
            .fn()
            .mockImplementation((latLng) => null);
        this.setPov = vi
            .fn()
            .mockImplementation((pov) => null);
        this.setVisible = vi
            .fn()
            .mockImplementation((flag) => null);
        this.setZoom = vi.fn().mockImplementation((zoom) => null);
    }
}

class FeatureLayer {
    constructor() {
        this.featureType = google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1;
        this.isAvailable = false;
        this.style = null;
        this.addListener = vi.fn((eventName, handler) => MapsEventListener);
    }
}

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
const ControlPosition = {
    TOP_LEFT: 1,
    TOP_CENTER: 2,
    TOP: 2,
    TOP_RIGHT: 3,
    LEFT_CENTER: 4,
    LEFT_TOP: 5,
    LEFT: 5,
    LEFT_BOTTOM: 6,
    RIGHT_TOP: 7,
    RIGHT: 7,
    RIGHT_CENTER: 8,
    RIGHT_BOTTOM: 9,
    BOTTOM_LEFT: 10,
    BOTTOM_CENTER: 11,
    BOTTOM: 11,
    BOTTOM_RIGHT: 12,
    CENTER: 13,
    BLOCK_START_INLINE_START: 14,
    BLOCK_START_INLINE_CENTER: 15,
    BLOCK_START_INLINE_END: 16,
    INLINE_START_BLOCK_CENTER: 17,
    INLINE_START_BLOCK_START: 18,
    INLINE_START_BLOCK_END: 19,
    INLINE_END_BLOCK_START: 20,
    INLINE_END_BLOCK_CENTER: 21,
    INLINE_END_BLOCK_END: 22,
    BLOCK_END_INLINE_START: 23,
    BLOCK_END_INLINE_CENTER: 24,
    BLOCK_END_INLINE_END: 25,
};

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
class Map_ extends MVCObject {
    constructor(mapDiv, opts) {
        super();
        this.getDatasetFeatureLayer = vi.fn((datasetId) => new FeatureLayer());
        this.getFeatureLayer = vi.fn((featureType) => new FeatureLayer());
        this.getMapCapabilities = vi.fn(() => {
            return {
                isAdvancedMarkersAvailable: false,
                isDataDrivenStylingAvailable: false,
            };
        });
        this.fitBounds = vi
            .fn()
            .mockImplementation((bounds, padding) => {
            return null;
        });
        this.getBounds = vi.fn().mockImplementation(() => new LatLngBounds());
        this.getCenter = vi
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getClickableIcons = vi.fn().mockImplementation(() => false);
        this.getDiv = vi.fn().mockImplementation(() => {
            return vi.fn();
        });
        this.getHeading = vi.fn().mockImplementation(() => 0);
        this.getHeadingInteractionEnabled = vi
            .fn()
            .mockImplementation(() => null);
        this.getMapTypeId = vi
            .fn()
            .mockImplementation(() => google.maps.MapTypeId.ROADMAP);
        this.getProjection = vi
            .fn()
            .mockImplementation(() => vi.fn());
        this.getRenderingType = vi
            .fn()
            .mockImplementation(() => google.maps.RenderingType.RASTER);
        this.getStreetView = vi
            .fn()
            .mockImplementation(() => new StreetViewPanorama());
        this.getTilt = vi.fn().mockImplementation(() => 0);
        this.getTiltInteractionEnabled = vi
            .fn()
            .mockImplementation(() => null);
        this.getZoom = vi.fn().mockImplementation(() => 0);
        this.moveCamera = vi
            .fn()
            .mockImplementation((cameraOptions) => {
            return null;
        });
        this.panBy = vi.fn().mockImplementation((x, y) => {
            return null;
        });
        this.panTo = vi
            .fn()
            .mockImplementation((latLng) => {
            return null;
        });
        this.panToBounds = vi
            .fn()
            .mockImplementation((latLngBounds, padding) => {
            return null;
        });
        this.setCenter = vi
            .fn()
            .mockImplementation((latlng) => {
            return null;
        });
        this.setHeading = vi.fn().mockImplementation((heading) => {
            return null;
        });
        this.setHeadingInteractionEnabled = vi
            .fn()
            .mockImplementation((headingInteractionEnabled) => { });
        this.setMapTypeId = vi
            .fn()
            .mockImplementation((mapTypeId) => {
            return null;
        });
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => {
            return null;
        });
        this.setRenderingType = vi
            .fn()
            .mockImplementation((renderingType) => { });
        this.setStreetView = vi
            .fn()
            .mockImplementation((panorama) => {
            return null;
        });
        this.setTilt = vi.fn().mockImplementation((tilt) => {
            return null;
        });
        this.setTiltInteractionEnabled = vi
            .fn()
            .mockImplementation((tiltInteractionEnabled) => { });
        this.setZoom = vi.fn().mockImplementation((zoom) => {
            return null;
        });
        this.setClickableIcons = vi
            .fn()
            .mockImplementation((clickable) => {
            return null;
        });
        this.data = new google.maps.Data();
        this.controls = [];
        for (const [_, value] of Object.entries(ControlPosition)) {
            this.controls[value] = new google.maps.MVCArray();
        }
        this.mapTypes = new google.maps.MVCObject();
        this.overlayMapTypes = new google.maps.MVCArray();
    }
}

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
class Circle extends MVCObject {
    constructor(opt) {
        super();
        this.getBounds = vi
            .fn()
            .mockImplementation(() => new LatLngBounds());
        this.getCenter = vi
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getDraggable = vi.fn().mockImplementation(() => true);
        this.getEditable = vi.fn().mockImplementation(() => true);
        this.getMap = vi
            .fn()
            .mockImplementation(() => new Map_(null));
        this.getRadius = vi.fn().mockImplementation(() => 0);
        this.getVisible = vi.fn().mockImplementation(() => true);
        this.setCenter = vi
            .fn()
            .mockImplementation((center) => { });
        this.setDraggable = vi.fn().mockImplementation((draggable) => { });
        this.setEditable = vi.fn().mockImplementation((editable) => { });
        this.setMap = vi.fn().mockImplementation((map) => { });
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => { });
        this.setRadius = vi.fn().mockImplementation((radius) => { });
        this.setVisible = vi.fn().mockImplementation((visible) => { });
    }
}

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
class Feature extends MVCObject {
    constructor(options) {
        super();
        this.forEachProperty = vi
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
        this.getGeometry = vi
            .fn()
            .mockImplementation(() => {
            return null;
        });
        this.getId = vi
            .fn()
            .mockImplementation(() => {
            return "1";
        });
        this.getProperty = vi.fn().mockImplementation((name) => {
            return undefined;
        });
        this.removeProperty = vi.fn().mockImplementation((name) => {
            return null;
        });
        this.setGeometry = vi
            .fn()
            .mockImplementation((newGeometry) => {
            return null;
        });
        this.setProperty = vi
            .fn()
            .mockImplementation((name, newValue) => {
            return null;
        });
        this.toGeoJson = vi
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
    }
}

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
class DataPolygon extends MVCObject {
    constructor(elements) {
        super();
        this.forEachLatLng = vi
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
        this.getArray = vi
            .fn()
            .mockImplementation(() => []);
        this.getAt = vi
            .fn()
            .mockImplementation(() => null);
        this.getLength = vi.fn().mockImplementation(() => 0);
        this.getType = vi.fn().mockImplementation(() => "MultiPolygon");
    }
}

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
class Data extends MVCObject {
    constructor(opt) {
        super();
        this.add = vi
            .fn()
            .mockImplementation((feature) => {
            return null;
        });
        this.addGeoJson = vi
            .fn()
            .mockImplementation((geoJson, options) => {
            return [];
        });
        this.contains = vi
            .fn()
            .mockImplementation((feature) => {
            return false;
        });
        this.forEach = vi
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
        this.getControlPosition = vi
            .fn()
            .mockImplementation(() => {
            return ControlPosition.BOTTOM_CENTER;
        });
        this.getControls = vi.fn().mockImplementation(() => {
            return null;
        });
        this.getDrawingMode = vi.fn().mockImplementation(() => {
            return null;
        });
        this.getFeatureById = vi
            .fn()
            .mockImplementation((id) => {
            return undefined;
        });
        this.getMap = vi.fn().mockImplementation(() => {
            return null;
        });
        this.getStyle = vi
            .fn()
            .mockImplementation(() => {
            return null;
        });
        this.loadGeoJson = vi
            .fn()
            .mockImplementation((url, options, callback) => {
            return null;
        });
        this.overrideStyle = vi
            .fn()
            .mockImplementation((feature, style) => {
            return null;
        });
        this.remove = vi
            .fn()
            .mockImplementation((feature) => {
            return null;
        });
        this.revertStyle = vi
            .fn()
            .mockImplementation((feature) => {
            return null;
        });
        this.setControlPosition = vi
            .fn()
            .mockImplementation((controlPosition) => {
            return null;
        });
        this.setControls = vi
            .fn()
            .mockImplementation((controls) => {
            return null;
        });
        this.setDrawingMode = vi
            .fn()
            .mockImplementation((drawingMode) => {
            return null;
        });
        this.setMap = vi
            .fn()
            .mockImplementation((map) => {
            return null;
        });
        this.setStyle = vi
            .fn()
            .mockImplementation((style) => {
            return null;
        });
        this.toGeoJson = vi
            .fn()
            .mockImplementation((callback) => {
            return null;
        });
    }
}
Data.Feature = vi
    .fn()
    .mockImplementation((options) => new Feature(options));
Data.Polygon = vi
    .fn()
    .mockImplementation((elements) => new DataPolygon(elements));

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
class MVCArray extends MVCObject {
    constructor(array) {
        super();
        this.clear = vi.fn().mockImplementation(() => { });
        this.forEach = vi
            .fn()
            .mockImplementation((callback) => { });
        this.getArray = vi.fn().mockImplementation(() => []);
        this.getAt = vi.fn().mockImplementation((i) => ({}));
        this.getLength = vi.fn().mockImplementation(() => 0);
        this.insertAt = vi
            .fn()
            .mockImplementation((i, elem) => { });
        this.pop = vi.fn().mockImplementation(() => ({}));
        this.push = vi.fn().mockImplementation((elem) => 0);
        this.removeAt = vi.fn().mockImplementation((i) => ({}));
        this.setAt = vi.fn().mockImplementation((i, elem) => { });
    }
}

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
class Point {
    constructor(x, y) {
        this.toString = vi.fn().mockImplementation(() => {
            return "";
        });
        this.x = x;
        this.y = y;
    }
    equals(other) {
        return other.x === this.x && other.y === this.y;
    }
}

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
class VisibleRegion extends MVCObject {
}

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
class MapCanvasProjection extends MVCObject {
    constructor() {
        super(...arguments);
        this.fromContainerPixelToLatLng = vi
            .fn()
            .mockImplementation((pixel, nowrap) => new LatLng(0, 0));
        this.fromDivPixelToLatLng = vi
            .fn()
            .mockImplementation((pixel, nowrap) => new LatLng(0, 0));
        this.fromLatLngToContainerPixel = vi
            .fn()
            .mockImplementation((latLng) => new Point(0, 0));
        this.fromLatLngToDivPixel = vi
            .fn()
            .mockImplementation((latLng) => new Point(0, 0));
        this.getVisibleRegion = vi
            .fn()
            .mockImplementation(() => new VisibleRegion());
        this.getWorldWidth = vi.fn().mockImplementation(() => 0);
    }
}

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
class MapPanes {
}

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
class Marker extends MVCObject {
    constructor(opts) {
        super();
        this.getAnimation = vi
            .fn()
            .mockImplementation(() => null);
        this.getClickable = vi.fn().mockImplementation(() => null);
        this.getCursor = vi
            .fn()
            .mockImplementation(() => null);
        this.getDraggable = vi
            .fn()
            .mockImplementation(() => null);
        this.getIcon = vi
            .fn()
            .mockImplementation(() => null);
        this.getLabel = vi
            .fn()
            .mockImplementation(() => null);
        this.getMap = vi
            .fn()
            .mockImplementation(() => null);
        this.getOpacity = vi
            .fn()
            .mockImplementation(() => null);
        this.getPosition = vi
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getShape = vi
            .fn()
            .mockImplementation(() => null);
        this.getTitle = vi
            .fn()
            .mockImplementation(() => null);
        this.getVisible = vi.fn().mockImplementation(() => null);
        this.getZIndex = vi
            .fn()
            .mockImplementation(() => null);
        this.setAnimation = vi
            .fn()
            .mockImplementation((animation) => { });
        this.setClickable = vi
            .fn()
            .mockImplementation((flag) => { });
        this.setCursor = vi
            .fn()
            .mockImplementation((cursor) => { });
        this.setDraggable = vi
            .fn()
            .mockImplementation((flag) => { });
        this.setIcon = vi
            .fn()
            .mockImplementation((icon) => { });
        this.setLabel = vi
            .fn()
            .mockImplementation((label) => { });
        this.setMap = vi
            .fn()
            .mockImplementation((map) => { });
        this.setOpacity = vi
            .fn()
            .mockImplementation((opacity) => { });
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => { });
        this.setPosition = vi
            .fn()
            .mockImplementation((latlng) => { });
        this.setShape = vi
            .fn()
            .mockImplementation((shape) => { });
        this.setTitle = vi
            .fn()
            .mockImplementation((title) => { });
        this.setVisible = vi
            .fn()
            .mockImplementation((visible) => { });
        this.setZIndex = vi
            .fn()
            .mockImplementation((zIndex) => { });
        this.addListener = vi
            .fn()
            .mockImplementation((eventName, handler) => MapsEventListener);
    }
}

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
class OverlayView extends MVCObject {
    constructor() {
        super(...arguments);
        this.draw = vi.fn();
        this.getMap = vi
            .fn()
            .mockImplementation(() => new Map_(null, {}));
        this.getPanes = vi
            .fn()
            .mockImplementation(() => new MapPanes());
        this.getProjection = vi
            .fn()
            .mockImplementation(() => new MapCanvasProjection());
        this.onAdd = vi.fn();
        this.onRemove = vi.fn();
        this.setMap = vi
            .fn()
            .mockImplementation((map) => null);
    }
}

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
class KmlLayer extends MVCObject {
    constructor(opts) {
        super();
        this.getDefaultViewport = vi
            .fn()
            .mockImplementation(() => null);
        this.getMap = vi
            .fn()
            .mockImplementation(() => null);
        this.getMetadata = vi
            .fn()
            .mockImplementation(() => null);
        this.getStatus = vi
            .fn()
            .mockImplementation(() => null);
        this.getUrl = vi
            .fn()
            .mockImplementation(() => null);
        this.getZIndex = vi
            .fn()
            .mockImplementation(() => null);
        this.setMap = vi
            .fn()
            .mockImplementation((map) => {
            return;
        });
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => {
            return;
        });
        this.setUrl = vi.fn().mockImplementation((url) => {
            return;
        });
        this.setZIndex = vi.fn().mockImplementation((zIndex) => {
            return;
        });
        this.addListener = vi
            .fn()
            .mockImplementation((eventName, handler) => MapsEventListener);
    }
}

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
class Polygon extends MVCObject {
    constructor(opts) {
        super();
        this.getDraggable = vi.fn().mockImplementation(() => false);
        this.getEditable = vi.fn().mockImplementation(() => false);
        this.getMap = vi
            .fn()
            .mockImplementation(() => null);
        this.getPath = vi
            .fn()
            .mockImplementation(() => new MVCArray());
        this.getPaths = vi
            .fn()
            .mockImplementation(() => ({}));
        this.getVisible = vi.fn().mockImplementation(() => false);
        this.setDraggable = vi
            .fn()
            .mockImplementation((draggable) => { });
        this.setEditable = vi
            .fn()
            .mockImplementation((editable) => { });
        this.setMap = vi
            .fn()
            .mockImplementation((map) => { });
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => { });
        this.setPath = vi
            .fn()
            .mockImplementation((path) => { });
        this.setPaths = vi
            .fn()
            .mockImplementation((paths) => { });
        this.setVisible = vi
            .fn()
            .mockImplementation((visible) => { });
    }
}

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
class Polyline extends MVCObject {
    constructor(opts) {
        super();
        this.getDraggable = vi.fn().mockImplementation(() => false);
        this.getEditable = vi.fn().mockImplementation(() => false);
        this.getMap = vi
            .fn()
            .mockImplementation(() => null);
        this.getPath = vi
            .fn()
            .mockImplementation(() => this.path);
        this.getVisible = vi.fn().mockImplementation(() => false);
        this.setDraggable = vi
            .fn()
            .mockImplementation((draggable) => { });
        this.setEditable = vi
            .fn()
            .mockImplementation((editable) => { });
        this.setMap = vi
            .fn()
            .mockImplementation((map) => { });
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => { });
        this.setPath = vi
            .fn()
            .mockImplementation((path) => { });
        this.setVisible = vi
            .fn()
            .mockImplementation((visible) => { });
        this.path = new MVCArray();
    }
}

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
class Rectangle extends MVCObject {
    constructor(opt) {
        super();
        this.getBounds = vi.fn(() => null);
        this.getDraggable = vi.fn(() => true);
        this.getEditable = vi.fn(() => true);
        this.getMap = vi.fn(() => new Map_(null));
        this.getVisible = vi.fn(() => true);
        this.setBounds = vi.fn((bounds) => { });
        this.setDraggable = vi.fn((draggable) => { });
        this.setEditable = vi.fn((editable) => { });
        this.setMap = vi.fn((map) => { });
        this.setOptions = vi.fn((options) => { });
        this.setVisible = vi.fn((visible) => { });
    }
}

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
class SearchBox extends MVCObject {
    constructor() {
        super(...arguments);
        this.getBounds = vi
            .fn()
            .mockImplementation(() => null);
        this.getPlaces = vi
            .fn()
            .mockImplementation(() => [
            { name: "" },
        ]);
        this.setBounds = vi
            .fn()
            .mockImplementation((bounds) => null);
    }
}

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
class Size {
    constructor(width, height, widthUnit, heightUnit) {
        this.toString = vi.fn().mockImplementation(() => {
            return "";
        });
        this.width = width;
        this.height = height;
    }
    equals(other) {
        return other.height === this.height && other.width === this.width;
    }
}

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
class StreetViewCoverageLayer extends MVCObject {
    constructor() {
        super(...arguments);
        this.getMap = vi
            .fn()
            .mockImplementation(() => null);
        this.setMap = vi
            .fn()
            .mockImplementation((map) => null);
    }
}

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
var StreetViewPreference;
(function (StreetViewPreference) {
    StreetViewPreference["BEST"] = "best";
    StreetViewPreference["NEAREST"] = "nearest";
})(StreetViewPreference || (StreetViewPreference = {}));
var StreetViewSource;
(function (StreetViewSource) {
    StreetViewSource["DEFAULT"] = "default";
    StreetViewSource["OUTDOOR"] = "outdoor";
})(StreetViewSource || (StreetViewSource = {}));
var StreetViewStatus;
(function (StreetViewStatus) {
    StreetViewStatus["OK"] = "OK";
    StreetViewStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    StreetViewStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
})(StreetViewStatus || (StreetViewStatus = {}));

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
class StreetViewService {
    constructor() {
        this.getPanorama = vi
            .fn()
            .mockImplementation((request, callback) => {
            return Promise.resolve({
                data: {
                    copyright: "copyright",
                    imageDate: "imageDate",
                    links: [],
                    location: {
                        description: "description",
                        pano: "123",
                        shortDescription: null,
                        latLng: new LatLng(1, 1),
                    },
                    tiles: {
                        centerHeading: 0,
                        getTileUrl: () => "tileUrl",
                        tileSize: new Size(1, 1),
                        worldSize: new Size(1, 1),
                    },
                },
            });
        });
        __registerMockInstance(this.constructor, this);
    }
}

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
var MapTypeId;
(function (MapTypeId) {
    MapTypeId["HYBRID"] = "hybrid";
    MapTypeId["ROADMAP"] = "roadmap";
    MapTypeId["SATELLITE"] = "satellite";
    MapTypeId["TERRAIN"] = "terrain";
})(MapTypeId || (MapTypeId = {}));

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
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
class InfoWindow_ extends MVCObject {
    constructor(opts) {
        super();
        this.close = vi.fn().mockImplementation(() => null);
        this.focus = vi.fn();
        this.getContent = vi
            .fn()
            .mockImplementation(() => {
            return vi.fn();
        });
        this.getHeaderContent = vi
            .fn()
            .mockImplementation(() => {
            return vi.fn();
        });
        this.getHeaderDisabled = vi
            .fn()
            .mockImplementation(() => true);
        this.getPosition = vi
            .fn()
            .mockImplementation(() => new LatLng({ lat: 0, lng: 0 }));
        this.getZIndex = vi
            .fn()
            .mockImplementation(() => 1);
        this.isOpen = false;
        this.open = vi
            .fn()
            .mockImplementation((options, anchor) => null);
        this.setContent = vi
            .fn()
            .mockImplementation((content) => null);
        this.setHeaderContent = vi
            .fn()
            .mockImplementation((headerContent) => { });
        this.setHeaderDisabled = vi
            .fn()
            .mockImplementation((headerDisabled) => { });
        this.setOptions = vi
            .fn()
            .mockImplementation((options) => null);
        this.setPosition = vi
            .fn()
            .mockImplementation((position) => null);
        this.setZIndex = vi
            .fn()
            .mockImplementation((zIndex) => null);
    }
}

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
/* eslint-disable @typescript-eslint/no-unused-vars */
class AdvancedMarkerElement extends HTMLElement {
    constructor(options) {
        var _a, _b, _c;
        super();
        this.addListener = vi
            .fn()
            .mockImplementation((eventName, handler) => MapsEventListener);
        this.element = document.createElement("div");
        __registerMockInstance(this.constructor, this);
        this.map = (_a = options === null || options === void 0 ? void 0 : options.map) !== null && _a !== void 0 ? _a : null;
        this.position = (options === null || options === void 0 ? void 0 : options.position)
            ? new google.maps.LatLng(options.position)
            : null;
        this.zIndex = (_b = options === null || options === void 0 ? void 0 : options.zIndex) !== null && _b !== void 0 ? _b : 0;
        this.content = (_c = options === null || options === void 0 ? void 0 : options.content) !== null && _c !== void 0 ? _c : null;
    }
}
customElements.define("gmp-advanced-marker", AdvancedMarkerElement);

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
/* eslint-disable @typescript-eslint/no-unused-vars */
class PinElement extends HTMLElement {
    constructor(options) {
        super();
        this.addListener = vi
            .fn()
            .mockImplementation((eventName, handler) => MapsEventListener);
        __registerMockInstance(this.constructor, this);
    }
}
customElements.define("gmp-pin", PinElement);

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
/* eslint-disable @typescript-eslint/no-explicit-any */
const initialize = function () {
    mockInstances.clearAll();
    importLibrary.mockClear();
    global.google = {
        maps: {
            importLibrary,
            ImageMapType: vi.fn(),
            Marker: Marker,
            Map: Map_,
            Data: Data,
            Point: Point,
            Size: Size,
            MVCObject: MVCObject,
            MVCArray: MVCArray,
            MapTypeId: MapTypeId,
            ControlPosition: ControlPosition,
            LatLng: LatLng,
            LatLngAltitude: LatLngAltitude,
            LatLngBounds: LatLngBounds,
            StreetViewPanorama: StreetViewPanorama,
            StreetViewCoverageLayer: StreetViewCoverageLayer,
            StreetViewService: StreetViewService,
            StreetViewPreference: StreetViewPreference,
            StreetViewSource: StreetViewSource,
            StreetViewStatus: StreetViewStatus,
            event: event,
            places: {
                Autocomplete: Autocomplete,
                SearchBox: SearchBox,
                PlacesService,
                AutocompleteService,
                AutocompleteSessionToken,
            },
            Geocoder,
            Polygon: Polygon,
            Polyline: Polyline,
            Circle: Circle,
            Rectangle: Rectangle,
            OverlayView: OverlayView,
            KmlLayer: KmlLayer,
            MapCanvasProjection: MapCanvasProjection,
            MapPanes: MapPanes,
            VisibleRegion: VisibleRegion,
            InfoWindow: InfoWindow_,
            MaxZoomService,
            DirectionsService,
            DistanceMatrixService,
            ElevationService,
            marker: {
                PinElement,
                AdvancedMarkerElement,
            },
            FeatureLayer,
            drawing: {}, // FIXME: missing implementation (#521)
            geometry: {
                spherical: {
                    computeDistanceBetween: vi.fn(),
                },
            }, // FIXME: missing implementation (#299)
            journeySharing: {}, // FIXME: missing implementation
            visualization: {}, // FIXME: missing implementation
        },
    };
};

exports.AdvancedMarkerElement = AdvancedMarkerElement;
exports.Autocomplete = Autocomplete;
exports.AutocompleteService = AutocompleteService;
exports.AutocompleteSessionToken = AutocompleteSessionToken;
exports.Circle = Circle;
exports.Data = Data;
exports.DataPolygon = DataPolygon;
exports.DirectionsService = DirectionsService;
exports.DistanceMatrixService = DistanceMatrixService;
exports.ElevationService = ElevationService;
exports.Feature = Feature;
exports.FeatureLayer = FeatureLayer;
exports.Geocoder = Geocoder;
exports.InfoWindow = InfoWindow_;
exports.KmlLayer = KmlLayer;
exports.LatLng = LatLng;
exports.LatLngAltitude = LatLngAltitude;
exports.LatLngBounds = LatLngBounds;
exports.MVCArray = MVCArray;
exports.MVCObject = MVCObject;
exports.Map = Map_;
exports.MapCanvasProjection = MapCanvasProjection;
exports.MapPanes = MapPanes;
exports.Marker = Marker;
exports.MaxZoomService = MaxZoomService;
exports.OverlayView = OverlayView;
exports.PinElement = PinElement;
exports.PlacesService = PlacesService;
exports.Point = Point;
exports.Polygon = Polygon;
exports.Polyline = Polyline;
exports.Rectangle = Rectangle;
exports.SearchBox = SearchBox;
exports.Size = Size;
exports.StreetViewCoverageLayer = StreetViewCoverageLayer;
exports.StreetViewPanorama = StreetViewPanorama;
exports.StreetViewService = StreetViewService;
exports.VisibleRegion = VisibleRegion;
exports.event = event;
exports.importLibrary = importLibrary;
exports.initialize = initialize;
exports.mockInstances = mockInstances;
//# sourceMappingURL=index.js.map
