import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    title: {
        text: "Classwise Data"
    },
    data: [
    {
        type: "column",
        dataPoints: [
            { label: "PG",  y: 12  },
            { label: "Nur", y: 10  },
            { label: "Prep", y: 15  },
            { label: "I",  y: 14  },
            { label: "II",  y: 18  },
            { label: "III",  y: 10  },
            { label: "IV",  y: 8  },
            { label: "V",  y: 9  },
            { label: "VI",  y: 13  },
            { label: "VII",  y: 15  },
            { label: "VIII",  y: 13  },
            { label: "IX",  y: 12  },
            { label: "X",  y: 11  },
            { label: "XI",  y: 10  },
            { label: "XII",  y: 6  }
        ]
    }
    ]
}

const Barchart = () => {
    return(
        <div>
      <CanvasJSChart options = {options}
        //  onRef = {ref => this.chart = ref} 
      />
    </div>
    )
}

export default Barchart;