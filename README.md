# Urbica React Mapbox GL Cluster

[![Build Status](https://img.shields.io/circleci/project/github/urbica/react-map-gl-cluster.svg?style=popout)](https://circleci.com/gh/urbica/react-map-gl-cluster)
![npm](https://img.shields.io/npm/dt/@urbica/react-map-gl-cluster.svg)
![npm](https://img.shields.io/npm/v/@urbica/react-map-gl-cluster.svg?style=popout)

Cluster component for [Urbica React Components Library for Mapbox GL JS](https://github.com/urbica/react-map-gl).

## Installation

```shell
npm install mapbox-gl supercluster @urbica/react-map-gl @urbica/react-map-gl-cluster
```

...or if you are using yarn:

```shell
yarn add mapbox-gl supercluster @urbica/react-map-gl @urbica/react-map-gl-cluster
```

## Usage

```jsx
import { randomPoint } from '@turf/random';
import MapGL, { Marker } from '@urbica/react-map-gl';
import Cluster from '@urbica/react-map-gl-cluster';
import 'mapbox-gl/dist/mapbox-gl.css';

const bbox = [-160, -70, 160, 70];
const points = randomPoint(50, { bbox }).features;
points.forEach((point, index) => (point.id = index));

initialState = {
  viewport: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  }
};

const style = {
  width: '20px',
  height: '20px',
  color: '#fff',
  background: '#1978c8',
  borderRadius: '20px',
  textAlign: 'center'
};

<MapGL
  style={{ width: '100%', height: '400px' }}
  mapStyle='mapbox://styles/mapbox/light-v9'
  accessToken={MAPBOX_ACCESS_TOKEN}
  onViewportChange={viewport => setState({ viewport })}
  {...state.viewport}
>
  <Cluster
    radius={40}
    extent={512}
    nodeSize={64}
    component={({ longitude, latitude, pointCount }) => (
      <Marker longitude={longitude} latitude={latitude}>
        <div style={{ ...style, background: '#f28a25' }}>{pointCount}</div>
      </Marker>
    )}
  >
    {points.map(point => (
      <Marker
        key={point.id}
        longitude={point.geometry.coordinates[0]}
        latitude={point.geometry.coordinates[1]}
      >
        <div style={style} />
      </Marker>
    ))}
  </Cluster>
</MapGL>;
```
