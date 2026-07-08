import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { supabase } from './lib/supabase'
import './App.css'

type WorkEvent = {
  id: string
  work_date: string
  title: string
  description: string | null
  project: string | null
  status: string | null
  start_time: string | null
  end_time: string | null
}

function App() {
  const [events, setEvents] = useState<WorkEvent[]>([])
  const [selectedDate, setSelectedDate] = useState('')
  const [title, setTitle] = useState('')
  const [project, setProject] = useState('')
  const [description, setDescription] = useState('')

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('work_events')
      .select('*')
      .order('work_date', { ascending: true })

    if (error) {
      console.error(error)
      return
    }

    setEvents(data || [])
  }

  const addEvent = async () => {
    if (!selectedDate || !title) {
      alert('날짜와 제목은 필수야')
      return
    }

    const { error } = await supabase.from('work_events').insert({
      work_date: selectedDate,
      title,
      project,
      description,
      status: '진행중',
    })

    if (error) {
      console.error(error)
      alert('저장 실패')
      return
    }

    setTitle('')
    setProject('')
    setDescription('')
    fetchEvents()
  }

  const deleteEvent = async (id: string) => {
    const { error } = await supabase
      .from('work_events')
      .delete()
      .eq('id', id)

    if (error) {
      console.error(error)
      alert('삭제 실패')
      return
    }

    fetchEvents()
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className="page">
      <section className="calendar-area">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale="ko"
          height="auto"
          dateClick={(info) => setSelectedDate(info.dateStr)}
          events={events.map((event) => ({
            id: event.id,
            title: event.project ? `[${event.project}] ${event.title}` : event.title,
            date: event.work_date,
          }))}
        />
      </section>

      <section className="side-panel">
        <h2>업무 등록</h2>

        <label>날짜</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <label>제목</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="예: JSONL 오류 수정"
        />

        <label>프로젝트</label>
        <input
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="예: KISTEP"
        />

        <label>내용</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="작업 내용을 적어줘"
        />

        <button onClick={addEvent}>저장</button>

        <hr />

        <h2>{selectedDate || '전체'} 업무</h2>

        {events
          .filter((event) => !selectedDate || event.work_date === selectedDate)
          .map((event) => (
            <div className="event-card" key={event.id}>
              <strong>{event.title}</strong>
              <p>{event.project}</p>
              <p>{event.description}</p>
              <button onClick={() => deleteEvent(event.id)}>삭제</button>
            </div>
          ))}
      </section>
    </div>
  )
}

export default App