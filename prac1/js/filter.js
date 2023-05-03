//filter와 map의 가장 큰 차이가 있는 게 바로 반환 결과이다.
//map의 경우 return 값을 지정하지 않았을 경우, 강제로 undefined를 넣어주는 반면,
//filter의 경우 return 값을 지정하지 않거나, 지정한 조건에 모든 값이 해당하지 않을 경우 빈 배열이 반환된다.
//filter+map
async function onlyBaby(){
    const container = document.getElementById('container');

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }


    fetch('./data/data.json')
        .then((response)=>{
            return response.json();

        })

        .then((data)=>{
            {data.filter((datas)=> datas.state=='아기사자').map((x)=>{
                const element = document.createElement("div");
                element.id='students';
                element.innerHTML = 
                `제 이름은 ${x.name}이고, 전 ${x.state} 입니다!
                좋아하는 과일은 ${x.fruit}입니다~`;

                container.appendChild(element);


                
            })
            
        
    }})}