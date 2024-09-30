class DataService {

    getServiceDate(): Date {
        const dateNow = new Date();
        const offset = dateNow.getTimezoneOffset();
        return new Date(dateNow.getTime() - (offset * 60 * 1000));
    }

    getDataSemHoras(date: Date): Date {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    };
}

export default new DataService();
