# Database Design

Dev_Calendar의 데이터베이스 설계 문서입니다.

현재는 Supabase PostgreSQL을 사용합니다.

---

## Main Table: work_events

업무 일정 데이터를 저장하는 핵심 테이블입니다.

| Column | Type | Description |
|---|---|---|
| id | uuid | 일정 고유 ID |
| work_date | date | 업무 날짜 |
| title | text | 업무 제목 |
| description | text | 업무 상세 내용 |
| project | text | 프로젝트명 |
| status | text | 업무 상태 |
| start_time | time | 시작 시간 |
| end_time | time | 종료 시간 |
| priority | text | 우선순위 |
| calendar_type | text | 캘린더 구분 |
| color | text | 일정 색상 |
| completed_at | timestamptz | 완료 처리 시간 |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 |

---

## Status Values

| Value | Description |
|---|---|
| 예정 | 아직 시작하지 않은 업무 |
| 진행중 | 현재 진행 중인 업무 |
| 완료 | 완료된 업무 |
| 보류 | 잠시 중단된 업무 |

---

## Calendar Type

| Value | Description |
|---|---|
| 내 캘린더 | 개인 업무 |
| 공유 캘린더 | 공유 일정 |
| 프로젝트 캘린더 | 프로젝트 단위 일정 |

---

## Future Tables

### projects

프로젝트 정보를 별도 관리하기 위한 테이블입니다.

| Column | Type | Description |
|---|---|---|
| id | uuid | 프로젝트 고유 ID |
| name | text | 프로젝트명 |
| color | text | 프로젝트 색상 |
| status | text | 프로젝트 상태 |
| created_at | timestamptz | 생성일 |

### daily_tasks

오늘 할 일 목록을 별도 관리하기 위한 테이블입니다.

### notes

업무별 메모를 별도 관리하기 위한 테이블입니다.