<template>
  <view class="content">
    <map class="map" id="map1" ref="map1" :longitude="location.longitude" :latitude="location.latitude" :scale="scale"
      :markers="markers" :include-points="includePoints" :polyline="polyline" :polygons="polygons" :circles="circles"
      :controls="controls" :show-location="showLocation" :enable-3D="enable3D" :rotate="rotate" :skew="skew"
      :show-compass="showCompass" :enable-overlooking="enableOverlooking" :enable-zoom="enableZoom"
      :enable-scroll="enableScroll" :enable-rotate="enableRotate" :enable-satellite="enableSatellite"
      :enable-traffic="enableTraffic" @markertap="onmarkertap" @callouttap="oncallouttap" @controltap="oncontroltap"
      @regionchange="onregionchange" @tap="maptap" @updated="onupdated" @poitap="onpoitap"></map>
    <scroll-view class="scrollview" scroll-y="true">
      <view class="tips">注意：需要正确配置地图服务商的Key才能正常显示地图组件</view>
      <view class="uni-title">
        <text class="uni-title-text">属性示例</text>
      </View>
      <input-data defaultValue="13" title="scale: 缩放级别，取值范围为5-18" type="number"
        @confirm="confirm_scale_input"></input-data>
      <boolean-data :defaultValue="showLocation" title="开启显示带有方向的当前定位点" @change="change_show_location"></boolean-data>
      <boolean-data :default-value="enable3D" :disabled="enableSatellite" title="3D效果(放大缩放级别才能看到建筑物3D效果)" @change="change_enable_3d"></boolean-data>
      <boolean-data :default-value="showCompass" title="显示指南针" @change="change_show_campass"></boolean-data>
      <boolean-data :default-value="enableOverlooking" title="俯视支持" @change="change_enable_overlooking"></boolean-data>
      <boolean-data :default-value="enableRotate" title="旋转支持" @change="change_enable_rotate"></boolean-data>
      <boolean-data :default-value="enableZoom" title="缩放支持" @change="change_enable_zoom"></boolean-data>
      <boolean-data :default-value="enableScroll" title="拖动支持" @change="change_enable_scroll"></boolean-data>
      <boolean-data :default-value="enableSatellite" title="卫星图" @change="change_enable_satellite"></boolean-data>
      <boolean-data :default-value="enableTraffic" title="实时路况" @change="change_enable_traffic"></boolean-data>

      <button class="button" @click="addControls">控件</button>
      <button class="button" @click="addMarkers">添加标记点</button>
      <!-- #ifdef WEB -->
      <button class="button" @click="addMarkersLabel">为标记点旁边增加标签</button>
      <!-- #endif -->
      <button class="button" @click="removeMarker">移除ID为4的标记点和标签</button>
      <button class="button" @click="addPolyline">添加路线</button>
      <button class="button" @click="removePolyline">移除一条路线</button>
      <button class="button" @click="addPolygons">添加多边形</button>
      <button class="button" @click="removePolygon">移除一个多边形</button>
      <button class="button" @click="addCircles">添加圆</button>
      <button class="button" @click="removeCircle">移除一个圆</button>
      <button class="button" @click="includePoint">缩放视野以包含所有给定的坐标点</button>
      <view class="uni-title">
        <text class="uni-title-text">方法示例</text>
      </View>
      <button class="button" @click="handleGetCenterLocation">获取当前地图中心的经纬度</button>
      <button class="button" @click="handleGetRegion">获取当前地图的视野范围</button>
      <button class="button" @click="handleTranslateMarker">平移marker</button>
      <button class="button" @click="handleMoveToLocation">将地图中心移动到指定坐标</button>
      <button class="button" @click="handleMoveToMyLocation">将地图中心移动到当前位置</button>
      <button class="button" @click="handleGetScale">获取当前地图的缩放级别</button>

    </scroll-view>
  </view>
</template>



<style>
  .content {
    flex: 1;
  }

  .map {
    width: 100%;
    height: 300px;
    background-color: #f0f0f0;
  }

  .scrollview {
    flex: 1;
    padding: 10px;
  }

  .list-item {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 5px 0px;
  }

  .list-text {
    flex: 1;
  }

  .button {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .tips {
    font-size: 12px;
    margin-top: 15px;
    opacity: .8;
  }
</style>

