const { naver } = window;
const tag = 'maps ->'
export default async function initMaps(data){
  const container = document.getElementById("cp-map");
  const mapOptions = {
      center: new naver.maps.LatLng(37.5074838, 127.034238),
      zoom: 12
  };
  const map = new naver.maps.Map(container, mapOptions);

  let areaArr = await data;
  let markers = new Array();
  let infoWindows = new Array();
  console.log(tag, areaArr);
  
  if(areaArr){
    // area 데이터가 존재 할 경우 forEach문으로 marker와 infoWindow 추출
    areaArr.forEach((item) => {
      let content = `
      <div style="width: 100px;text-align:center;padding:10px">
        <b>${item.camp_title}</b>
        <br>
        - From 네이버 지도 - 
      </div>
    `

      let marker = new naver.maps.Marker({
        map: map,
        title: item.camp_title,
        position: new naver.maps.LatLng(item.x, item.y)
      })

      let infoWindow = new naver.maps.InfoWindow({
        content: content
      })

      markers.push(marker);
      infoWindows.push(infoWindow);
    })

    // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
    function getClickHandler(seq) {
      return function(e) {
          let marker = markers[seq],
              infoWindow = infoWindows[seq];

          if (infoWindow.getMap()) {
              infoWindow.close();
          } else {
              infoWindow.open(map, marker);
          }
      }
    }
    for (let i=0, ii=markers.length; i<ii; i++) {
      naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
    }

  }

  console.log('markers', markers);
  
}