import PropTypes from 'prop-types';
import { TransItem, TransBox } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
    return (
        <TransBox>
            <TransItem>{type}</TransItem>
            <TransItem>{amount}</TransItem>
            <TransItem>{currency}</TransItem>
        </TransBox>
    );
};
Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}