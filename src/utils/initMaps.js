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
      <div class="info_card">
        <strong class="tit_card">${item.camp_title}</strong>
        <hr class="hori_line">
        <p class="txt_card">${item.camp_address}</p>
        <button type="button" class="btn_detail"><span class="screen_out">장소 상세보기</span></button>
      </div>
    `

      let marker = new naver.maps.Marker({
        map: map,
        title: item.camp_title,
        position: new naver.maps.LatLng(item.x, item.y)
      })

      let infoWindow = new naver.maps.InfoWindow({
        content: content,
        borderRadius: "6px",
        borderColor: "#eee"
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
          console.log(markers[seq]);
      }
    }
    for (let i=0, ii=markers.length; i<ii; i++) {
      naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
    }

  }

  console.log('markers', markers);
  
}