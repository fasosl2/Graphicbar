class produto {
  constructor(january, february, march, april) {
    this.january = january;
    this.february = february;
    this.march = march;
    this.april = april;
  }
}

window.onload = function () {

  popular(category, "category");
  reloadCat();
};

function reloadCat() {
  var categ = document.getElementById("category");
  var selectedCat = categ.options[categ.selectedIndex].value;
  popular(product[selectedCat], "product");
  popular(brand[selectedCat][0], "brand");
  reload();
}

function reloadProd() {
  var categ = document.getElementById("category");
  var selectedCat = categ.options[categ.selectedIndex].value;
  var prod = document.getElementById("product");
  var selectedprod = prod.options[prod.selectedIndex].value;
  popular(brand[selectedCat][selectedprod], "brand");
  reload();
}

function reload(){
  var categ = document.getElementById("category");
  var selectedCat = categ.options[categ.selectedIndex].value;
  var prod = document.getElementById("product");
  var selectedprod = prod.options[prod.selectedIndex].value;
  var brand = document.getElementById("brand");
  var selectedbrand = brand.options[brand.selectedIndex].value;
  grafico(selectedCat,selectedprod,selectedbrand);
}
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

var produtos = [
  [
    [new produto(600,400,500,300), new produto(400,700,600,100), new produto(100,100,100,100)],
    [new produto(300,300,500,600), new produto(400,300,200,100)]
  ],
  [
    [new produto(600,500,400,300), new produto(200,300,400,500), new produto(300,200,500,400)],
    [new produto(600,700,500,100), new produto(700,600,500,400)],
    [new produto(200,100,300,500), new produto(600,600,500,500)]
  ]
];




function popular(options, selectName) {
  var select = document.getElementById(selectName);

  var length = select.options.length;
  for (i = length - 1; i >= 0; i--) {
    select.options[i] = null;
  }
  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = i;
    select.appendChild(el);
  }
}


function grafico(selectedCat,selectedprod,selectedbrand) {
  var a = produtos[selectedCat][selectedprod][selectedbrand];
  console.log(a);
  var options = {
    series: [{
      data: [a.january, a.february, a.march, a.april]
    }],
    chart: {
      width: screen.width,
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
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
chart.updateSeries([{
  data: [a.january, a.february, a.march, a.april]
}]);
}