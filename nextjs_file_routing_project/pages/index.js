import EventList from '../components/events/event-list';
import {getFeaturedEvents} from '../dummy-data'; 

function HomePage(){
    const featureEvents = getFeaturedEvents(); 

    return (
        <div>
            <EventList items={featureEvents} />
        </div>
    );
}

export default HomePage; 