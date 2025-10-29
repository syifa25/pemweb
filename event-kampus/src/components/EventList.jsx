import EventCard from './EventCard'

function EventList() {
    const events =[
        {title: 'Seminar AI', date: '10 November 2025', location: 'Aula FST'},
        {title: 'Workshop UI/UX', date: '12 NOvember 2025', location: 'Lab Komputer'}
    ]
    return(
        <div>
            {events.map((event, index) =>(
                <EventCard 
                    key={index}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                />
            ))}
        </div>
    )
}

export default EventList