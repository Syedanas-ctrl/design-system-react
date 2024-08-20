export const formatNumbertoRupee = (amount: number) => {
    const formatter = new Intl.NumberFormat('en-IN');
    return formatter.format(amount);
};

export const calculatePercentage = (numerator: number, denominator: number): number => {
    try {
        if (numerator == denominator || denominator == 0) {
            return 0;
        } else {
            const percentage = 100 - Math.round((numerator / denominator) * 100);
            return percentage;
        }
    } catch (error) {
        console.error('DEBUG: helper|calculatePercentage', error);
        return 0;
    }
};