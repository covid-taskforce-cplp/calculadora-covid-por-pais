var ctx = document.getElementsByClassName("radar");

var chartGraph= new Chart(ctx, {
    type:'line',
    data:{
        labels:["0","10","30","40","60","70","80"],
        datasets:[{
            label:"infectados",
            data:[10,20,30,40,50,60,70],
            borderWidth:6,
            borderColor:'rgba(0, 123, 255,0.85)',
            backgroundColor: 'transparent',
        },
        {
            label:"óbitos",
            data:[1,2,8,10,20,20,30,40],
            borderWidth:6,
            borderColor:'rgba(240, 52, 52, 0.85)',
            backgroundColor: 'transparent',
        } 
    ]
    },
    options:{
        title: {
        display:true,
        fontSize:20,
        text:"Relação Infectados/óbitos",
    },
    labels:{
        fontStyle: "Bold"
    }
}
});