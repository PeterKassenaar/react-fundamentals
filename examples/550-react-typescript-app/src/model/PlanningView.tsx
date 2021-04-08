import moment from "moment";

export interface PlanningViewModel {
    items: PlanningViewModelItem[];
}

export interface PlanningViewModelItem {
    id: number;
    group: number;
    title: string;
    start_time: moment.Moment;
    end_time: moment.Moment;
}
