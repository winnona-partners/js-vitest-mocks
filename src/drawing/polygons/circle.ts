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

import { LatLng, LatLngBounds } from "../../maps/coordinates/latlng";
import { MVCObject } from "../../maps/event/mvcobject";
import { Map_ } from "../../maps/maps/map";

export class Circle extends MVCObject implements google.maps.Circle {
  constructor(opt?: google.maps.CircleOptions) {
    super();
  }
  public getBounds = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLngBounds | null | undefined => new LatLngBounds()
    );
  public getCenter = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new LatLng({ lat: 0, lng: 0 })
    );
  public getDraggable = vi.fn().mockImplementation((): boolean => true);
  public getEditable = vi.fn().mockImplementation((): boolean => true);
  public getMap = vi
    .fn()
    .mockImplementation((): google.maps.Map => new Map_(null));
  public getRadius = vi.fn().mockImplementation((): number => 0);
  public getVisible = vi.fn().mockImplementation((): boolean => true);
  public setCenter = vi
    .fn()
    .mockImplementation(
      (center: google.maps.LatLng | google.maps.LatLngLiteral) => {}
    );
  public setDraggable = vi.fn().mockImplementation((draggable: boolean) => {});
  public setEditable = vi.fn().mockImplementation((editable: boolean) => {});
  public setMap = vi.fn().mockImplementation((map: google.maps.Map) => {});
  public setOptions = vi
    .fn()
    .mockImplementation((options: google.maps.CircleOptions) => {});
  public setRadius = vi.fn().mockImplementation((radius: number) => {});
  public setVisible = vi.fn().mockImplementation((visible: boolean) => {});
}
