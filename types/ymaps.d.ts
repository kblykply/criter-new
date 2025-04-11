declare namespace ymaps {
    class Map {
      constructor(container: string, state: any, options?: any);
      geoObjects: {
        add: (object: any) => void;
        removeAll: () => void;
      };
    }
  
    class Placemark {
      constructor(coords: [number, number], properties?: any, options?: any);
    }
  
    function ready(callback: () => void): void;
  }
  