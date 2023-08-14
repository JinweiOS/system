<template>
  <el-input v-model="cityCode" placeholder="请输入城市代码" />
  <el-button @click="getWeather">点击查询天气</el-button>
  <el-button @click="getWeatherPromise">点击查询天气（promise）</el-button>
  <el-button @click="getWeatherFetch">点击查询天气（fetch）</el-button>
  <el-button @click="getWeatherAxios">点击查询天气（axios）</el-button>
  <div>当前天气情况：{{ weatherInfo || '-' }}</div>
</template>

<script>
import { ref } from 'vue'
import { requestQuery, requestQueryPromise } from '@/http/xhr.js'
import { gaodeHttp } from '@/http/axios.js'
export default {
  name: 'UploadComp',
  setup() {
    const cityCode = ref('321100')
    const weatherInfo = ref('')
    function getWeather() {
      requestQuery(
        'GET',
        {
          key: 'b8ac34e4821f0a4b8c6f855d9be658bd',
          city: cityCode.value,
          extensions: 'base'
        },
        console.log
      )
    }

    async function getWeatherPromise() {
      const result = await requestQueryPromise('GET', {
        key: 'b8ac34e4821f0a4b8c6f855d9be658bd',
        city: cityCode.value,
        extensions: 'base'
      })
      console.log(result)
      weatherInfo.value = result.lives[0].weather
    }

    async function getWeatherFetch() {
      const result = await fetch(
        `https://restapi.amap.com/v3/weather/weatherInfo?city=${cityCode.value}&key=b8ac34e4821f0a4b8c6f855d9be658bd&extensions=base`
      )
      const data = await result.json()
      console.log(data)
    }

    async function getWeatherAxios() {
      const { data: res } = await gaodeHttp.get(`/weather/weatherInfo`, {
        params: {
          city: cityCode.value,
          key: 'b8ac34e4821f0a4b8c6f855d9be658bd',
          extensions: 'base'
        }
      })
      console.log(res)
    }

    return {
      getWeather,
      cityCode,
      getWeatherPromise,
      weatherInfo,
      getWeatherFetch,
      getWeatherAxios
    }
  }
}
</script>
