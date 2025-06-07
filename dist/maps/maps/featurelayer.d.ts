export declare class FeatureLayer implements google.maps.FeatureLayer {
    featureType: google.maps.FeatureType;
    isAvailable: boolean;
    style: google.maps.FeatureStyleOptions | google.maps.FeatureStyleFunction | null;
    addListener: import("vitest").Mock<(eventName: string, handler: Function) => google.maps.MapsEventListener>;
}
