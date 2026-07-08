# Architecture

Dev_Calendar의 전체 구조와 설계 방향을 정리합니다.

---

## Project Goal

Dev_Calendar는 개발 업무와 프로젝트 진행 상황을 캘린더 기반으로 관리하는 업무 대시보드입니다.

단순 일정 관리가 아니라 다음 정보를 한 화면에서 확인하는 것을 목표로 합니다.

- 프로젝트별 일정
- 오늘 할 일
- 완료된 업무
- 진행 중 프로젝트
- 프로젝트별 진행률
- 상태별 필터링

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite

### Calendar UI

- FullCalendar

### Backend / BaaS

- Supabase

### Database

- PostgreSQL

### Future Platform

- Web
- Mac App
- Windows App
- iPhone App

---

## Current Structure

```text
src/
├── lib/
│   └── supabase.ts
├── App.tsx
└── App.css
```

---

## Target Structure
```text
src/
├── components/
│   ├── Sidebar/
│   ├── Calendar/
│   ├── RightPanel/
│   ├── EventForm/
│   └── EventCard/
│
├── pages/
│   └── Dashboard/
│
├── services/
│   └── eventService.ts
│
├── hooks/
│   └── useEvents.ts
│
├── types/
│   └── event.ts
│
├── styles/
│
├── App.tsx
└── main.tsx
```

---

## UI Layout
```text
┌──────────────┬──────────────────────────┬─────────────────┐
│ Sidebar      │ Calendar                 │ Right Panel     │
│              │                          │                 │
│ Calendars    │ Monthly View             │ Today Tasks     │
│ Projects     │ Project Color Tags       │ Completed Tasks │
│ Status       │ Status Display           │ In Progress     │
└──────────────┴──────────────────────────┴─────────────────┘
```

---

## Data Flow
```text
React UI
  ↓
eventService
  ↓
Supabase Client
  ↓
Supabase PostgreSQL
```

---

## Development Direction
1. UI v1 레이아웃 구현
2. 컴포넌트 분리
3. Supabase CRUD 정리
4. 프로젝트 / 상태 필터 추가
5. 오늘 할 일 / 완료 목록 추가
6. 프로젝트 진행률 표시
7. 반응형 UI 적용
