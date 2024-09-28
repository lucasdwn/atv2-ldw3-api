class DataService {

    getServiceDate(): Date {
        const dateNow = new Date();
        const offset = dateNow.getTimezoneOffset();
        return new Date(dateNow.getTime() - (offset * 60 * 1000));
    }
}

export default new DataService();
