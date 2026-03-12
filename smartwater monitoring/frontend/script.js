async function loadWaterData(){

    try{

        const response = await fetch("http://127.0.0.1:5000/data");

        const data = await response.json();

        let rows = "";

        data.forEach(item =>{

            rows += `
            <tr>
            <td>${item.id}</td>
            <td>${item.building_name}</td>
            <td>${item.usage_liters} L</td>
            <td>${item.timestamp}</td>
            </tr>
            `;

        });

        document.getElementById("tableData").innerHTML = rows;

    }

    catch(error){
        console.log(error);
    }

}

loadWaterData();

setInterval(loadWaterData,5000);