document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".category__box");
  const toggleBtn = document.getElementById("toggleBtn");
  const initialVisibleCount = 8; // Boshlanishida ko'rsatiladigan box'lar soni
  let isExpanded = false; // Holatni belgilash uchun

  function showBoxes(count) {
    boxes.forEach((box, index) => {
      if (index < count) {
        box.classList.add("visible");
      } else {
        box.classList.remove("visible");
      }
    });
  }

  // Boshlanishida faqat 8 ta box ko'rsatish
  showBoxes(initialVisibleCount);

  // Tugmani bosilganda ishlov berish

  toggleBtn?.addEventListener("click", function () {
    if (isExpanded) {
      // Kamroq ko'rsatish
      showBoxes(initialVisibleCount);
      toggleBtn.textContent = "Barchasi";
    } else {
      showBoxes(boxes.length);
      toggleBtn.textContent = "Yashirish";
    }
    isExpanded = !isExpanded;
  });

  Highcharts.chart("highcharts_container", {
    chart: {
      type: "pie",
      custom: {},
      events: {
        render() {
          const chart = this,
            series = chart.series[0];
          let customLabel = chart.options.chart.custom.label;

          if (!customLabel) {
            customLabel = chart.options.chart.custom.label = chart.renderer
              .label("Total<br/>" + "<strong>2 877 820</strong>")
              .css({
                color: "#000",
                textAnchor: "middle",
              })
              .add();
          }

          const x = series.center[0] + chart.plotLeft,
            y =
              series.center[1] + chart.plotTop - customLabel.attr("height") / 2;

          customLabel.attr({
            x,
            y,
          });
          // Set font size based on chart diameter
          customLabel.css({
            fontSize: `${series.center[2] / 12}px`,
          });
        },
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    title: {
      text: "E'tirozli holatlar bo'yicha",
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.0f}%</b>",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: "{point.name}",
          },
          {
            enabled: true,
            distance: -15,
            format: "{point.percentage:.0f}%",
            style: {
              fontSize: "0.9em",
            },
          },
        ],
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Registrations",
        colorByPoint: true,
        innerSize: "75%",
        data: [
          {
            name: "EV",
            y: 23.9,
          },
          {
            name: "Hybrids",
            y: 12.6,
          },
          {
            name: "Diesel",
            y: 37.0,
          },
          {
            name: "Petrol",
            y: 26.4,
          },
        ],
      },
    ],
  });

  Highcharts.chart("highcharts_container1", {
    chart: {
      type: "pie",
      custom: {},
      events: {
        render() {
          const chart = this,
            series = chart.series[0];
          let customLabel = chart.options.chart.custom.label;

          if (!customLabel) {
            customLabel = chart.options.chart.custom.label = chart.renderer
              .label("Total<br/>" + "<strong>2 877 820</strong>")
              .css({
                color: "#000",
                textAnchor: "middle",
              })
              .add();
          }

          const x = series.center[0] + chart.plotLeft,
            y =
              series.center[1] + chart.plotTop - customLabel.attr("height") / 2;

          customLabel.attr({
            x,
            y,
          });
          // Set font size based on chart diameter
          customLabel.css({
            fontSize: `${series.center[2] / 12}px`,
          });
        },
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    title: {
      text: "E'tirozli sohalar bo'yicha",
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    // subtitle: {
    //     text: 'Source: <a href="https://www.ssb.no/transport-og-reiseliv/faktaside/bil-og-transport">SSB</a>'
    // },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.0f}%</b>",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: "{point.name}",
          },
          {
            enabled: true,
            distance: -15,
            format: "{point.percentage:.0f}%",
            style: {
              fontSize: "0.9em",
            },
          },
        ],
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Registrations",
        colorByPoint: true,
        innerSize: "75%",
        data: [
          {
            name: "EV",
            y: 23.9,
          },
          {
            name: "Hybrids",
            y: 12.6,
          },
          {
            name: "Diesel",
            y: 7.0,
          },
          {
            name: "Petrol",
            y: 3.4,
          },
          {
            name: "Gas",
            y: 30.4,
          },
          {
            name: "Oil",
            y: 30,
          },
        ],
      },
    ],
  });
});

(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/countries/uz/uz-all.topo.json"
  ).then((response) => response.json());

  // Prepare demo data. The data is joined to map using value of 'hc-key'
  // property by default. See API docs for 'joinBy' for more info on linking
  // data and map.
  const data = [
    ["uz-fa", 10],
    ["uz-tk", 11],
    ["uz-an", 12],
    ["uz-ng", 13],
    ["uz-ji", 14],
    ["uz-si", 15],
    ["uz-ta", 16],
    ["uz-bu", 17],
    ["uz-kh", 18],
    ["uz-qr", 19],
    ["uz-nw", 20],
    ["uz-sa", 21],
    ["uz-qa", 22],
    ["uz-su", 23],
  ];

  // Create the chart
  Highcharts.mapChart("uzb_map", {
    chart: {
      map: topology,
    },

    title: {
      text: "Uzbekistan map",
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      min: 0,
      stops: [[0, "#2E90FA"]],
    },

    series: [
      {
        data: data,
        name: "Hudud",
        states: {
          hover: {
            color: "#B2DDFF",
            borderColor: "white",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });
})();
