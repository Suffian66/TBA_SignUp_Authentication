import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "TBA Progress"
    },
    data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
            { y: 18, label: "A+" },
            { y: 49, label: "A" },
            { y: 9, label: "B" },
            { y: 5, label: "C" },
            { y: 19, label: "Passes" }
        ]
    }]
}

const Piechart = () => {
    return (
        <div>
            <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
        </div>
    )
}

export default Piechart;