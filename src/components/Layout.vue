<template>
  <div class="flex min-h-screen">
    <!-- 左側選單 -->
    <div class="w-64 bg-violet-600 text-white flex flex-col justify-between">
      <div>
        <!-- logo -->
        <div class="flex justify-center items-center h-16">
          <heroicons-outline-book-open
            class="w-10 h-10 mr-2"
          ></heroicons-outline-book-open>
          <span class="text-x1">Renpress</span>
        </div>
        <!-- 主要選單 -->
        <ul>
          <li>
            <router-link to="/" class="flex items-center px-5 py-3 text-white">
              <heroicons-outline-home class="w-5 h-5 mr-2" />
              首頁
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center px-5 py-3 text-violet-400 hover:text-white"
            >
              <heroicons-outline-document-text class="w-5 h-5 mr-2" />
              文章
            </router-link>
          </li>
          <li>
            <router-link
              to="/"
              class="flex items-center px-5 py-3 text-violet-400 hover:text-white"
            >
              <heroicons-outline-user class="w-5 h-5 mr-2" />
              個人資料
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 用戶名稱 -->
      <div
        class="border-t border-violet-400 flex justify-between items-center px-5 py-4"
      >
        <div class="flex items-center">
          <img src="" alt="" class="w-8 h-8 rounded-full mr-2" />
          <div class="tracking-wide font-medium">RenLi</div>
        </div>
        <button
          type="button"
          class="flex justify-center items-center w-7 h-7 hover:bg-violet-500 rounded transition-colors duration-100"
        >
          <heroicons-outline-ellipsis-vertical class="w-4 h-4" />
        </button>
      </div>
    </div>
    <!-- 右側內容 -->
    <div class="flex-grow min-w-0"><slot></slot></div>
  </div>
</template>
