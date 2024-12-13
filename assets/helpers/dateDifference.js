/**
 * 
 * @param {Date} olderDate 
 * @param {Date} newerDate 
 * @returns {Number} - The difference in hours between two dates
 */

export const dateDifference = (olderDate, newerDate) => {
    const firstDate = new Date(olderDate);
    const secondDate = new Date(newerDate);

    const differenceInMiliseconds = firstDate - secondDate;

    if (differenceInMiliseconds < 0) {
        return 0;
    }

    return differenceInMiliseconds / (1000 * 60 * 60);
};