const { naver } = window;

export default function initMap(data) {
  const tag = 'MapContainer ->'
  const campsites = data;
  console.log(tag, campsites);

  // Map
  const container = document.getElementById("cp-map");
  const Location = new naver.maps.LatLng(37.5074838, 127.034238);
  const mapOptions = {
      center: Location,
      zoom: 17, //지도의 초기 줌 레벨
      minZoom: 7, //지도의 최소 줌 레벨
      zoomControl: false, //줌 컨트롤의 표시 여부
  };
  const map = new naver.maps.Map(container, mapOptions);
  const marker = new naver.maps.Marker({
    position: Location,
    map: map,
  });  

  const contentString = [
      '<div class="iw_inner">',
      '   <h3>Check Point</h3>',
      '</div>'
  ].join('');
  
  const infowindow = new naver.maps.InfoWindow({
    content: contentString,
    maxWidth: 120,
    backgroundColor: "#eee",
    borderColor: "#333",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(10, 5),
    anchorSkew: true,
    anchorColor: "#eee",
    pixelOffset: new naver.maps.Point(5, -5)
  });

  naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
  });  

}