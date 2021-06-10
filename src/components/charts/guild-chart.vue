<script>
  import { Line } from 'vue-chartjs'

  export default {
    name:"guild-chart",
    extends: Line,
    mounted () {
      this.renderGuildChart()
    },
    props:['dataList'],
    methods:{
      renderGuildChart: function(){
        this.renderChart({
          labels: this.dataList.labels,
          datasets: [
            {
              label: '전체 순위',
              backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgb(153, 102, 255)',
              ],
              yAxisID:'totRank',
              fill:false,
              data: this.dataList.totRanks
            },
            {
              label: '클래스 순위',
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
              ],
              yAxisID:'totRank',
              fill:false,
              data: this.dataList.classRanks
            },
            {
              label: '서버 순위',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255,99,132,1)',
              ],
              pointBorderColor: '#249EBF',
              yAxisID:'serverRank',
              fill:false,
              data: this.dataList.serverRanks
            }
          ]
        },{
          scales: {
            yAxes: [
              {
                id:'totRank',
                display: true,
                position: 'left',
                ticks: {
                  reverse: true,
                  beginAtZero: false
                },
                gridLines: {
                  display: true
                }
              },
              {
                id:'serverRank',
                display: true,
                position: 'right',
                ticks: {
                  reverse: true,
                  beginAtZero: false
                },
                gridLines: {
                  display: true
                }
              },
            ],
            xAxes:{
              gridLines: {
                display: false
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function (t, d) {
              return d.datasets[t.datasetIndex].label+":"+t.yLabel
            }
          }
        },

        })
      }
    },
    watch:{
      'dataList'(to,from){
        this.renderGuildChart()
      }
    }
  }
</script>
