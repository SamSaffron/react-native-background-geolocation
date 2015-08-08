
var React = require('react-native');
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var BackgroundGeolocationManager = require('NativeModules').RNBackgroundGeolocation;

var BackgroundGeolocation = {
  configure: function(config) {
    BackgroundGeolocationManager.configure(config);
  },
  setConfig: function(config) {
    BackgroundGeolocationManager.setConfig(config);
  },
  on: function(event, callback) {
    RCTDeviceEventEmitter.addListener(event, callback);
  },
  start: function(callback) {
    BackgroundGeolocationManager.start(callback);
  },
  stop: function() {
    BackgroundGeolocationManager.stop();
  },
  onMotionChange: function(callback) {
    BackgroundGeolocationManager.addListener("motionchange", callback);
  },
  onLocation: function(callback) {
    BackgroundGeolocationManager.addListener("location", callback);
  },
  sync: function(callback) {
    BackgroundGeolocation.sync(callback);
  },
  changePace: function(value) {
    BackgroundGeolocationManager.changePace(value);
  },
  finish: function(taskId) {
    BackgroundGeolocationManager.finish(taskId);
  },
  getCurrentPosition: function(callback) {
    BackgroundGeolocationManager.getCurrentPosition(callback);
  }
};

module.exports = BackgroundGeolocation;
