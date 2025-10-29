function EventCard({title, date, location}) {
    return(
        <div className="event-card">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{location}</p>
        </div>
    )
}

export default EventCard