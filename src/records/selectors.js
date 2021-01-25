import { createSelector } from 'reselect';

export const getRecords = state => state.records.data;
export const getRecordsFilter = state => state.records.filter;

export const getGames = createSelector(
    getRecords,
    (records)  => {
        const games = new Set();
        for (let record of records) {
            games.add(record.game);
        }
        return Array.from(games);
    }
)