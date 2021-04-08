import React, {useEffect, useState} from 'react';
import {PlanningViewModel, PlanningViewModelItem} from "../model/PlanningView"; // let's also import Component

// The Timeline stuff
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import axios from "axios";

// interface CalendarProps{
//     groups: any[]
//     items: any[]
// }

// const groups1 = [{id: 1, title: 'group 1'}, {id: 2, title: 'group 2'}]
//
// const items1 = [
//     {
//         id: 1,
//         group: 1,
//         title: 'item 101',
//         start_time: moment(),
//         end_time: moment().add(2, 'hour')
//     },
//     {
//         id: 2,
//         group: 2,
//         title: 'item 202',
//         start_time: moment().add(-1, 'hour'),
//         end_time: moment().add(1.5, 'hour')
//     },
//     {
//         id: 3,
//         group: 1,
//         title: 'item 303',
//         start_time: moment().add(4, 'hour'),
//         end_time: moment().add(7, 'hour')
//     }
// ]


export const Calendar = () => {
    const [groups, setGroups] = useState([])
    const [items, setItems] = useState([])

    const getItems = async () => {
        const groupsAxios = await axios.get('http://localhost:3001/groups')
        const itemsAxios = await axios.get('http://localhost:3001/items')
        const groupsData = groupsAxios.data
        const itemsData = itemsAxios.data
        // No worky-worky???
        setItems(itemsData);
        setGroups(groupsData);
        console.log('groups in state: ', groupsData);
        console.log('items in state: ', itemsData);
    }

    useEffect(()=>{
        getItems()
    },[])
    return (<div>
        Rendered by react!
        <Timeline
            groups={groups}
            items={items}
            defaultTimeStart={moment().add(-12, 'hour')}
            defaultTimeEnd={moment().add(12, 'hour')}
        />
    </div>)

}
