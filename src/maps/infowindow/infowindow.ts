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

import { LatLng } from "../coordinates/latlng";
import { MVCObject } from "../event/mvcobject";

export class InfoWindow_ extends MVCObject implements google.maps.InfoWindow {
  public close = vi.fn().mockImplementation((): void => null);
  public focus = vi.fn();
  public getContent = vi
    .fn()
    .mockImplementation((): string | Element | null | Text | undefined => {
      return vi.fn() as unknown as Element;
    });
  public getHeaderContent = vi
    .fn()
    .mockImplementation((): string | Element | null | Text | undefined => {
      return vi.fn() as unknown as Element;
    });
  public getHeaderDisabled = vi
    .fn()
    .mockImplementation((): boolean | undefined => true);
  public getPosition = vi
    .fn()
    .mockImplementation(
      (): google.maps.LatLng | null | undefined =>
        new LatLng({ lat: 0, lng: 0 })
    );
  public getZIndex = vi
    .fn()
    .mockImplementation((): number | null | undefined => 1);
  public isOpen = false;
  public open = vi
    .fn()
    .mockImplementation(
      (
        options?:
          | google.maps.InfoWindowOpenOptions
          | google.maps.Map
          | google.maps.StreetViewPanorama,
        anchor?: google.maps.MVCObject
      ): void => null
    );
  public setContent = vi
    .fn()
    .mockImplementation((content?: string | Element | Text): void => null);
  public setHeaderContent = vi
    .fn()
    .mockImplementation((headerContent: string | Element | Text) => {});
  public setHeaderDisabled = vi
    .fn()
    .mockImplementation((headerDisabled: boolean) => {});
  public setOptions = vi
    .fn()
    .mockImplementation(
      (options?: google.maps.InfoWindowOptions): void => null
    );
  public setPosition = vi
    .fn()
    .mockImplementation(
      (position?: google.maps.LatLng | google.maps.LatLngLiteral): void => null
    );
  public setZIndex = vi
    .fn()
    .mockImplementation((zIndex?: number): void => null);
  constructor(opts?: google.maps.InfoWindowOptions) {
    super();
  }
}
