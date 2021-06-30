let url = 'https://api.openweathermap.org/data/2.5/weather?q=Bishkek&lang=ru&appid=f5d9234be1bfda95ccf0f5b0a787d029'
let url1 = "http://api.weatherunlocked.com/api/forecast/42.87,74.59?app_id=999207aa&app_key=1e1afdbf0250f7f24b35028b7a0b77cb"
fetch(url)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
            console.log(data);
            let $name = document.querySelector('.name')
            $name.insertAdjacentHTML('beforeend',`<h1 style="text-align: center;font-size: 50px;">${data.name}</h1>`)
            data.weather.map(function(array){
                document.querySelector('.temp').insertAdjacentHTML('beforeend',` <img src="https://openweathermap.org/img/wn/${array.icon}@2x.png" alt="" >`)
            })
            document.querySelector('.temp').insertAdjacentHTML('beforeend',`<p style='color: black;opacity: .4'>${Math.floor(data.main.temp_max-273.15)} °C | ${Math.floor((data.main.temp_min - 273,15) * 9/5 + 32)} °F </p> `)
            document.querySelector('.desc').insertAdjacentHTML('beforeend',`<b class='datee' style='font-size: 30px;color: white;opacity: .8;'>${new Date().toLocaleDateString()} </b> <br> `)       
            data.weather.map(function(item){
                document.querySelector('.name').insertAdjacentHTML('beforeend',`<b class='descbb' style='font-size: 30px;color: white;bottom:40%'>${item.description} `)
                document.querySelector('.desc').insertAdjacentHTML('beforeend',`<b class='descb' style='font-size: 30px;color: white;opacity: .8;bottom:40%'>${item.description} `)
               // document.querySelector('.temp').insertAdjacentHTML('beforeend',` <img src="https://openweathermap.org/img/wn/${item.icon}@2x.png" alt="" width="120px" height="120px">`)     
            })
            document.querySelector('.desc2').insertAdjacentHTML('beforeend',`<b>Скорость Ветра: ${Math.floor(data.wind.speed/0.62137)} км/час </b> <br>`)
            document.querySelector('.desc2').insertAdjacentHTML('beforeend',`<b>Влажность: ${data.main.humidity} %`)
        })

