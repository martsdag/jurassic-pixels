<template>
  <div class="h-[600px] w-full">
    <VMap :zoom ref="map">
      <VMapTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <VMapMarker v-for="(item, index) in locations" :latlng="item.latLng" :key="index">
        <VMapDefaultIcon />
      </VMapMarker>
    </VMap>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { VMap, VMapTileLayer, VMapMarker, VMapDefaultIcon } from 'vue-map-ui';
import 'leaflet/dist/leaflet.css';
import dinosaursData from '@/assets/data/data.json';
import type { Dinosaur } from '@/types/dinosaur';

const zoom = ref(2);

const dinosaurs = ref<Dinosaur[]>(dinosaursData);

const locations = computed(() => {
  const map = new Map<string, { latLng: [number, number]; dinos: Dinosaur[]; locationName: string }>();

  dinosaurs.value.forEach((dino) => {
    if (dino.coordinates) {
      const { lat, lng } = dino.coordinates;
      const key = `${lat},${lng}`;

      if (!map.has(key)) {
        map.set(key, { latLng: [lat, lng], dinos: [], locationName: dino.location?.[0] || 'Unknown' });
      }
      map.get(key)!.dinos.push(dino);
    }
  });

  return Array.from(map.values());
});
</script>
