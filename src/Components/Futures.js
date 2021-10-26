import react from "react";
import '../Css/Futures.css';
import Sidebar from "./Sidebar";
import Chart from "react-apexcharts";
import Header from "./Header";
import { useEffect } from "react";
import { useState } from "react"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function Futures() {
    const [futuresList, setFuturesList] = useState([]);
    const [currentData, setCurrentData] = useState({});
    const [currentFuture, setCurrentFuture] = useState();
    const [chartOptions, setChartOptions] = useState({});
    const [chartSeries, setChartSeries] = useState([]);


    function updateParameters(data, symbol) {
        console.log("START")
        var today = new Date();
        console.log(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds())
        let X = [], prices = [], temp = [];
        for (let e in data[symbol]) {
            X.push(e);
            prices.push(data[symbol][e]['Close'])
        }

        data = data[symbol]

        var vp = 0, vol = 0;
        for (let i = 0; i < X.length; i++) {
            let avg = (parseFloat(data[X[i]]['High']) + parseFloat(data[X[i]]['Low']) + parseFloat(data[X[i]]['Close'])) / 3, volume = parseFloat(data[X[i]]['Volume']);
            vp += (avg * volume)
            vol += volume
            temp.push(Math.round(vp / vol))
        }

        // var line = {
        //     chart: {
        //         id: "straddle-strangle",
        //         height: '100%'
        //     },
        //     stroke: {
        //         show: true,
        //         curve: 'smooth',
        //         lineCap: 'butt',
        //         colors: undefined,
        //         width: 1.5,
        //         dashArray: 0,
        //     },
        //     xaxis: {
        //         categories: X,
        //         title: {
        //             text: "Time",
        //             style: {
        //                 color: undefined,
        //                 fontSize: '20px',
        //                 fontFamily: 'Helvetica, Arial, sans-serif',
        //                 fontWeight: 600,
        //                 cssClass: 'apexcharts-xaxis-title',
        //             },
        //         },
        //         tickPlacement: 'between',
        //         tickAmount: 10,
        //         labels: {
        //             show: true,
        //             rotate: -45,
        //             rotateAlways: false,
        //             hideOverlappingLabels: true,
        //             showDuplicates: false,
        //             trim: true,
        //             minHeight: undefined,
        //             maxHeight: 400,
        //             style: {
        //                 colors: [],
        //                 fontSize: '12px',
        //                 fontFamily: 'Helvetica, Arial, sans-serif',
        //                 fontWeight: 400,
        //                 cssClass: 'apexcharts-xaxis-label',
        //             },
        //             offsetX: 0,
        //             offsetY: 0,
        //             format: undefined,
        //             formatter: undefined,
        //             datetimeUTC: true,
        //             datetimeFormatter: {
        //                 year: 'yyyy',
        //                 month: "MMM 'yy",
        //                 day: 'dd MMM',
        //                 hour: 'HH:mm',
        //             },
        //         }
        //     },
        //     yaxis: {
        //         title: {
        //             text: symbol,
        //             rotate: -90,
        //             offsetX: 0,
        //             offsetY: 0,
        //             style: {
        //                 color: undefined,
        //                 fontSize: '20px',
        //                 fontFamily: 'Helvetica, Arial, sans-serif',
        //                 fontWeight: 600,
        //                 cssClass: 'apexcharts-yaxis-title',
        //             },
        //         },
        //         tickAmount: 10
        //     }
        // }

        var options = {
            title: {
                text: 'My chart'
            },
            xAxis: {
                categories: X
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: [{
                name: symbol + " FUTURE",
                data: prices,
            },
            {
                name: "VWAP",
                data: temp
            }]
        }

        // var series = [{
        //     name: symbol + " FUTURE",
        //     data: prices,
        // },
        // {
        //     name: "VWAP",
        //     data: temp
        // }];
        setChartOptions(options);
    }

    function updateStateAfterFetching(data, symbol) {
        updateParameters(data, symbol);

    }

    function updateState(symbol) {
        updateParameters(currentData, symbol)
    }

    function fetchFutures() {
        const url = 'https://kpiro.com/futures';
        const requestOptions = {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        };
        var DATA;
        fetch(url, requestOptions).then(
            (response) => {
                response.json().then(
                    (data) => {
                        data = data['data']
                        console.log(data);
                        let lst = [];
                        for (let e in data) {
                            lst.push(e)
                        }
                        setFuturesList(lst)
                        setCurrentFuture(lst[0])
                        setCurrentData(data)
                        updateStateAfterFetching(data, lst[0])
                    }
                )
            }
        )

    }

    useEffect(() => {
        fetchFutures();
    }, [])
    return (
        <>
            <div className="futures">
                <Sidebar />
                <Header />
                <section className="home-section">

                    <div className="futuresCard">
                        <form action="" className="form-group form-inline">
                            Futures Chart
                            <select
                                value={currentFuture}
                                onChange={(e) => {
                                    setCurrentFuture(e.target.value);
                                    updateState(e.target.value)
                                }}
                                className="futuresSelect"
                            >
                                {
                                    futuresList.map((item, idx) => {
                                        return (
                                            <option value={item} key={idx}>
                                                {item}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            {/* <input type="submit" value="Submit" className="btn btn-sm btn-info ml-5" /> */}

                        </form>
                    </div>
                    <div className="col-md-12">
                        {/* <Chart
                            options={chartOptions}
                            series={chartSeries}
                            type="line"
                            width="95%"
                            height="600px"
                        /> */}
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={chartOptions}
                            height="600px"
                        // height="1px"
                        />
                    </div>
                </section>
            </div>


        </>
    )
}