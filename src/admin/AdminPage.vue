<template>
  <div>
    <h1 class="text-2xl uppercase p-4">Admin Page</h1>
    <button @click="importOregonRoads" class="border rounded-xl px-2">
      import Oregon
    </button>
  </div>
</template>

<script>
import slugify from 'slugify';
import { db } from '../firebase';
import orData from './data/orroads.json';

export default {
  name: 'AdminPage',

  methods: {
    importOregonRoads() {
      orData.CCTVInventoryRequest.forEach((el) => {
        const cam = {};

        cam.name = el['device-name'];
        cam.slug = slugify(el['device-name'], {
          remove: /[*+~.()'"!/#:@]/g,
          lower: true,
        });
        cam.latitude = el.latitude.toString();
        cam.longitude = el.longitude.toString();
        cam.route = el['route-id'];
        cam.routeSlug = slugify(el['route-id'], {
          remove: /[*+~.()'"!/#:@]/g,
          lower: true,
        });
        if (el.milepoint) {
          cam.milepoint = el.milepoint;
        }
        cam.imageURL = el['cctv-url'];
        cam.description = el['cctv-other'];

        db.collection('cams')
          .doc('oregon')
          .collection('roads')
          .add({
            ...cam,
          });
      });
    },
  },
};
</script>
