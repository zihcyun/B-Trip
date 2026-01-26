# B Trip – B 級景點單日旅遊規劃 App PRD (MVP)

## 1. Product Description
### 1.1 Product Name
B Trip

### 1.2 Product Goal
專為台灣國內旅遊設計的簡潔單日 B 級景點行程規劃 App，讓使用者可快速儲存地點、排成一天行程，並透過分享行程獲得 B coin。

### 1.3 Target User
- 喜歡在地、非主流旅遊的 25–45 歲使用者
- 旅遊 KOC / 在地玩家

## 2. User Analysis
### 2.1 Pain Points
- Google Map 收藏過於雜亂，難以形成單日行程
- 傳統旅遊 App 功能過重
- 旅遊分享難以直接複製使用

### 2.2 Core Requests
- 快速儲存地點
- 輕量化單日行程規劃
- 下載他人行程直接使用
- 分享有回饋

## 3. MVP
### 3.1 Core Features
1. Map + 儲存地點
2. 單日行程拖曳排序
3. 行程 Po 文分享
4. 下載他人行程
5. B coin（僅顯示數值）

### 3.2 Advance Features
- 多人共編
- AI 排程
- B coin 兌換

## 4. 技術規格
### 4.1 技術棧
- Next.js / Tailwind
- Supabase
- Google Maps API

### 4.2 平台
- PWA（iOS / Android）

### 4.3 Data Structure
Trip, Place, Post, User

### 4.4 Performance
- 地圖載入 < 3 秒
- 支援 1k DAU
