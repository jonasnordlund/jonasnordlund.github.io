var app = new Vue({
  el: '#app',
  data: {
    sensors: [
      { name: 'Medium Format (Large)', ratio: 0.64 },
      { name: 'Medium Format (Small)', ratio: 0.79 },
      { name: 'Full Frame', ratio: 1.0 },
      { name: 'APS-H', ratio: 1.3 },
      { name: 'APS-C', ratio: 1.5 },
      { name: 'APS-C (Canon)', ratio: 1.6 },
      { name: 'Micro 4/3', ratio: 2 },
      { name: '1"', ratio: 2.7 },
      { name: '2/3"', ratio: 3.9 },
      { name: '1/1.7"', ratio: 4.5 },
      { name: '1/1.8"', ratio: 4.8 },
      { name: '1/2.3"', ratio: 5.6 },
      { name: '1/2.5"', ratio: 6.0 },
    ],
    cameras: [
      { name: 'Sony A Series', ratio: 1.0 },
      { name: 'Sony Alpha Series', ratio: 1.5 },
      { name: 'Fujifilm X Series', ratio: 1.5 }
    ],
    focalLength: 0,
    aperture: 0,
    selectedSourceRatio: 1.0,
    selectedTargetRatio: 1.0
  },
  computed: {
    convertedFocalLength: function () { return (this.focalLength * this.selectedSourceRatio / this.selectedTargetRatio).toFixed(2) },
    convertedAperture: function () { return (this.aperture * this.selectedSourceRatio / this.selectedTargetRatio).toFixed(2) }
  }
})
