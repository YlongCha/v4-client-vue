<template>
  <div>
    <b-button v-b-toggle.sidebar style="background-color:rgb(71, 169, 217); border-color:rgb(71, 169, 217)">
        <b-icon icon="justify" aria-hidden="true"></b-icon>
    </b-button>
    <b-sidebar id="sidebar"  shadow class="my-sidebar"  backdrop no-header>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-title">Menu</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item to="/" @click="hide">Home</b-nav-item>
              <b-nav-item to="/hero-info" @click="hide">캐릭터 검색</b-nav-item>
              <b-nav-item to="/server-info" @click="hide">서버 검색</b-nav-item>
              <b-nav-item to="/guild-info" @click="hide">길드 검색</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">사이드바 닫기</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name:"side-bar"
}
</script>