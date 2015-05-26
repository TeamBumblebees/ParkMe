var args = arguments[0] || {};
var w = Ti.UI.currentWindow;

var MapModule = require('ti.map');

var map1 = MapModule.createView({
	userLocation: true,
	mapType: MapModule.NORMAL_TYPE,
	region: {latitude: -37.7207614, longitude: 145.0490559, latitudeDelta: 0.012, longitudeDelta: 0.012 },
	animate: true,
	top: '10%',
	height: '90%',
	width: '100%'	
});


$.map.add(map1);
$.map.open();
