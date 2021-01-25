export const CREATE_RECORD = 'CREATE_RECORD';
export const create_record = record => ({
    type: CREATE_RECORD,
    payload: { record }
});
