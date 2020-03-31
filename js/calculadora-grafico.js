var ctx = document.getElementsByClassName("radar");
//Os dados estão desatualizados, deve-se utilizar os dados do Imperial College
var chartGraph= new Chart(ctx, {
    type:'line',
    data:{
        labels:["0 - 9","10 - 19","20 - 29","30 - 39","40 - 49","50 - 59","60 - 69", "70 - 79", "+80"],
        datasets:[{
            label:"Casos sintomáticos exigindo hospitalização",
            data:[100.1,100.3,101.2,103.2,104.9,110.2,116.6,124.3,127.3],
            borderWidth:6,
            borderColor:'rgba(0, 123, 255,0.7)',
            backgroundColor: 'transparent',
        },
        {
            label:"Hospitalizados exigindo cuidados intensivos",
            data:[5.0,5.0,5.0,5.0,6.3,12.2,27.4,43.2,70.9],
            borderWidth:6,
            borderColor:'rgba(255,165,0,0.7)',
            backgroundColor: 'transparent',
        },
        {
            label:"Taxa de mortalidade pela infecção",
            data:[0.002,0.006,0.03,0.08,0.15,0.60,2.2,5.1,9.3],
            borderWidth:6,
            borderColor:'rgba(240, 52, 52, 0.8)',
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