const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const batteryReducer = batch =>
  batch.reduce((total, battery) => total + battery);

const totalBatteries = batteryReducer(batteryBatches);
