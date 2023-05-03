const url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=1&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=%2BGU04ux5xqM7bA505L%2BHskgdUTKJRirdm1ttr6uWYZHnpYzcV6yAPaupKDoAerYLz14sL2tcLJMOWafom9WcNA%3D%3D';
    
async function getData(){

    const fetchResponse = await fetch(url);
    const toJson = await fetchResponse.json();
    const data = toJson.response.body.items.item;

    console.log(fetchResponse);
    console.log(toJson);
    console.log(data);

    {data.map((datas,i)=>{
        const container = document.getElementById('container');
        const list = document.createElement('div');
        list.id = 'list';

        const imageInList = document.createElement('img');
        imageInList.id='image';
        imageInList.src=datas.galWebImageUrl;

        const textInList = document.createElement('span');
        const description = `
        ${i+1}번째 사진
        제목: ${datas.galTitle}
        장소: ${datas.galPhotographyLocation}`;
        textInList.innerText=description;
        

        const detailBtn = document.createElement('button');
        detailBtn.innerText='더보기';

        
        container.appendChild(list);
        list.appendChild(imageInList);
        list.appendChild(textInList);
        list.appendChild(detailBtn);
        
    })}

}