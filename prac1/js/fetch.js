async function fetchData(){ 
    const container = document.getElementById('container');

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }


    fetch('./data/data.json')
        .then((response)=>{
            return response.json();
        })

        .then((data)=>{
            console.log(data);

            // 만약 map함수를 사용하지 않으면?
            // data[0], data[1], data[2]... 개별적으로 접근해서 값을 받아와야함

            //map 함수 사용하면 배열 내부를 순회하면서 각 배열을 리턴해줌
            {data.map((i)=>{
                const element = document.createElement("div");
                element.id='students';
                element.innerHTML = 
                `제 이름은 ${i.name}이고, 전 ${i.state} 입니다!
                좋아하는 과일은 ${i.fruit}입니다~`;


                const container = document.getElementById("container");
                container.appendChild(element);
            })}
        })
    }



//fetch 함수의 리턴값 확인하기
const fetched = fetch('./data/data.json');
console.log(fetched);
