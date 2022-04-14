ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.62],
    zoom: 13,
  });

  var myPlacemark = new ymaps.Placemark(
    [55.758457, 37.600821],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/svg/MyIcon.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