fetch(url1)
    .then(function(resp){
        return resp.json()
    })
        .then(function(dat){
            console.log(dat);
            document.querySelector('.date').insertAdjacentHTML('beforeend',`<b> ${dat.Days[1].date} `)
            document.querySelector('.min').insertAdjacentHTML('beforeend',`<b style='font-size:30px;color:white;opacity:.8'> ${dat.Days[1].temp_min_c} °C`)
            document.querySelector('.max').insertAdjacentHTML('beforeend',`<b style='font-size:30px;color:white;opacity:.8'> ${dat.Days[1].temp_max_c} °C`)
            document.querySelector('.date').insertAdjacentHTML('beforeend',`<b> ${dat.Days[2].date} `)
            document.querySelector('.min').insertAdjacentHTML('beforeend',`<b style='font-size:30px;color:white;opacity:.8'> ${dat.Days[2].temp_min_c} °C`)
            document.querySelector('.max').insertAdjacentHTML('beforeend',`<b style='font-size:30px;color:white;opacity:.8'> ${dat.Days[2].temp_max_c} °C`)
            document.querySelector('.date').insertAdjacentHTML('beforeend',`<b> ${dat.Days[3].date} `)
            document.querySelector('.min').insertAdjacentHTML('beforeend',`<b style='font-size:30px;color:white;opacity:.8'> ${dat.Days[3].temp_min_c} °C`)
            document.querySelector('.max').insertAdjacentHTML('beforeend',`<b style='font-size:30px;color:white;opacity:.8'> ${dat.Days[3].temp_max_c} °C`)
            document.querySelector('.date').insertAdjacentHTML('beforeend',`<b> ${dat.Days[4].date} `)
            document.querySelector('.min').insertAdjacentHTML('beforeend',`<b style='font-size:30px;color:white;opacity:.8'> ${dat.Days[4].temp_min_c} °C`)
            document.querySelector('.max').insertAdjacentHTML('beforeend',`<b style='font-size:30px;color:white;opacity:.8'> ${dat.Days[4].temp_max_c} °C`)
            document.querySelector('.six').insertAdjacentHTML('beforeend',`<b> &nbsp; ${dat.Days[0].Timeframes[0].time/100}:00</b>`)
            document.querySelector('.six').insertAdjacentHTML('beforeend',`<img style='align-self:center;' src='pic/${dat.Days[0].Timeframes[0].wx_icon}'  width='70px' height='70px'>`)
            document.querySelector('.six').insertAdjacentHTML('beforeend',`<p >${dat.Days[0].Timeframes[0].temp_c} °C`)
            document.querySelector('.nine').insertAdjacentHTML('beforeend',`<b> &nbsp; ${dat.Days[0].Timeframes[1].time/100}:00</b>`)
            document.querySelector('.nine').insertAdjacentHTML('beforeend',`<img style='align-self:center;' src='pic/${dat.Days[0].Timeframes[1].wx_icon}' width='70px' height='70px'>`)
            document.querySelector('.nine').insertAdjacentHTML('beforeend',`<p >${dat.Days[0].Timeframes[1].temp_c} °C`)
            document.querySelector('.twelve').insertAdjacentHTML('beforeend',`<b> &nbsp;${dat.Days[0].Timeframes[2].time/100}:00</b>`)
            document.querySelector('.twelve').insertAdjacentHTML('beforeend',`<img style='align-self:center;' src='pic/${dat.Days[0].Timeframes[2].wx_icon}'  width='70px' height='70px'>`)
            document.querySelector('.twelve').insertAdjacentHTML('beforeend',`<p >${dat.Days[0].Timeframes[2].temp_c} °C`)
            document.querySelector('.three').insertAdjacentHTML('beforeend',`<b> &nbsp;${dat.Days[0].Timeframes[3].time/100}:00</b>`)
            document.querySelector('.three').insertAdjacentHTML('beforeend',`<img style='align-self:center;' src='pic/${dat.Days[0].Timeframes[3].wx_icon}'  width='70px' height='70px'>`)
            document.querySelector('.three').insertAdjacentHTML('beforeend',`<p>${dat.Days[0].Timeframes[3].temp_c} °C`)
            document.querySelector('.sixpm').insertAdjacentHTML('beforeend',`<b> &nbsp;${dat.Days[0].Timeframes[4].time/100}:00</b>`)
            document.querySelector('.sixpm').insertAdjacentHTML('beforeend',`<img style='align-self:center;' src='pic/${dat.Days[0].Timeframes[4].wx_icon}'  width='70px' height='70px'>`)
            document.querySelector('.sixpm').insertAdjacentHTML('beforeend',`<p>${dat.Days[0].Timeframes[4].temp_c} °C`)
            document.querySelector('.ninepm').insertAdjacentHTML('beforeend',`<b> &nbsp;${dat.Days[0].Timeframes[5].time/100}:00</b>`)
            document.querySelector('.ninepm').insertAdjacentHTML('beforeend',`<img style='align-self:center;' src='pic/${dat.Days[0].Timeframes[5].wx_icon}'  width='70px' height='70px'>`)
            document.querySelector('.ninepm').insertAdjacentHTML('beforeend',`<p>${dat.Days[0].Timeframes[5].temp_c} °C`)



            // document.querySelector('.mon').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'> ${dat.Days[1].date}`)
            // document.querySelector('.mon').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;'> ${dat.Days[1].date.slice(0,2)} июня`)
            // document.querySelector('.mon').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'> ${dat.Days[1].temp_max_c} °C`)
            // document.querySelector('.mon').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'> ${dat.Days[1].temp_min_c} °C`)
            document.querySelector('.tue').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;'> ${dat.Days[2].date.slice(1,2)} июля`)
            document.querySelector('.tue').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8;font-weight: normal;'> ${dat.Days[2].temp_max_c} °C`)
            document.querySelector('.tue').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8;font-weight: normal;'> ${dat.Days[2].temp_min_c} °C`)
            document.querySelector('.wed').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;'> ${dat.Days[3].date.slice(1,2)} июля`)
            document.querySelector('.wed').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8;font-weight: normal;'> ${dat.Days[3].temp_max_c} °C`)
            document.querySelector('.wed').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8;font-weight: normal;'> ${dat.Days[3].temp_min_c} °C`)
            document.querySelector('.thu').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;'> ${dat.Days[4].date.slice(1,2)} июля`)
            document.querySelector('.thu').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8;font-weight: normal;'> ${dat.Days[4].temp_max_c} °C`)
            document.querySelector('.thu').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8;font-weight: normal;'> ${dat.Days[4].temp_min_c} °C`)
            document.querySelector('.fri').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;'> ${dat.Days[5].date.slice(1,2)} июля`)
            document.querySelector('.fri').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8;font-weight: normal;'> ${dat.Days[5].temp_max_c} °C`)
            document.querySelector('.fri').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8;font-weight: normal;'> ${dat.Days[5].temp_min_c} °C`)
            // function weekday(){
            //     if (new Date().getDay() == 1 ){
            //         document.querySelector('.mon').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'>Понедельник`)
            //     }if (new Date().getDay() == 2 ){
            //         document.querySelector('.tue').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'>Вторник`)
            //     }if (new Date().getDay() == 3 ){
            //         document.querySelector('.wed').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'>Среда`)
            //     }if (new Date().getDay()+1 == 4 ){
            //         document.querySelector('.thu').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'>Четверг`)
            //     }if (new Date().getDay() == 5 ){
            //         document.querySelector('.fri').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'>Пятница`)
            //     }if (new Date().getDay() == 6 ){
            //         document.querySelector('.sat').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'>Суббота`)
            //     }if (new Date().getDay() == 0 ){
            //         document.querySelector('.sun').insertAdjacentHTML('beforeend',`<b style='font-size:25px;color:white;opacity:.8'>Воскресенье`)
            //     }            
            // }
            // weekday()    
        })


        
        