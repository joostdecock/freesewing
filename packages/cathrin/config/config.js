export default {
  name: "cathrin",
  measurements: [
    "underbust",
    "naturalWaist",
    "hipsCircumference",
    "naturalWaistToUnderbust",
    "naturalWaistToHip"
  ],
  dependencies: {
    panel1: "panels",
    panel2: "panels",
    panel3: "panels",
    panel4: "panels",
    panel5: "panels",
    panel6: "panels",
    panels: "base"
  },
  inject: {
    panel1: "panels",
    panel2: "panels",
    panel3: "panels",
    panel4: "panels",
    panel5: "panels",
    panel6: "panels",
    panels: "base"
  },
  hide: [ "panels", "base" ],
  options: {
    // Lists
    panels: {
        list: [11, 13],
        dflt: 13
    },

    // Percentages
    waistReduction: { pct: 10, min:  2, max:  20 },
    backOpening:    { pct:  4, min:  3, max:  10 },
    backRise:       { pct: 15, min:  1, max:  25 },
    backDrop:       { pct:  2, min:  0, max:   5 },
    frontRise:      { pct:  4, min:  0, max:   8 },
    frontDrop:      { pct:  5, min:  0, max:  10 },
    hipRise:        { pct:  5, min:  0, max:  15 },
  }
};