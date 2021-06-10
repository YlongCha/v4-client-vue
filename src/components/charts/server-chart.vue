<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props:['serverData'],
  watch:{
    'serverData'(to,from){
      this.renderServerChart()
    }
  },
  mounted () {
    this.renderServerChart()
  },
  methods:{
    renderServerChart:function(){
      this.renderChart({
        labels: this.serverData.labels,
        datasets: [
          {
            label: this.serverData.labels,
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            data: this.serverData.data
          }
        ]
      },  {
        responsive: true,
        maintainAspectRatio: false
      })
    }
  }
}
</script>