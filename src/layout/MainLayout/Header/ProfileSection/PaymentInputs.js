import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { css } from 'styled-components';

export default function PaymentInputs() {
    const { wrapperProps, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    return (
        <PaymentInputsWrapper
            {...wrapperProps}
            styles={{
                fieldWrapper: {
                    base: css`
                        margin-bottom: 1rem;
                    `
                },
                inputWrapper: {
                    base: css`
                        border-color: #5e35a5;
                    `,
                    errored: css`
                        border-color: maroon;
                    `,
                    focused: css`
                        border-color: #5e35f5;
                        border-width: medium;
                        box-shadow: unset;
                        outline-offset: 2px;
                    `
                },
                input: {
                    base: css`
                        color: green;
                    `,
                    errored: css`
                        color: maroon;
                    `,
                    cardNumber: css`
                        width: 7rem;
                        padding-right: 1em;
                    `,
                    expiryDate: css`
                        width: 4rem;
                    `,
                    cvc: css`
                        width: 2rem;
                    `
                },
                errorText: {
                    base: css`
                        color: maroon;
                    `
                }
            }}
        >
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
        </PaymentInputsWrapper>
    );
}
