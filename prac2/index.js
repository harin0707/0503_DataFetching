const url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=app%20test&arrange=B&_type=json&serviceKey=%2BGU04ux5xqM7bA505L%2BHskgdUTKJRirdm1ttr6uWYZHnpYzcV6yAPaupKDoAerYLz14sL2tcLJMOWafom9WcNA%3D%3D';
    
async function getData(){
    const fetchResponse = await fetch(url);
    const toJson = await fetchResponse.json();
    const data = await toJson.response.body.items.item;

    {data.map((datas,i)=>{
        const list = document.createElement('div');
        list.id = 'list';

        const image = document.createElement('img');
        image.id='image';
        image.src=datas.galWebImageUrl;

        const title = datas.galTitle;
        const location = datas.galPhotographyLocation;

        const description = `
        ${i+1}번째 사진
        제목: ${title}
        장소: ${location}`;
        list.innerText=description;


        const detailBtn = document.createElement('button');
        detailBtn.innerText='더보기';
        


        container = document.getElementById('container');
        container.appendChild(list);
        list.appendChild(image);
        list.appendChild(detailBtn);
        
    })}

    console.log(fetchResponse);
    console.log(toJson);
    console.log(data);
}

