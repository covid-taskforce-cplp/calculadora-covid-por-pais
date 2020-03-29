var ctx = document.getElementsByClassName("radar");
//Os dados estão desatualizados, deve-se utilizar os dados do Imperial College
var chartGraph= new Chart(ctx, {
    type:'line',
    data:{
        labels:["0 - 9","10 - 19","20 - 29","30 - 39","40 - 49","50 - 59","60 - 69", "70 - 79", "+80"],
        datasets:[{
            label:"Óbitos",
            data:[0,0.2,0.2,0.2,0.4,1.3,3.6,8.0,14.8],
            borderWidth:6,
            borderColor:'rgba(0, 123, 255,0.85)',
            backgroundColor: 'transparent',
        },
        {
            label:"Complicações cardiovasculares",
            data:[0,0.221,0.221,0.221,0.442,1.4365,3.978,8.84,16.354],
            borderWidth:6,
            borderColor:'rgba(240, 52, 52, 0.25)',
            backgroundColor: 'transparent',
        },
        {
            label:"Complicações por diabetes/Hipertensão/Cancer",
            data:[0,0.212,0.212,0.212,0.424,1.378,3.816,8.48,15.688],
            borderWidth:6,
            borderColor:'rgba(255,165,0,0.25)',
            backgroundColor: 'transparent',
        }  
    ]
    },
    options:{
        title: {
        display:true,
        fontSize:20,
        text:"Relação óbitos por faixa etária",
    },
    labels:{
        fontStyle: "Bold"
    }
}
});