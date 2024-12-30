import React from 'react';
import './APP.css';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule';
class App extends React.Component{
    public render() {
        return <ScheduleComponent>
            <inject service={[Day,Week,WorkWeek,Month,Agenda]} />
        </ScheduleComponent>
    }
}
export default App;