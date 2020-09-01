window.onload = function () {

  popular(category, "category");
  popular(product[0], "product");
  popular(brand[0][0], "brand");

  grafico();

};



var colors = ['#008FFB', '#008FFB', '#008FFB', '#008FFB']


var category = ["Food", "Object"];
var product = [["Cereais", "Salgadinhos"], ["Sapatos", "Chapeus", "Gravatas"]];
var brand = [
  [
    ["Cereal1", "Cereal2", "Cereal3"],
     ["Salgadinho1", "Salgadinho2"]
  ],
[
  ["Sapato1", "Sapato2", "Sapato3"], 
  ["Chapeu1", "Chapeu2"], 
  ["Gravata1", "Gravata2"]
]
];



function popular(options, selectName) {
  var select = document.getElementById(selectName);

  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = i;
    select.appendChild(el);
  }
}


function grafico() {
  var options = {
    series: [{
      data: [600, 100, 300, 450]
    }],
    chart: {
      width: screen.width,
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April'],
      labels: {
        style: {
          colors: colors,
          fontSize: '12px'
        }
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}